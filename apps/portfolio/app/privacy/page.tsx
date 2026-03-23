import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">// LEGAL</p>
        <h1 className="mb-2 text-3xl font-bold text-text-primary">Datenschutzerklärung</h1>
        <p className="mb-12 font-mono text-xs text-text-faint">Privacy Policy</p>

        <div className="space-y-10 text-sm leading-relaxed text-text-muted">

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              1. Verantwortlicher / Controller
            </h2>
            <p>
              Verantwortlich im Sinne der Datenschutzgesetze ist:<br />
              <span className="text-text-primary">Konrad Abe</span><br />
              E-Mail: <a href="mailto:info@allbitsequal.com" className="text-accent-teal hover:opacity-80 transition-opacity">info@allbitsequal.com</a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              2. Hosting
            </h2>
            <p>
              Diese Website wird gehostet bei <span className="text-text-primary">Vercel Inc.</span>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel kann beim Aufruf dieser Website automatisch Server-Logfiles erfassen, die Ihr Browser übermittelt. Hierzu gehören IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene URL sowie der verwendete Browser.
            </p>
            <p className="mt-3">
              Vercel ist nach dem EU-U.S. Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:opacity-80 transition-opacity">Datenschutzerklärung von Vercel</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              3. Schriftarten / Fonts
            </h2>
            <p>
              Diese Website verwendet die Schriftarten <span className="text-text-primary">Space Grotesk</span> und <span className="text-text-primary">JetBrains Mono</span>, die über den Next.js Font-Dienst selbst gehostet werden. Es werden keine Verbindungen zu externen Schriftarten-Servern hergestellt, und es werden keine personenbezogenen Daten an Dritte übermittelt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              4. Cookies und Tracking
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies, keine Analyse-Tools und keine Werbetechnologien. Es werden keine personenbezogenen Daten für Marketing- oder Analysezwecke erhoben oder verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              5. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zum Zweck der Bearbeitung der Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              6. Ihre Rechte / Your Rights
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="mt-2 space-y-1 list-none">
              {[
                'Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)',
                'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
                'Löschung Ihrer Daten (Art. 17 DSGVO)',
                'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Datenübertragbarkeit (Art. 20 DSGVO)',
                'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
              ].map((right) => (
                <li key={right} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal" />
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@allbitsequal.com" className="text-accent-teal hover:opacity-80 transition-opacity">info@allbitsequal.com</a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              7. Beschwerderecht
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde für Berlin ist die <span className="text-text-primary">Berliner Beauftragte für Datenschutz und Informationsfreiheit</span>, Friedrichstr. 219, 10969 Berlin.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <p className="font-mono text-xs text-text-faint">
              Stand: März 2026
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
