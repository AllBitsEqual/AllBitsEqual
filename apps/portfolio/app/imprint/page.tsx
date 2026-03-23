import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function Imprint() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent-amber">// LEGAL</p>
        <h1 className="mb-12 text-3xl font-bold text-text-primary">Impressum</h1>

        <div className="space-y-10 text-sm leading-relaxed text-text-muted">

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Angaben gemäß § 5 TMG
            </h2>
            <p>Konrad Abe</p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Kontakt
            </h2>
            <p>E-Mail: <a href="mailto:info@allbitsequal.com" className="text-accent-teal hover:opacity-80 transition-opacity">info@allbitsequal.com</a></p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Steuerliche Angaben
            </h2>
            <p className="text-accent-amber font-mono text-xs">
              {/* Add your Steuernummer or USt-IdNr. once confirmed with your Finanzamt */}
              [STEUERNUMMER / UST-IDNR. EINTRAGEN]
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="mb-3 font-mono text-xs tracking-widest text-text-primary uppercase">
              Legal Notice (English)
            </h2>
            <p>
              This imprint applies to the website allbitsequal.com, operated by Konrad Abe as a freelance individual. All legal information above is provided in German as required by German law (§ 5 TMG). For questions in English, please use the contact email above.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
