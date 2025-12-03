import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";

export const metadata = {
  title: "Leistungen",
  description: "Unsere Leistungen: Buchhaltung, Jahresabschlüsse, Personalverrechnung, Controlling und Unternehmensberatung in Wien. Professionelle Bilanzbuchhaltung für KMU.",
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
                Professionelle und zuverlässige Finanzbuchhaltung, die Ihnen den Rücken
                freihält. Wir kümmern uns um alle Aspekte Ihrer Buchhaltung und sorgen
                für Ordnung in Ihren Finanzen.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Finanzbuchhaltung">
                    Vollständige Verbuchung aller Geschäftsfälle mit Rückstellungen und
                    Abschreibungen nach aktuellen gesetzlichen Vorgaben.
                  </GridListItem>
                  <GridListItem title="Anlagenbuchhaltung">
                    Verwaltung und Bewertung Ihres Anlagevermögens mit automatischer
                    Abschreibungsberechnung.
                  </GridListItem>
                  <GridListItem title="Debitoren-/Kreditorenbuchhaltung">
                    Professionelle Verwaltung Ihrer Forderungen und Verbindlichkeiten
                    mit Mahnwesen und Zahlungsüberwachung.
                  </GridListItem>
                  <GridListItem title="Meldungen an Finanzamt">
                    Termingerechte Erstellung und Übermittlung von UVA, ZM und
                    Intrastat-Meldungen.
                  </GridListItem>
                  <GridListItem title="Betriebsprüfungen">
                    Kompetente Betreuung und Vertretung bei Betriebsprüfungen durch
                    das Finanzamt.
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
                  <GridListItem title="Einnahmen-Ausgaben-Rechnung">
                    Jahresabschlüsse für E/A-Rechner mit allen erforderlichen Anlagen
                    und Auswertungen.
                  </GridListItem>
                  <GridListItem title="Bilanzerstellung">
                    Vollständige Bilanzen für bilanzpflichtige Unternehmen nach UGB
                    und Steuerrecht.
                  </GridListItem>
                  <GridListItem title="Überschussrechnungen">
                    Spezielle Abrechnungen für Vermietung und Verpachtung mit
                    steuerlicher Optimierung.
                  </GridListItem>
                  <GridListItem title="Sonderbilanzen">
                    Zwischen- und Sonderbilanzen für Kreditansuchen, Umgründungen oder
                    besondere Anlässe.
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
                  <GridListItem title="Lohn- und Gehaltsverrechnung">
                    Monatliche Erstellung aller Gehaltsabrechnungen mit automatischer
                    Berechnung von Steuern und Sozialversicherung.
                  </GridListItem>
                  <GridListItem title="Kollektivvertragliche Einstufung">
                    Korrekte Einreihung Ihrer Mitarbeiter nach den geltenden
                    Kollektivverträgen.
                  </GridListItem>
                  <GridListItem title="Krankenversicherungsverwaltung">
                    Anmeldungen, Abmeldungen und laufende Kommunikation mit der
                    Sozialversicherung.
                  </GridListItem>
                  <GridListItem title="Sonderzahlungen">
                    Abrechnung von Überstunden, Prämien, Reisekosten und anderen
                    variablen Gehaltsbestandteilen.
                  </GridListItem>
                  <GridListItem title="Jahresabrechnungen">
                    Erstellung von Jahreslohnzetteln und Kommunalsteuererklärungen.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Controlling Details */}
            <div id="controlling">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Controlling
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Behalten Sie den Überblick über Ihre Unternehmenszahlen. Unser
                Controlling gibt Ihnen die Informationen, die Sie für wichtige
                Entscheidungen brauchen.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Unternehmensüberwachung">
                    Laufende Überwachung Ihrer betriebswirtschaftlichen Kennzahlen
                    mit Soll-Ist-Vergleichen.
                  </GridListItem>
                  <GridListItem title="Reporting">
                    Regelmäßige, verständliche Auswertungen und Reports zu Ihrer
                    Unternehmensentwicklung.
                  </GridListItem>
                  <GridListItem title="Kennzahlenanalyse">
                    Analyse wichtiger Kennzahlen wie Liquidität, Rentabilität und
                    Produktivität.
                  </GridListItem>
                  <GridListItem title="Entscheidungsgrundlagen">
                    Aufbereitung von Daten und Fakten als Basis für strategische
                    Unternehmensentscheidungen.
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Unternehmensberatung Details */}
            <div id="beratung">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                Unternehmensberatung
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Wir begleiten Sie in allen unternehmerischen Phasen – von der Gründung
                über das Wachstum bis zur Nachfolge. Profitieren Sie von unserer
                langjährigen Erfahrung.
              </p>
              <div className="mt-12">
                <GridList>
                  <GridListItem title="Unternehmensgründung">
                    Umfassende Beratung bei der Gründung: von der Rechtsformwahl bis
                    zur Behördenregistrierung.
                  </GridListItem>
                  <GridListItem title="Rechtsformwahl">
                    Analyse und Empfehlung der optimalen Rechtsform für Ihr Vorhaben
                    unter steuerlichen und rechtlichen Aspekten.
                  </GridListItem>
                  <GridListItem title="Finanzplanung">
                    Erstellung von Finanzplänen, Liquiditätsplanung und Cash-Flow-Analysen
                    für eine solide Unternehmenssteuerung.
                  </GridListItem>
                  <GridListItem title="Businessplan-Erstellung">
                    Professionelle Businesspläne für Banken, Investoren oder
                    Förderstellen.
                  </GridListItem>
                  <GridListItem title="Sanierungs- und Krisenmanagement">
                    Unterstützung in wirtschaftlich schwierigen Zeiten mit konkreten
                    Lösungsansätzen und Restrukturierungsmaßnahmen.
                  </GridListItem>
                  <GridListItem title="Nachfolgeplanung">
                    Beratung bei der Unternehmensnachfolge und Übergabe an die nächste
                    Generation.
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
