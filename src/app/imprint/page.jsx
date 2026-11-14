import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import { T } from "@/i18n/LanguageProvider";

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
      <PageIntro
        eyebrow={<T de="Rechtliches" en="Legal" />}
        title={<T de="Impressum" en="Imprint" />}
      >
        <p>
          <T de="Informationen gemäß § 5 ECG, § 14 UGB, § 63 GewO und Offenlegungspflicht gemäß § 25 Mediengesetz." en="Information pursuant to § 5 ECG (E-Commerce Act), § 14 UGB (Commercial Code), § 63 GewO (Trade Regulation Act) and disclosure pursuant to § 25 Mediengesetz (Media Act). In case of doubt, the German version applies." />
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="max-w-4xl space-y-12 rounded-3xl border border-neutral-200 bg-white p-6 text-base text-neutral-600 sm:p-10 lg:p-12 break-words">
            {/* Unternehmensangaben */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Unternehmensangaben" en="Company details" />
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Firmenname:" en="Company name:" />
                  </strong>{" "}
                  786 Services KG
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Auch bekannt als:" en="Also known as:" />
                  </strong>{" "}
                  Banoz Consultancy
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Rechtsform:" en="Legal form:" />
                  </strong>{" "}
                  <T de="Kommanditgesellschaft (KG)" en="Limited partnership (KG)" />
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Sitz:" en="Registered office:" />
                  </strong>{" "}
                  <T de="Wien, Österreich" en="Vienna, Austria" />
                </p>
              </div>
            </section>

            {/* Kontaktdaten */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Kontaktdaten" en="Contact details" />
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Anschrift:" en="Address:" />
                  </strong>
                  <br />
                  Kalvarienberggasse 17/1
                  <br />
                  <T de="1170 Wien" en="1170 Vienna" />
                  <br />
                  <T de="Österreich" en="Austria" />
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Telefon:" en="Phone:" />
                  </strong>{" "}
                  <a
                    href="tel:+436767056207"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    +43 676 7056207
                  </a>
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="E-Mail:" en="Email:" />
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
                    href="https://www.786.at"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    www.786.at
                  </a>
                </p>
              </div>
            </section>

            {/* Firmenbuchdaten */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Firmenbuchdaten" en="Company register details" />
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Firmenbuchnummer:" en="Company register number:" />
                  </strong>{" "}
                  FN 511381 g
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Firmenbuchgericht:" en="Company register court:" />
                  </strong>{" "}
                  <T de="Handelsgericht Wien" en="Commercial Court of Vienna" />
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="UID-Nummer:" en="VAT ID:" />
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
                <T de="Geschäftsführung" en="Management" />
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Syed Tayyab Hassan Naqvi
                  </strong>
                  <br />
                  <T de="Gewerberechtlicher Geschäftsführer" en="Managing director under trade law" />
                  <br />
                  <T de="(Buchhalter, Unternehmensberatung)" en="(Bookkeeper, business consulting)" />
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    Fahad Hassan, BPr
                  </strong>
                  <br />
                  <T de="Gewerberechtlicher Geschäftsführer" en="Managing director under trade law" />
                  <br />
                  <T de="(Bilanzbuchhalter, Büroservice)" en="(Accountant, office services)" />
                </p>
              </div>
            </section>

            {/* Gewerbeberechtigung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Gewerbeberechtigung" en="Trade licences" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="1. Buchhalter" en="1. Bookkeeper (Buchhalter)" />
                  </p>
                  <p className="text-sm mt-1">
                    <T de="Gewerbeberechtigung seit: 08.01.2020" en="Licensed since: 08.01.2020" />
                    <br />
                    <T de="Geschäftsführung: Syed Tayyab Hassan Naqvi" en="Management: Syed Tayyab Hassan Naqvi" />
                    <br />
                    <T de="Aufsicht: Präsident der Wirtschaftskammer Österreich gemäß § 63 BiBuG 2014" en="Supervision: President of the Austrian Economic Chamber pursuant to § 63 BiBuG 2014" />
                    <br />
                    <T de="Behörde gem. ECG: Bilanzbuchhaltungsbehörde" en="Authority under the ECG: Accountancy Authority (Bilanzbuchhaltungsbehörde)" />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="2. Unternehmensberatung einschließlich der Unternehmensorganisation" en="2. Business consulting including business organisation" />
                  </p>
                  <p className="text-sm mt-1">
                    <T de="Gewerbeberechtigung seit: 01.01.2020" en="Licensed since: 01.01.2020" />
                    <br />
                    <T de="Geschäftsführung: Syed Tayyab Hassan Naqvi" en="Management: Syed Tayyab Hassan Naqvi" />
                    <br />
                    <T de="GISA-Zahl: 32284775" en="GISA number: 32284775" />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="3. Büroservice" en="3. Office services (Büroservice)" /></p>
                  <p className="text-sm mt-1">
                    <T de="Zurverfügungstellung bürotechnischer Einrichtungen und die Durchführung von Büroarbeiten, eingeschränkt auf Schreibarbeiten, die Adressierung, Kuvertierung, Paketierung von Poststücken, die Durchführung von Botengängen sowie die Entgegennahme und Weitergabe von telefonischen oder im Wege anderer Kommunikationsmittel eingelangten Nachrichten" en="Provision of office equipment and performance of office work, limited to typing, addressing, enveloping and packaging of mail, running errands, and receiving and passing on messages received by telephone or other means of communication" />
                    <br />
                    <T de="Gewerbeberechtigung seit: 19.04.2024" en="Licensed since: 19.04.2024" />
                    <br />
                    <T de="Geschäftsführung: Fahad Hassan, BPr" en="Management: Fahad Hassan, BPr" />
                    <br />
                    <T de="GISA-Zahl: 37084486" en="GISA number: 37084486" />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="4. Bilanzbuchhalter" en="4. Accountant (Bilanzbuchhalter)" /></p>
                  <p className="text-sm mt-1">
                    <T de="Bilanzbuchhaltung nach BiBuG" en="Accountancy under the BiBuG" />
                    <br />
                    <T de="Gewerbeberechtigung seit: 10.12.2025" en="Licensed since: 10.12.2025" />
                    <br />
                    <T de="Gewerberechtliche Geschäftsführung: Fahad Hassan, BPr" en="Management under trade law: Fahad Hassan, BPr" />
                    <br />
                    <T de="Spezielle Aufsichtsbehörde: Präsident der Wirtschaftskammer Österreich gemäß § 63 BiBuG 2014" en="Special supervisory authority: President of the Austrian Economic Chamber pursuant to § 63 BiBuG 2014" />
                    <br />
                    <T de="Behörde gem. ECG: Bilanzbuchhaltungsbehörde" en="Authority under the ECG: Accountancy Authority (Bilanzbuchhaltungsbehörde)" />
                    <br />
                    <T de="Adresse: 1170 Wien, Kalvarienberggasse 17/1" en="Address: Kalvarienberggasse 17/1, 1170 Vienna" />
                  </p>
                </div>
              </div>
            </section>

            {/* Behörden */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Zuständige Behörden" en="Competent authorities" />
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Gewerbebehörde:" en="Trade authority:" />
                  </strong>
                  <br />
                  <T de="Magistratisches Bezirksamt des XVII. Bezirkes" en="Municipal District Office for the 17th District" />
                  <br />
                  Hernalser Hauptstraße 69
                  <br />
                  <T de="1170 Wien" en="1170 Vienna" />
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">
                    <T de="Kammerzugehörigkeit:" en="Chamber membership:" />
                  </strong>
                  <br />
                  <T de="Wirtschaftskammer Österreich" en="Austrian Economic Chamber (Wirtschaftskammer Österreich)" />
                  <br />
                  Wiedner Hauptstraße 63
                  <br />
                  <T de="1045 Wien" en="1045 Vienna" />
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
                <T de="Berufsrecht" en="Professional regulations" />
              </h2>
              <p>
                <strong className="font-semibold text-neutral-950">
                  <T de="Anwendbare berufsrechtliche Regelungen:" en="Applicable professional regulations:" />
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><T de="Gewerbeordnung (GewO)" en="Trade Regulation Act (GewO)" /></li>
                <li><T de="Bilanzbuchhaltungsgesetz (BiBuG)" en="Accountancy Act (BiBuG)" /></li>
                <li><T de="Unternehmensgesetzbuch (UGB)" en="Commercial Code (UGB)" /></li>
                <li><T de="E-Commerce-Gesetz (ECG)" en="E-Commerce Act (ECG)" /></li>
              </ul>
              <p className="mt-2">
                <T de="Diese Regelungen sind abrufbar unter:" en="These regulations are available at:" />{" "}
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
                <T de="Online-Streitbeilegung" en="Online dispute resolution" />
              </h2>
              <p>
                <T de="Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:" en="Consumers can submit complaints to the EU online dispute resolution platform:" />
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
                <T de="Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten." en="You can also send any complaints to the email address given above." />
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Haftungsausschluss" en="Disclaimer" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="Haftung für Inhalte dieser Website" en="Liability for the content of this website" />
                  </p>
                  <p className="mt-2">
                    <T de="Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen." en="We are constantly developing the content of this website and strive to provide correct and up-to-date information. Unfortunately, we cannot accept liability for the accuracy of all content on this website, especially content provided by third parties. As a service provider, we are not obliged to monitor the information you transmit or store or to investigate circumstances that indicate illegal activity." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="Haftung für Links auf dieser Website" en="Liability for links on this website" />
                  </p>
                  <p className="mt-2">
                    <T de="Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden." en="Our website contains links to other websites for whose content we are not responsible. We are not liable for linked websites, as we had and have no knowledge of any illegal activities, have not noticed any such illegality so far, and would remove links immediately if we became aware of any illegality." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="Urheberrechtshinweis" en="Copyright notice" /></p>
                  <p className="mt-2">
                    <T de="Alle Inhalte dieser Website (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen." en="All content on this website (images, photos, texts, videos) is protected by copyright. If necessary, we will take legal action against unauthorised use of any part of the content of our site." />
                  </p>
                </div>
              </div>
            </section>

            {/* Bildnachweis */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="Bildnachweis" en="Image credits" />
              </h2>
              <p>
                <T de="Die auf dieser Website verwendeten Bilder und Grafiken sind entweder Eigentum von 786 Services KG oder werden mit entsprechenden Lizenzen verwendet." en="The images and graphics used on this website are either the property of 786 Services KG or are used under appropriate licences." />
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default ImpressumPage;
