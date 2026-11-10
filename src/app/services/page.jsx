import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Highlight from "@/components/Highlight";
import Services, { ServiceHeading } from "@/components/Services";
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
        title={<>Umfassende Buchhaltungslösungen für Ihr <Highlight>Unternehmen</Highlight></>}
      >
        <p>
          Von der laufenden Buchhaltung bis zur strategischen Unternehmensberatung –
          wir bieten Ihnen alle Dienstleistungen, die Sie für eine erfolgreiche
          Unternehmensführung benötigen.
        </p>
      </PageIntro>

      <Services
        eyebrow="Überblick"
        title="Wählen Sie Ihren Bereich"
        intro="Ein Klick auf eine Leistung bringt Sie direkt zu allen Details."
        className="mt-16 sm:mt-20"
      />

      {/* Detailed Services Section */}
      <Container className="mt-16 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="space-y-16 sm:space-y-24">
            {/* Buchhaltung Details */}
            <div id="buchhaltung" className="scroll-mt-32">
              <ServiceHeading id="buchhaltung" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                Professionelle und zuverlässige Finanzbuchhaltung für Ihr Unternehmen.
                Wir sorgen für Ordnung in Ihren Finanzen und halten Ihnen den Rücken frei.
              </p>
              <div className="mt-10">
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
            <div id="jahresabschluss" className="scroll-mt-32">
              <ServiceHeading id="jahresabschluss" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                Rechtssichere Jahresabschlüsse und Bilanzen nach österreichischem
                Steuerrecht. Wir erstellen Ihre Abschlüsse termingerecht und
                nachvollziehbar.
              </p>
              <div className="mt-10">
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
            <div id="personal" className="scroll-mt-32">
              <ServiceHeading id="personal" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                Korrekte und pünktliche Gehaltsabrechnung für Ihre Mitarbeiter. Wir
                übernehmen die komplette Lohn- und Gehaltsverrechnung sowie alle
                damit verbundenen Meldungen.
              </p>
              <div className="mt-10">
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
                  <GridListItem title="Behördenkommunikation">
                    Jahreslohnzettel, ÖGK-Clearingfälle, Arbeiterkammer-Meldungen
                    und laufende Kommunikation mit Behörden.
                  </GridListItem>
                  <GridListItem title="Formulare & Muster">
                    Dienstzettel, Arbeits- und Entgeltbestätigungen,
                    Beitragskontonummer anfordern und weitere Formulare.
                  </GridListItem>
                  <GridListItem title="Beratung Arbeitsverhältnisse">
                    Beratung bei Gestaltung von Arbeitsverhältnissen und
                    arbeitsrechtlichen Fragen.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Unternehmensberatung Details */}
            <div id="beratung" className="scroll-mt-32">
              <ServiceHeading id="beratung" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                Wir begleiten Sie in allen unternehmerischen Phasen – von der Gründung
                über das Wachstum bis zur Nachfolge. Profitieren Sie von unserer
                langjährigen Erfahrung.
              </p>
              <div className="mt-10">
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
