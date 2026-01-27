import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";

export const metadata = {
  title: "Leistungen",
  description: "Unsere Leistungen: Buchhaltung, Jahresabschlüsse, Personalverrechnung und Unternehmensberatung in Wien. Professionelle Bilanzbuchhaltung für KMU.",
  alternates: {
    canonical: "/services",
  },
};

const LeistungenPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Unsere Leistungen"
        title="Umfassende Buchhaltungslösungen für Ihr Unternehmen"
      >
        <p>
          Von der laufenden Buchhaltung bis zur strategischen Unternehmensberatung –
          wir bieten Ihnen alle Dienstleistungen, die Sie für eine erfolgreiche
          Unternehmensführung benötigen.
        </p>
      </PageIntro>

      <Services />

      {/* Detailed Services Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="space-y-24">
            {/* Buchhaltung Details */}
            <div id="buchhaltung">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Buchhaltung
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Professionelle und zuverlässige Finanzbuchhaltung für Ihr Unternehmen.
                Wir sorgen für Ordnung in Ihren Finanzen und halten Ihnen den Rücken frei.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Verbuchung">
                    Verbuchung sämtlicher Geschäftsfälle nach aktuellen gesetzlichen
                    Vorgaben.
                  </GridListItem>
                  <GridListItem title="Doppelte Buchhaltung">
                    Vollständige doppelte Buchführung für bilanzierungspflichtige
                    Unternehmen.
                  </GridListItem>
                  <GridListItem title="Einnahmen-Ausgaben-Rechnung">
                    Pagatorische Buchhaltung für Einnahmen-Ausgaben-Rechner.
                  </GridListItem>
                  <GridListItem title="Debitorenbuchhaltung">
                    Verwaltung Ihrer Forderungen mit Mahnwesen und Zahlungsüberwachung.
                  </GridListItem>
                  <GridListItem title="Saldenlisten & Auswertungen">
                    Erstellung von Saldenlisten und betriebswirtschaftlichen Auswertungen.
                  </GridListItem>
                  <GridListItem title="Umsatzsteuervoranmeldung">
                    Termingerechte Erstellung und Übermittlung der UVA.
                  </GridListItem>
                  <GridListItem title="Kostenrechnung">
                    Kostenrechnung und Kalkulation für Ihre Preisgestaltung.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Jahresabschluss Details */}
            <div id="jahresabschluss">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Jahresabschluss & Bilanzierung
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Rechtssichere Jahresabschlüsse und Bilanzen nach österreichischem
                Steuerrecht. Wir erstellen Ihre Abschlüsse termingerecht und
                nachvollziehbar.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Überschussermittlung">
                    Ermittlung des steuerlichen Überschusses nach den gesetzlichen
                    Vorschriften.
                  </GridListItem>
                  <GridListItem title="Einnahmen-Ausgaben-Rechnung">
                    Jahresabschlüsse für E/A-Rechner mit allen erforderlichen Anlagen
                    und Auswertungen.
                  </GridListItem>
                  <GridListItem title="Betriebswirtschaftliche Auswertung">
                    Aussagekräftige Auswertungen zur Beurteilung Ihrer
                    Unternehmensentwicklung.
                  </GridListItem>
                  <GridListItem title="Bilanzanalyse">
                    Analyse Ihrer Bilanz zur Identifikation von Stärken und
                    Verbesserungspotenzialen.
                  </GridListItem>
                  <GridListItem title="Steuerliche Optimierung">
                    Optimierung im Rahmen der gesetzlichen Möglichkeiten zur
                    Minimierung Ihrer Steuerlast.
                  </GridListItem>
                  <GridListItem title="Bilanzerstellung">
                    Bilanzen für kleine und mittlere Unternehmen nach UGB und
                    Steuerrecht.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Personalverrechnung Details */}
            <div id="personal">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Personalverrechnung
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Korrekte und pünktliche Gehaltsabrechnung für Ihre Mitarbeiter. Wir
                übernehmen die komplette Lohn- und Gehaltsverrechnung sowie alle
                damit verbundenen Meldungen.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Lohn- und Gehaltsberechnung">
                    Monatliche Berechnung inkl. Überstunden, Prämien und Reisekosten.
                  </GridListItem>
                  <GridListItem title="Steuerabzüge">
                    Korrekte Berechnung aller Steuerabzüge und Abgaben.
                  </GridListItem>
                  <GridListItem title="An- und Abmeldung">
                    An- und Abmeldung der Dienstnehmer bei der Sozialversicherung.
                  </GridListItem>
                  <GridListItem title="Lohnkonten">
                    Führung der Lohnkonten und Personalakten.
                  </GridListItem>
                  <GridListItem title="Urlaub und Feiertage">
                    Urlaubs- und Feiertagsberechnungen nach den gesetzlichen Vorgaben.
                  </GridListItem>
                  <GridListItem title="Beratung Arbeitsverhältnisse">
                    Beratung bei Gestaltung von Arbeitsverhältnissen und
                    arbeitsrechtlichen Fragen.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Unternehmensberatung Details */}
            <div id="beratung">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Unternehmensberatung & Vertretung
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Wir begleiten Sie in allen unternehmerischen Phasen – von der Gründung
                über das Wachstum bis zur Nachfolge. Profitieren Sie von unserer
                langjährigen Erfahrung.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Beratung in Steuerfragen">
                    Beratung in allen steuerlichen Themen im Ausmaß des BiBuG.
                  </GridListItem>
                  <GridListItem title="Steuerplanung">
                    Steuergestaltung und Steuerplanung zur Senkung der Steuerbelastung.
                  </GridListItem>
                  <GridListItem title="Förderungen & Begünstigungen">
                    Laufende Information über Förderungen und steuerliche Begünstigungen.
                  </GridListItem>
                  <GridListItem title="Sozialversicherungsberatung">
                    Beratung in Beitrags-, Versicherungs- und Leistungsangelegenheiten
                    der Sozialversicherungen.
                  </GridListItem>
                  <GridListItem title="Organisationsberatung">
                    Beratung zur Optimierung Ihrer Unternehmensstruktur und -prozesse.
                  </GridListItem>
                  <GridListItem title="Unternehmensnachfolge">
                    Planung, Prozessbegleitung und Beratung bei Unternehmensnachfolge.
                  </GridListItem>
                  <GridListItem title="Vertretung vor Behörden">
                    Vertretung vor Abgabenbehörden, Sozialversicherungsträgern und
                    Arbeitsmarktservice.
                  </GridListItem>
                  <GridListItem title="Prüfungsbegleitung">
                    Begleitung bei Betriebsprüfungen und Beitragsüberprüfungen.
                  </GridListItem>
                </GridList>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default LeistungenPage;
