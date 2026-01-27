import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32 md:mt-40">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Ihr verlässlicher Partner für Bilanzbuchhaltung in Wien
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Banoz Consultancy bietet professionelle Buchhaltung und Jahresabschlüsse für kleine und mittelständische Unternehmen. Mit jahrelanger
            Erfahrung sorgen wir für Transparenz und Sicherheit in Ihrer Unternehmensführung.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-neutral-950 px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Jetzt Beratung anfragen
            </a>
            <a
              href="/appointment"
              className="rounded-full border-2 border-neutral-950 px-6 py-3 text-base font-semibold text-neutral-950 hover:bg-neutral-50 transition-colors"
            >
              Termin buchen
            </a>
          </div>
        </FadeIn>
      </Container>

      {/* Trust indicators */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-950">10+</div>
              <div className="mt-2 text-sm text-neutral-600">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-950">100+</div>
              <div className="mt-2 text-sm text-neutral-600">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-950">24h</div>
              <div className="mt-2 text-sm text-neutral-600">Reaktionszeit</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-950">5</div>
              <div className="mt-2 text-sm text-neutral-600">Fachbereiche</div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Services />

      {/* Why choose us section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="bg-neutral-950 rounded-3xl px-6 py-20 sm:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Warum Banoz Consultancy?
              </h2>
              <div className="mt-10 space-y-6 text-base text-neutral-300">
                <p>
                  <strong className="font-semibold text-white">Persönliche Betreuung:</strong> Jeder Mandant
                  erhält einen festen Ansprechpartner, der Ihr Unternehmen und Ihre
                  Bedürfnisse genau kennt.
                </p>
                <p>
                  <strong className="font-semibold text-white">Aktuelle Expertise:</strong> Wir halten Sie über
                  alle gesetzlichen Änderungen auf dem Laufenden und beraten Sie zu
                  steuerlichen Optimierungsmöglichkeiten.
                </p>
                <p>
                  <strong className="font-semibold text-white">Transparenz:</strong> Verständliche Auswertungen
                  und regelmäßige Gespräche geben Ihnen volle Kontrolle über Ihre
                  Finanzen und Unternehmensentwicklung.
                </p>
                <p>
                  <strong className="font-semibold text-white">Ganzheitliche Beratung:</strong> Von der Gründung
                  über das Wachstum bis zur Unternehmensnachfolge – wir begleiten Sie
                  in jeder Phase.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </main>
  );
}
