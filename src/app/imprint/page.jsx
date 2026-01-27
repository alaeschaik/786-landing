import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Impressum",
  description: "Impressum der 786 Services KG (Banoz Consultancy). Alle rechtlichen Informationen, Firmenbuchnummer, UID-Nummer und Kontaktdaten.",
  alternates: {
    canonical: "/imprint",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ImpressumPage = () => {
  return (
    <>
      <PageIntro eyebrow="Rechtliches" title="Impressum">
        <p>
          Informationen gemäß § 5 ECG, § 14 UGB, § 63 GewO und Offenlegungspflicht
          gemäß § 25 Mediengesetz.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl space-y-12 text-base text-neutral-600">
            {/* Unternehmensangaben */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Unternehmensangaben
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Firmenname:
                  </strong>{" "}
                  786 Services KG
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Auch bekannt als:
                  </strong>{" "}
                  Banoz Consultancy
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Rechtsform:
                  </strong>{" "}
                  Kommanditgesellschaft (KG)
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Sitz:
                  </strong>{" "}
                  Wien, Österreich
                </p>
              </div>
            </section>

            {/* Kontaktdaten */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Kontaktdaten
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Anschrift:
                  </strong>
                  <br />
                  Kalvarienberggasse 17/1
                  <br />
                  1170 Wien
                  <br />
                  Österreich
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Telefon:
                  </strong>{" "}
                  <a
                    href="tel:+4369915121472"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    +43 699 15121472
                  </a>
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    E-Mail:
                  </strong>{" "}
                  <a
                    href="mailto:office@786.at"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    office@786.at
                  </a>
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Website:
                  </strong>{" "}
                  <a
                    href="https://786.at"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    786.at
                  </a>
                </p>
              </div>
            </section>

            {/* Firmenbuchdaten */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Firmenbuchdaten
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Firmenbuchnummer:
                  </strong>{" "}
                  FN 511381 g
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Firmenbuchgericht:
                  </strong>{" "}
                  Handelsgericht Wien
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    UID-Nummer:
                  </strong>{" "}
                  ATU75114216
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    GLN:
                  </strong>{" "}
                  9110027382278
                </p>
              </div>
            </section>

            {/* Geschäftsführung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Geschäftsführung
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Syed Tayyab Hassan Naqvi
                  </strong>
                  <br />
                  Geschäftsführer
                  <br />
                  (Buchhalter, Unternehmensberatung)
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Fahad Hassan
                  </strong>
                  <br />
                  Geschäftsführer
                  <br />
                  (Büroservice)
                </p>
              </div>
            </section>

            {/* Gewerbeberechtigung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Gewerbeberechtigung
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    1. Buchhalter
                  </p>
                  <p className="text-sm mt-1">
                    Gewerbeberechtigung seit: 08.01.2020
                    <br />
                    Geschäftsführung: Syed Tayyab Hassan Naqvi
                    <br />
                    Aufsicht: Präsident der Wirtschaftskammer Österreich
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    2. Unternehmensberatung einschließlich der Unternehmensorganisation
                  </p>
                  <p className="text-sm mt-1">
                    Gewerbeberechtigung seit: 01.01.2020
                    <br />
                    Geschäftsführung: Syed Tayyab Hassan Naqvi
                    <br />
                    GISA-Zahl: 32284775
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">3. Büroservice</p>
                  <p className="text-sm mt-1">
                    Zurverfügungstellung bürotechnischer Einrichtungen und die
                    Durchführung von Büroarbeiten
                    <br />
                    Gewerbeberechtigung seit: 19.04.2024
                    <br />
                    Geschäftsführung: Fahad Hassan
                    <br />
                    GISA-Zahl: 37084486
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">4. Bilanzbuchhalter</p>
                  <p className="text-sm mt-1">
                    Bilanzbuchhaltung nach BibuG
                    <br />
                    Gewerbeberechtigung seit: 10.12.2025
                    <br />
                    Gewerberechtliche Geschäftsführung: Fahad Hassan
                    <br />
                    Spezielle Aufsichtsbehörde: Präsident der Wirtschaftskammer Österreich gemäß § 63 Bilanzbuchhaltungsgesetz 2014
                    <br />
                    Behörde gem. ECG: Bilanzbuchhaltungsbehörde
                    <br />
                    Adresse: 1170 Wien, Kalvarienberggasse 17/1
                  </p>
                </div>
              </div>
            </section>

            {/* Behörden */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Zuständige Behörden
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Gewerbebehörde:
                  </strong>
                  <br />
                  Magistratisches Bezirksamt des XVII. Bezirkes
                  <br />
                  Hernalser Hauptstraße 69
                  <br />
                  1170 Wien
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Kammerzugehörigkeit:
                  </strong>
                  <br />
                  Wirtschaftskammer Österreich
                  <br />
                  Wiedner Hauptstraße 63
                  <br />
                  1045 Wien
                  <br />
                  <a
                    href="https://www.wko.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    www.wko.at
                  </a>
                </p>
              </div>
            </section>

            {/* Berufsrecht */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Berufsrecht
              </h2>
              <p>
                <strong className="font-semibold text-neutral-950">
                  Anwendbare berufsrechtliche Regelungen:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Gewerbeordnung (GewO)</li>
                <li>Unternehmensgesetzbuch (UGB)</li>
                <li>E-Commerce-Gesetz (ECG)</li>
              </ul>
              <p className="mt-2">
                Diese Regelungen sind abrufbar unter:{" "}
                <a
                  href="https://www.ris.bka.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-950 hover:text-neutral-600"
                >
                  www.ris.bka.gv.at
                </a>
              </p>
            </section>

            {/* Online-Streitbeilegung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Online-Streitbeilegung
              </h2>
              <p>
                Verbraucher haben die Möglichkeit, Beschwerden an die
                Online-Streitbeilegungsplattform der EU zu richten:
              </p>
              <p className="mt-2">
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-950 hover:text-neutral-600"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Sie können allfällige Beschwerde auch an die oben angegebene
                E-Mail-Adresse richten.
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Haftungsausschluss
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    Haftung für Inhalte dieser Website
                  </p>
                  <p className="mt-2">
                    Wir entwickeln die Inhalte dieser Website ständig weiter und
                    bemühen uns korrekte und aktuelle Informationen bereitzustellen.
                    Leider können wir keine Haftung für die Korrektheit aller Inhalte
                    auf dieser Website übernehmen, speziell für jene, die seitens
                    Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht
                    verpflichtet, die von Ihnen übermittelten oder gespeicherten
                    Informationen zu überwachen oder nach Umständen zu forschen, die
                    auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    Haftung für Links auf dieser Website
                  </p>
                  <p className="mt-2">
                    Unsere Website enthält Links zu anderen Websites für deren Inhalt
                    wir nicht verantwortlich sind. Haftung für verlinkte Websites
                    besteht für uns nicht, da wir keine Kenntnis rechtswidriger
                    Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch
                    bisher nicht aufgefallen sind und wir Links sofort entfernen
                    würden, wenn uns Rechtswidrigkeiten bekannt werden.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">Urheberrechtshinweis</p>
                  <p className="mt-2">
                    Alle Inhalte dieser Website (Bilder, Fotos, Texte, Videos)
                    unterliegen dem Urheberrecht. Falls notwendig, werden wir die
                    unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich
                    verfolgen.
                  </p>
                </div>
              </div>
            </section>

            {/* Bildnachweis */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                Bildnachweis
              </h2>
              <p>
                Die auf dieser Website verwendeten Bilder und Grafiken sind entweder
                Eigentum von 786 Services KG oder werden mit entsprechenden Lizenzen
                verwendet.
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default ImpressumPage;
