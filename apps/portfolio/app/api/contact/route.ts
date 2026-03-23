import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Instantiated inside the handler so it reads the env var at request time, not build time
function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

const VALID_TOPICS = ['project', 'job', 'speaking', 'question', 'feedback', 'other'] as const
type Topic = typeof VALID_TOPICS[number]

// Topics where a response is expected — email is required
const REPLY_REQUIRED: Topic[] = ['project', 'job', 'speaking']

const MAX_NAME    = 100
const MAX_EMAIL   = 254
const MAX_SUBJECT = 150
const MAX_MESSAGE = 3000

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

function isValidEmail(email: string): boolean {
  // RFC 5322 simplified — good enough for a contact form
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= MAX_EMAIL
}

const topicLabels: Record<Topic, string> = {
  project:  'Project Inquiry',
  job:      'Job Opportunity',
  speaking: 'Speaking / Event Invitation',
  question: 'Technical Question',
  feedback: 'General Feedback',
  other:    'Other',
}

export async function POST(req: NextRequest) {
  // Only accept JSON
  const contentType = req.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>

  // Extract and coerce to strings
  const topic   = typeof raw.topic   === 'string' ? raw.topic.trim()   : ''
  const name    = typeof raw.name    === 'string' ? raw.name.trim()    : ''
  const email   = typeof raw.email   === 'string' ? raw.email.trim()   : ''
  const subject = typeof raw.subject === 'string' ? raw.subject.trim() : ''
  const message = typeof raw.message === 'string' ? raw.message.trim() : ''

  // Validate topic (allowlist — reject anything unexpected)
  if (!VALID_TOPICS.includes(topic as Topic)) {
    return NextResponse.json({ error: 'Invalid topic' }, { status: 422 })
  }

  const validTopic = topic as Topic
  const replyRequired = REPLY_REQUIRED.includes(validTopic)

  // Validate required fields
  const errors: Record<string, string> = {}

  if (!name)                        errors.name    = 'Name is required'
  if (name.length > MAX_NAME)       errors.name    = `Name must be ${MAX_NAME} characters or fewer`
  if (!subject)                     errors.subject = 'Subject is required'
  if (subject.length > MAX_SUBJECT) errors.subject = `Subject must be ${MAX_SUBJECT} characters or fewer`
  if (!message)                     errors.message = 'Message is required'
  if (message.length > MAX_MESSAGE) errors.message = `Message must be ${MAX_MESSAGE} characters or fewer`

  if (replyRequired && !email) {
    errors.email = 'Email is required for this topic'
  }
  if (email && !isValidEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  // Sanitize: strip any HTML tags from all user-supplied values
  // (these go into the email body as text, not rendered as HTML)
  const safeName    = stripHtml(name)
  const safeEmail   = stripHtml(email)
  const safeSubject = stripHtml(subject)
  const safeMessage = stripHtml(message)
  const safeTopicLabel = topicLabels[validTopic]

  const toAddress = process.env.CONTACT_TO_EMAIL ?? 'info@allbitsequal.com'

  try {
    await getResend().emails.send({
      from: 'AllBitsEqual Contact Form <contact@allbitsequal.com>',
      to:   toAddress,
      replyTo: safeEmail || undefined,
      subject: `[${safeTopicLabel}] ${safeSubject}`,
      text: [
        `Topic:   ${safeTopicLabel}`,
        `From:    ${safeName}`,
        `Email:   ${safeEmail || '(not provided)'}`,
        `Subject: ${safeSubject}`,
        '',
        safeMessage,
      ].join('\n'),
    })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
