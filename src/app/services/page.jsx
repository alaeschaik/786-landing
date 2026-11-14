import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Highlight from "@/components/Highlight";
import Services, { ServiceHeading } from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { T } from "@/i18n/LanguageProvider";

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
        eyebrow={<T de="Unsere Leistungen" en="Our services" />}
        title={
          <T
            de={<>Umfassende Buchhaltungslösungen für Ihr <Highlight>Unternehmen</Highlight></>}
            en={<>Comprehensive accounting solutions for your <Highlight>business</Highlight></>}
          />
        }
      >
        <p>
          <T
            de="Von der laufenden Buchhaltung bis zur strategischen Unternehmensberatung – wir bieten Ihnen alle Dienstleistungen, die Sie für eine erfolgreiche Unternehmensführung benötigen."
            en="From ongoing bookkeeping to strategic business consulting – we offer every service you need to run your business successfully."
          />
        </p>
      </PageIntro>

      <Services
        eyebrow={<T de="Überblick" en="Overview" />}
        title={<T de="Wählen Sie Ihren Bereich" en="Choose your area" />}
        intro={
          <T
            de="Ein Klick auf eine Leistung bringt Sie direkt zu allen Details."
            en="Click a service to jump straight to all the details."
          />
        }
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
                <T
                  de="Professionelle und zuverlässige Finanzbuchhaltung für Ihr Unternehmen. Wir sorgen für Ordnung in Ihren Finanzen und halten Ihnen den Rücken frei."
                  en="Professional, reliable financial accounting for your business. We keep your finances in order and take the load off your shoulders."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Verbuchung" en="Bookkeeping entries" />}>
                    <T
                      de="Verbuchung sämtlicher Geschäftsfälle nach aktuellen gesetzlichen Vorgaben."
                      en="Recording of all business transactions in line with current legal requirements."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Doppelte Buchhaltung" en="Double-entry bookkeeping" />}>
                    <T
                      de="Vollständige doppelte Buchführung für bilanzierungspflichtige Unternehmen."
                      en="Full double-entry bookkeeping for businesses required to prepare balance sheets."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Einnahmen-Ausgaben-Rechnung" en="Cash-basis accounting" />}>
                    <T
                      de="Pagatorische Buchhaltung für Einnahmen-Ausgaben-Rechner."
                      en="Cash-based bookkeeping for businesses using income-expenditure accounting."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Debitorenbuchhaltung" en="Accounts receivable" />}>
                    <T
                      de="Verwaltung Ihrer Forderungen mit Mahnwesen und Zahlungsüberwachung."
                      en="Management of your receivables, including dunning and payment monitoring."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Saldenlisten & Auswertungen" en="Trial balances & reports" />}>
                    <T
                      de="Erstellung von Saldenlisten und betriebswirtschaftlichen Auswertungen."
                      en="Preparation of trial balances and management reports."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Umsatzsteuervoranmeldung" en="VAT returns" />}>
                    <T
                      de="Termingerechte Erstellung und Übermittlung der UVA."
                      en="Timely preparation and submission of your VAT returns (UVA)."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Kostenrechnung" en="Cost accounting" />}>
                    <T
                      de="Kostenrechnung und Kalkulation für Ihre Preisgestaltung."
                      en="Cost accounting and calculation for your pricing."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Jahresabschluss Details */}
            <div id="jahresabschluss" className="scroll-mt-32">
              <ServiceHeading id="jahresabschluss" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Jahresabschlüsse nach UGB für kleine Unternehmen sowie Einnahmen-Ausgaben-Rechnungen – termingerecht und nachvollziehbar."
                  en="Annual accounts under the UGB for small companies as well as cash-basis accounts – on time and easy to follow."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Überschussermittlung" en="Surplus calculation" />}>
                    <T
                      de="Ermittlung des steuerlichen Überschusses nach den gesetzlichen Vorschriften."
                      en="Determination of your taxable surplus in line with statutory requirements."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Einnahmen-Ausgaben-Rechnung" en="Cash-basis accounting" />}>
                    <T
                      de="Jahresabschlüsse für E/A-Rechner mit allen erforderlichen Anlagen und Auswertungen."
                      en="Annual accounts for cash-basis businesses with all required schedules and reports."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Betriebswirtschaftliche Auswertung" en="Management reports" />}>
                    <T
                      de="Aussagekräftige Auswertungen zur Beurteilung Ihrer Unternehmensentwicklung."
                      en="Meaningful reports to assess how your business is developing."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Bilanzanalyse" en="Balance sheet analysis" />}>
                    <T
                      de="Analyse Ihrer Bilanz zur Identifikation von Stärken und Verbesserungspotenzialen."
                      en="Analysis of your balance sheet to identify strengths and room for improvement."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Steuerliche Hinweise zum Abschluss" en="Tax notes on your accounts" />}>
                    <T
                      de="Beratung zu steuerlichen Fragen, die unmittelbar mit Ihrer Buchhaltung und Ihrem Abschluss zusammenhängen."
                      en="Advice on tax questions directly related to your bookkeeping and annual accounts."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Bilanzerstellung" en="Balance sheet preparation" />}>
                    <T
                      de="Bilanzen für kleine Unternehmen im Rahmen der Größenmerkmale des § 221 Abs. 1 UGB."
                      en="Balance sheets for small companies within the size criteria of § 221 (1) UGB."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Personalverrechnung Details */}
            <div id="personal" className="scroll-mt-32">
              <ServiceHeading id="personal" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Korrekte und pünktliche Gehaltsabrechnung für Ihre Mitarbeiter. Wir übernehmen die komplette Lohn- und Gehaltsverrechnung sowie alle damit verbundenen Meldungen."
                  en="Accurate, punctual payroll for your employees. We take care of the complete wage and salary accounting and all related filings."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Lohn- und Gehaltsberechnung" en="Wage and salary calculation" />}>
                    <T
                      de="Monatliche Berechnung inkl. Überstunden, Prämien und Reisekosten."
                      en="Monthly calculation including overtime, bonuses and travel expenses."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Steuerabzüge" en="Tax deductions" />}>
                    <T
                      de="Korrekte Berechnung aller Steuerabzüge und Abgaben."
                      en="Accurate calculation of all tax deductions and levies."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="An- und Abmeldung" en="Registration and deregistration" />}>
                    <T
                      de="An- und Abmeldung der Dienstnehmer bei der Sozialversicherung."
                      en="Registering and deregistering employees with social insurance."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Lohnkonten" en="Payroll accounts" />}>
                    <T
                      de="Führung der Lohnkonten und Personalakten."
                      en="Maintaining payroll accounts and personnel files."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Behördenkommunikation" en="Dealing with authorities" />}>
                    <T
                      de="Jahreslohnzettel, ÖGK-Clearingfälle und Meldungen zu den lohnabhängigen Abgaben."
                      en="Annual payslips (Jahreslohnzettel), ÖGK clearing cases and filings for payroll-related taxes."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Formulare & Muster" en="Forms & templates" />}>
                    <T
                      de="Dienstzettel, Arbeits- und Entgeltbestätigungen, Beitragskontonummer anfordern und weitere Formulare."
                      en="Employment notices, employment and pay confirmations, requesting a contribution account number and other forms."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Beratung zur Lohnverrechnung" en="Payroll advice" />}>
                    <T
                      de="Beratung zu lohnverrechnungs- und sozialversicherungsrelevanten Fragen rund um Ihre Dienstverhältnisse."
                      en="Advice on payroll and social insurance questions relating to your employment contracts."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Arbeitnehmerveranlagung" en="Employee tax assessment" />}>
                    <T
                      de="Beratung zur Arbeitnehmerveranlagung sowie Erstellung und Übermittlung der Erklärung als Bote."
                      en="Advice on employee tax assessments and preparation and submission of the return as a messenger."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Gründung Details */}
            <div id="gruendung" className="scroll-mt-32">
              <ServiceHeading id="gruendung" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Bei der Gründung eines Unternehmens stellen sich viele Fragen. Wir begleiten Sie durch alle Phasen – von der Idee bis zur ersten Buchung – und holen bei Rechts- und Steuerfragen unsere Kooperationspartner dazu."
                  en="Starting a business raises a lot of questions. We guide you through every stage – from the idea to the first booking – and bring in our partners for legal and tax questions."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Prüfung der Geschäftsidee" en="Testing your business idea" />}>
                    <T
                      de="Wir prüfen Ihre Idee gemeinsam auf Umsetzbarkeit und Wirtschaftlichkeit."
                      en="Together we check your idea for feasibility and profitability."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Unternehmenskonzept" en="Business concept" />}>
                    <T
                      de="Gemeinsame Erarbeitung Ihres Konzepts – vom Angebot bis zur Zielgruppe."
                      en="Developing your concept together – from your offer to your target audience."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Businessplan" en="Business plan" />}>
                    <T
                      de="Erstellung Ihres Businessplans mit Umsatz-, Kosten- und Liquiditätsplanung."
                      en="Preparing your business plan with revenue, cost and liquidity planning."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Investitionsentscheidungen" en="Investment decisions" />}>
                    <T
                      de="Beratung bei Investitionen und der Ermittlung Ihres Kapitalbedarfs."
                      en="Advice on investments and on determining your capital requirements."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Wahl der Rechtsform" en="Choosing a legal form" />}>
                    <T
                      de="Betriebswirtschaftlicher Vergleich der Rechtsformen – die rechtliche und steuerliche Prüfung übernehmen unsere Kooperationspartner."
                      en="A business comparison of legal forms – legal and tax review is handled by our partners."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Gründungsförderungen" en="Start-up funding" />}>
                    <T
                      de="Überblick über passende Förderungen und Unterstützung bei der Antragstellung."
                      en="Overview of suitable funding programmes and support with applications."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Sozialversicherung" en="Social insurance" />}>
                    <T
                      de="Beratung zu Beiträgen, Versicherungspflicht und Leistungen der Sozialversicherung."
                      en="Advice on contributions, compulsory insurance and social insurance benefits."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Bank- & Finanzierungsgespräche" en="Bank & financing meetings" />}>
                    <T
                      de="Vorbereitung der Unterlagen und Unterstützung bei Gesprächen mit Ihrer Bank."
                      en="Preparing the documents and supporting you in meetings with your bank."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Steuerliche Fragen" en="Tax questions" />}>
                    <T
                      de="Beratung im Zusammenhang mit Buchhaltung und Lohnverrechnung – darüber hinaus mit unserem Steuerberater."
                      en="Advice related to bookkeeping and payroll – beyond that together with our tax adviser."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Finanzamt & Sozialversicherung" en="Tax office & social insurance" />}>
                    <T
                      de="Unterstützung in der Kommunikation mit Finanzamt und Sozialversicherungsträgern."
                      en="Support in communicating with the tax office and social insurance institutions."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Registrierkasse" en="Cash register" />}>
                    <T
                      de="An- und Abmeldung Ihrer Registrierkasse."
                      en="Registering and deregistering your cash register."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Buchhaltungs-Setup" en="Bookkeeping set-up" />}>
                    <T
                      de="Einrichtung von Buchhaltung, Belegablage und Lohnverrechnung von Anfang an."
                      en="Setting up bookkeeping, document filing and payroll right from the start."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Behördliche Schriftstücke Details */}
            <div id="schriftstuecke" className="scroll-mt-32">
              <ServiceHeading id="schriftstuecke" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Behördenpost ist oft schwer verständlich und an Fristen gebunden. Wir nehmen Ihnen diese Arbeit ab."
                  en="Official letters are often hard to understand and come with deadlines. We take this work off your hands."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Sichten & erklären" en="Review & explain" />}>
                    <T
                      de="Wir prüfen Schreiben von Finanzamt, ÖGK, Magistrat oder AMS und erklären, was zu tun ist."
                      en="We review letters from the tax office, ÖGK, municipal authority or AMS and explain what needs to be done."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Fristen im Blick" en="Deadlines covered" />}>
                    <T
                      de="Wir erfassen alle Fristen und erinnern Sie rechtzeitig."
                      en="We record every deadline and remind you in good time."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Erledigung" en="Handling" />}>
                    <T
                      de="Beantwortung und Erledigung im Rahmen unserer Berechtigungen – etwa zu UVA, Lohnabgaben oder Sozialversicherung."
                      en="Responding to and dealing with matters within the scope of our licence – for example VAT returns, payroll taxes or social insurance."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Formulare & Anträge" en="Forms & applications" />}>
                    <T
                      de="Ausfüllen von Formularen und Anträgen für Behörden."
                      en="Filling in forms and applications for authorities."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Weiterleitung an Partner" en="Referral to partners" />}>
                    <T
                      de="Rechtliche oder steuerliche Verfahren übergeben wir an unsere Kooperationspartner."
                      en="Legal or tax proceedings are handed over to our partners."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Büroservice Details */}
            <div id="bueroservice" className="scroll-mt-32">
              <ServiceHeading id="bueroservice" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Wir übernehmen die Büroarbeiten, die Zeit kosten – damit Sie sich auf Ihr Geschäft konzentrieren können."
                  en="We take over the office work that eats up your time – so you can focus on your business."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Schreibarbeiten" en="Typing" />}>
                    <T
                      de="Erstellung und Reinschrift von Briefen, Listen und Dokumenten."
                      en="Drafting and typing up letters, lists and documents."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Postversand" en="Mailing" />}>
                    <T
                      de="Adressierung, Kuvertierung und Paketierung Ihrer Poststücke."
                      en="Addressing, enveloping and packaging your mail."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Botengänge" en="Errands" />}>
                    <T
                      de="Zustellung und Abholung von Unterlagen."
                      en="Delivery and collection of documents."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Telefon- & Nachrichtenservice" en="Telephone & message service" />}>
                    <T
                      de="Entgegennahme und Weitergabe von Anrufen und Nachrichten."
                      en="Taking and passing on calls and messages."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Büroinfrastruktur" en="Office infrastructure" />}>
                    <T
                      de="Zurverfügungstellung bürotechnischer Einrichtungen."
                      en="Providing office equipment and facilities."
                    />
                  </GridListItem>
                </GridList>
              </div>
            </div>

            {/* Unternehmensberatung Details */}
            <div id="beratung" className="scroll-mt-32">
              <ServiceHeading id="beratung" />
              <p className="mt-4 max-w-3xl text-base text-neutral-600 sm:text-lg">
                <T
                  de="Wir begleiten Sie in allen unternehmerischen Phasen – von der Gründung über das Wachstum bis zur Nachfolge. Profitieren Sie von unserer langjährigen Erfahrung."
                  en="We support you through every stage of your business – from formation through growth to succession. Benefit from our many years of experience."
                />
              </p>
              <div className="mt-10">
                <GridList>
                  <GridListItem title={<T de="Steuerliche Beratung" en="Tax advice" />}>
                    <T
                      de="Beratung zu steuerlichen Fragen im Zusammenhang mit Buchhaltung, Bilanzierung und Lohnverrechnung (§ 2 Abs. 2 BiBuG)."
                      en="Advice on tax questions related to bookkeeping, balance sheets and payroll (§ 2 (2) BiBuG)."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Registrierkasse & WiEReG" en="Cash register & WiEReG" />}>
                    <T
                      de="An- und Abmeldung von Registrierkassen sowie Meldungen zum Register der wirtschaftlichen Eigentümer."
                      en="Registering and deregistering cash registers and filings with the Register of Beneficial Owners."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Förderungen" en="Funding" />}>
                    <T
                      de="Laufende Information über Förderungen und Unterstützung bei der Antragstellung."
                      en="Ongoing information on funding programmes and support with applications."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Sozialversicherungsberatung" en="Social insurance advice" />}>
                    <T
                      de="Beratung in Beitrags-, Versicherungs- und Leistungsangelegenheiten der Sozialversicherungen."
                      en="Advice on contribution, insurance and benefit matters of the social insurance institutions."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Organisationsberatung" en="Organisational consulting" />}>
                    <T
                      de="Beratung zur Optimierung Ihrer Unternehmensstruktur und -prozesse."
                      en="Advice on optimising your company structure and processes."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Unternehmensnachfolge" en="Business succession" />}>
                    <T
                      de="Planung, Prozessbegleitung und Beratung bei Unternehmensnachfolge."
                      en="Planning, process support and advice on business succession."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Vertretung im Rahmen des BiBuG" en="Representation under the BiBuG" />}>
                    <T
                      de="Vertretung bei UVA und Zusammenfassenden Meldungen, in Lohnabgabenangelegenheiten, bei Landes- und Gemeindeabgaben, beim AMS sowie in Kammerumlagenangelegenheiten."
                      en="Representation for VAT returns and recapitulative statements, payroll tax matters, state and municipal levies, at the AMS and in chamber levy matters."
                    />
                  </GridListItem>
                  <GridListItem title={<T de="Lohnabgabenprüfung" en="Payroll tax audits" />}>
                    <T
                      de="Vertretung bei der gemeinsamen Prüfung lohnabhängiger Abgaben (PLB)."
                      en="Representation in joint audits of payroll-related taxes (PLB)."
                    />
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
