'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

type Topic = 'project' | 'job' | 'speaking' | 'question' | 'feedback' | 'other'

const REPLY_REQUIRED: Topic[] = ['project', 'job', 'speaking']

type FormState = {
  topic: Topic | ''
  name: string
  email: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const INITIAL: FormState = { topic: '', name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { t } = useTranslation('common')
  const [form, setForm] = useState<FormState>(INITIAL)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const topics = t('contact.topics', { returnObjects: true }) as Record<Topic, string>

  const replyRequired = form.topic !== '' && REPLY_REQUIRED.includes(form.topic as Topic)

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFieldErrors({})
    setServerError('')
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setForm(INITIAL)
      return
    }

    if (res.status === 422 && data.errors) {
      setFieldErrors(data.errors)
      setStatus('idle')
      return
    }

    setServerError(data.error ?? t('contact.errorGeneric'))
    setStatus('error')
  }

  const inputClass = (field: keyof FormState) =>
    `w-full bg-surface border px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-faint focus:outline-none transition-colors ${
      fieldErrors[field]
        ? 'border-red-500/70 focus:border-red-500'
        : 'border-border focus:border-accent-teal'
    }`

  if (status === 'success') {
    return (
      <>
        <Nav />
        <main className="mx-auto max-w-2xl px-4 py-16 md:px-8">
          <div className="grid-bg clip-corners border border-accent-teal p-10 text-center">
            <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-teal">// SENT</p>
            <h1 className="mb-4 text-2xl font-bold text-text-primary">{t('contact.successTitle')}</h1>
            <p className="text-sm leading-relaxed text-text-muted">{t('contact.successBody')}</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-4 py-16 md:px-8">
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">// CONTACT</p>
        <h1 className="mb-2 text-3xl font-bold text-text-primary">{t('contact.title')}</h1>
        <p className="mb-12 text-sm leading-relaxed text-text-muted">{t('contact.subtitle')}</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">

          {/* Topic */}
          <div>
            <label className="mb-2 block font-mono text-xs tracking-widest text-text-primary uppercase">
              {t('contact.fields.topic')} <span className="text-accent-amber">*</span>
            </label>
            <select
              value={form.topic}
              onChange={(e) => set('topic', e.target.value)}
              required
              className={`${inputClass('topic')} appearance-none cursor-pointer`}
            >
              <option value="" disabled>{t('contact.fields.topicPlaceholder')}</option>
              {(Object.entries(topics) as [Topic, string][]).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            {fieldErrors.topic && <p className="mt-1 font-mono text-xs text-red-400">{fieldErrors.topic}</p>}
          </div>

          {/* Name */}
          <div>
            <label className="mb-2 block font-mono text-xs tracking-widest text-text-primary uppercase">
              {t('contact.fields.name')} <span className="text-accent-amber">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder={t('contact.fields.namePlaceholder')}
              maxLength={100}
              required
              className={inputClass('name')}
            />
            {fieldErrors.name && <p className="mt-1 font-mono text-xs text-red-400">{fieldErrors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-mono text-xs tracking-widest text-text-primary uppercase">
              {t('contact.fields.email')}
              {replyRequired
                ? <span className="text-accent-amber"> *</span>
                : <span className="ml-2 font-mono text-xs normal-case tracking-normal text-text-faint">{t('contact.fields.emailOptional')}</span>
              }
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder={t('contact.fields.emailPlaceholder')}
              maxLength={254}
              required={replyRequired}
              className={inputClass('email')}
            />
            {fieldErrors.email && <p className="mt-1 font-mono text-xs text-red-400">{fieldErrors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block font-mono text-xs tracking-widest text-text-primary uppercase">
              {t('contact.fields.subject')} <span className="text-accent-amber">*</span>
            </label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => set('subject', e.target.value)}
              placeholder={t('contact.fields.subjectPlaceholder')}
              maxLength={150}
              required
              className={inputClass('subject')}
            />
            {fieldErrors.subject && <p className="mt-1 font-mono text-xs text-red-400">{fieldErrors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-mono text-xs tracking-widest text-text-primary uppercase">
              {t('contact.fields.message')} <span className="text-accent-amber">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder={t('contact.fields.messagePlaceholder')}
              maxLength={3000}
              required
              rows={6}
              className={`${inputClass('message')} resize-y`}
            />
            <p className="mt-1 text-right font-mono text-xs text-text-faint">
              {form.message.length} / 3000
            </p>
            {fieldErrors.message && <p className="mt-1 font-mono text-xs text-red-400">{fieldErrors.message}</p>}
          </div>

          {serverError && (
            <p className="font-mono text-xs text-red-400">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="clip-corners w-full bg-accent-amber px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === 'sending' ? t('contact.sending') : t('contact.submit')}
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}
