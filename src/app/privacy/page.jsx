import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import { T } from "@/i18n/LanguageProvider";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der 786 Services KG (Banoz Consultancy). Informationen gemäß DSGVO über die Verarbeitung Ihrer personenbezogenen Daten.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DatenschutzPage = () => {
  return (
    <>
      <PageIntro
        eyebrow={<T de="Rechtliches" en="Legal" />}
        title={<T de="Datenschutzerklärung" en="Privacy policy" />}
      >
        <p>
          <T de="Informationen gemäß Art. 13 und 14 DSGVO über die Verarbeitung Ihrer personenbezogenen Daten." en="Information pursuant to Art. 13 and 14 GDPR on the processing of your personal data. In case of doubt, the German version applies." />
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="max-w-4xl space-y-12 rounded-3xl border border-neutral-200 bg-white p-6 text-base text-neutral-600 sm:p-10 lg:p-12">
            {/* Einleitung */}
            <section>
              <p>
                <T de="Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website und unserer Dienstleistungen." en="Protecting your personal data is particularly important to us. We therefore process your data exclusively on the basis of the statutory provisions (GDPR, TKG 2003). In this privacy information we inform you about the most important aspects of data processing in connection with our website and our services." />
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="1. Verantwortlicher" en="1. Controller" />
              </h2>
              <div className="space-y-2">
                <p>
                  <T de="Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:" en="The controller within the meaning of the General Data Protection Regulation (GDPR) is:" />
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">
                    786 Services KG
                  </strong>
                  <br />
                  <T de="vertreten durch Geschäftsführer Syed Tayyab Hassan Naqvi" en="represented by managing director Syed Tayyab Hassan Naqvi" />
                  <br />
                  Kalvarienberggasse 17/1
                  <br />
                  <T de="1170 Wien" en="1170 Vienna" />
                  <br />
                  <T de="Österreich" en="Austria" />
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950"><T de="Kontakt:" en="Contact:" /></strong>
                  <br />
                  <T de="Telefon:" en="Phone:" />{" "}
                  <a
                    href="tel:+436767056207"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    +43 676 7056207
                  </a>
                  <br />
                  <T de="E-Mail:" en="Email:" />{" "}
                  <a
                    href="mailto:office@786.at"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    office@786.at
                  </a>
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950"><T de="Gewerbewortlaut:" en="Licensed trade:" /></strong>{" "}<T de="Bilanzbuchhalter" en="Accountant (Bilanzbuchhalter)" />
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Gewerberechtliche Geschäftsführung:" en="Management under trade law:" /></strong> Fahad Hassan, BPr
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Spezielle Aufsichtsbehörde:" en="Special supervisory authority:" /></strong>{" "}<T de="Präsident der Wirtschaftskammer Österreich gemäß § 63 Bilanzbuchhaltungsgesetz 2014" en="President of the Austrian Economic Chamber pursuant to § 63 Accountancy Act 2014" />
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Berufszweig:" en="Profession:" /></strong>{" "}<T de="Bilanzbuchhaltung nach BiBuG" en="Accountancy under the BiBuG" />
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Behörde gem. ECG:" en="Authority under the ECG:" /></strong>{" "}<T de="Bilanzbuchhaltungsbehörde" en="Accountancy Authority (Bilanzbuchhaltungsbehörde)" />
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Adresse:" en="Address:" /></strong>{" "}<T de="1170 Wien, Kalvarienberggasse 17/1" en="Kalvarienberggasse 17/1, 1170 Vienna" />
                  <br />
                  <strong className="font-semibold text-neutral-950"><T de="Datum:" en="Date:" /></strong>{" "}<T de="Seit 10.12.2025" en="Since 10.12.2025" />
                </p>
              </div>
            </section>

            {/* Allgemeines zur Datenverarbeitung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="2. Allgemeines zur Datenverarbeitung" en="2. General information on data processing" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="2.1 Umfang der Verarbeitung personenbezogener Daten" en="2.1 Scope of processing of personal data" />
                  </p>
                  <p className="mt-2">
                    <T de="Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist." en="As a rule, we process our users' personal data only to the extent necessary to provide a functional website and our content and services. Our users' personal data is regularly processed only with the user's consent. An exception applies in cases where obtaining prior consent is not possible for practical reasons and the processing of the data is permitted by law." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten" en="2.2 Legal basis for the processing of personal data" />
                  </p>
                  <p className="mt-2">
                    <T de="Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage." en="Where we obtain the data subject's consent for processing operations of personal data, Art. 6 (1) (a) of the EU General Data Protection Regulation (GDPR) serves as the legal basis." />
                  </p>
                  <p className="mt-2">
                    <T de="Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage." en="When processing personal data that is necessary for the performance of a contract to which the data subject is a party, Art. 6 (1) (b) GDPR serves as the legal basis." />
                  </p>
                  <p className="mt-2">
                    <T de="Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage." en="Where processing of personal data is necessary to comply with a legal obligation to which our company is subject, Art. 6 (1) (c) GDPR serves as the legal basis." />
                  </p>
                  <p className="mt-2">
                    <T de="Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung." en="If processing is necessary to safeguard a legitimate interest of our company or of a third party and the interests, fundamental rights and freedoms of the data subject do not override that interest, Art. 6 (1) (f) GDPR serves as the legal basis for the processing." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="2.3 Datenlöschung und Speicherdauer" en="2.3 Data erasure and storage period" />
                  </p>
                  <p className="mt-2">
                    <T de="Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht." en="The data subject's personal data will be erased or blocked as soon as the purpose of storage no longer applies. Data may also be stored beyond that if this has been provided for by the European or national legislator in EU regulations, laws or other provisions to which the controller is subject. Data will also be blocked or erased when a storage period prescribed by these provisions expires, unless further storage of the data is necessary for the conclusion or performance of a contract." />
                  </p>
                </div>
              </div>
            </section>

            {/* Bereitstellung der Website */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="3. Bereitstellung der Website und Erstellung von Logfiles" en="3. Provision of the website and creation of log files" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="3.1 Beschreibung und Umfang der Datenverarbeitung" en="3.1 Description and scope of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:" en="Each time our website is accessed, our system automatically collects data and information from the computer system of the accessing device. The following data is collected:" />
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><T de="Informationen über den Browsertyp und die verwendete Version" en="Information about the browser type and version used" /></li>
                    <li><T de="Das Betriebssystem des Nutzers" en="The user's operating system" /></li>
                    <li><T de="Den Internet-Service-Provider des Nutzers" en="The user's internet service provider" /></li>
                    <li><T de="Die IP-Adresse des Nutzers" en="The user's IP address" /></li>
                    <li><T de="Datum und Uhrzeit des Zugriffs" en="Date and time of access" /></li>
                    <li>
                      <T de="Websites, von denen das System des Nutzers auf unsere Internetseite gelangt" en="Websites from which the user's system reaches our website" />
                    </li>
                  </ul>
                  <p className="mt-2">
                    <T de="Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt." en="This data is stored in our system's log files. This data is not stored together with other personal data of the user." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="3.2 Rechtsgrundlage für die Datenverarbeitung" en="3.2 Legal basis for data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO." en="The legal basis for the temporary storage of the data and log files is Art. 6 (1) (f) GDPR." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="3.3 Zweck der Datenverarbeitung" en="3.3 Purpose of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme." en="The temporary storage of the IP address by the system is necessary to deliver the website to the user's device. For this, the user's IP address must remain stored for the duration of the session. Storage in log files ensures the functionality of the website. We also use the data to optimise the website and to ensure the security of our information technology systems." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="3.4 Dauer der Speicherung" en="3.4 Storage period" /></p>
                  <p className="mt-2">
                    <T de="Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall." en="The data is erased as soon as it is no longer required for the purpose for which it was collected. For data collected to provide the website, this is the case when the respective session has ended. For data stored in log files, this is the case after seven days at the latest." />
                  </p>
                </div>
              </div>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="4. Kontaktformular und E-Mail-Kontakt" en="4. Contact form and email contact" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="4.1 Beschreibung und Umfang der Datenverarbeitung" en="4.1 Description and scope of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Auf unserer Internetseite sind Kontaktformulare vorhanden, welche für die elektronische Kontaktaufnahme genutzt werden können. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:" en="Our website provides contact forms that can be used to get in touch electronically. If a user takes advantage of this option, the data entered in the form is transmitted to us and stored. This data is:" />
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><T de="Name" en="Name" /></li>
                    <li><T de="E-Mail-Adresse" en="Email address" /></li>
                    <li><T de="Telefonnummer" en="Phone number" /></li>
                    <li><T de="Unternehmen (optional)" en="Company (optional)" /></li>
                    <li><T de="Nachricht/Anfrage" en="Message/enquiry" /></li>
                    <li><T de="Zeitpunkt der Absendung" en="Time of submission" /></li>
                    <li><T de="Gewählte Leistung/Terminwunsch (bei Terminanfragen)" en="Selected service/preferred time (for meeting requests)" /></li>
                  </ul>
                  <p className="mt-2">
                    <T de="Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert." en="Alternatively, you can contact us via the email address provided. In this case, the user's personal data transmitted with the email is stored." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="4.2 Rechtsgrundlage für die Datenverarbeitung" en="4.2 Legal basis for data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO." en="Where the user has given consent, the legal basis for processing the data is Art. 6 (1) (a) GDPR. The legal basis for processing data transmitted when sending an email is Art. 6 (1) (f) GDPR. If the email contact is aimed at concluding a contract, an additional legal basis for the processing is Art. 6 (1) (b) GDPR." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="4.3 Zweck der Datenverarbeitung" en="4.3 Purpose of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten. Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen." en="We process the personal data from the form solely to handle your enquiry. Where you contact us by email, this also constitutes the necessary legitimate interest in processing the data. Other personal data processed during submission serves to prevent misuse of the contact form and to ensure the security of our information technology systems." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="4.4 Dauer der Speicherung" en="4.4 Storage period" /></p>
                  <p className="mt-2">
                    <T de="Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist." en="The data is erased as soon as it is no longer required for the purpose for which it was collected. For personal data from the contact form and data sent by email, this is the case when the respective conversation with the user has ended. The conversation has ended when the circumstances indicate that the matter in question has been conclusively resolved." />
                  </p>
                  <p className="mt-2">
                    <T de="Sofern gesetzliche Aufbewahrungsfristen bestehen (z.B. aus dem UGB oder der BAO), werden die Daten nach Ablauf dieser Fristen gelöscht." en="Where statutory retention periods apply (e.g. under the UGB or the BAO), the data is erased once these periods have expired." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="4.5 Versand der Formulardaten" en="4.5 Delivery of form data" /></p>
                  <p className="mt-2">
                    <T de="Zur Zustellung der Formulardaten per E-Mail nutzen wir den Dienst EmailJS. Die eingegebenen Daten werden dabei verschlüsselt an EmailJS übermittelt und von dort als E-Mail an uns weitergeleitet. Auf Wunsch erhalten Sie zusätzlich eine automatische Eingangsbestätigung an die angegebene E-Mail-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO. Details entnehmen Sie der Datenschutzerklärung von EmailJS:" en="To deliver form data by email we use the EmailJS service. The data you enter is transmitted to EmailJS in encrypted form and forwarded from there to us as an email. You may also receive an automatic confirmation of receipt at the email address you provide. The legal basis is Art. 6 (1) (b) and (f) GDPR. For details, see the EmailJS privacy policy:" />{" "}
                    <a
                      href="https://www.emailjs.com/legal/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-950 hover:text-neutral-600"
                    >
                      www.emailjs.com/legal/privacy-policy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="5. Verwendung von Cookies" en="5. Use of cookies" />
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="5.1 Beschreibung und Umfang der Datenverarbeitung" en="5.1 Description and scope of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden." en="Our website uses cookies. Cookies are text files that are stored in or by the web browser on the user's computer system." />
                  </p>
                  <p className="mt-2">
                    <T de="Wir verwenden ausschließlich technisch notwendige Cookies, die für die Funktionalität der Website erforderlich sind. Diese Cookies werden nicht für Tracking- oder Analysezwecke verwendet." en="We use only technically necessary cookies that are required for the website to function. These cookies are not used for tracking or analytics." />
                  </p>
                  <p className="mt-2">
                    <T de="Ihre gewählte Sprache (Deutsch oder Englisch) wird ausschließlich lokal in Ihrem Browser (Local Storage) gespeichert und nicht an uns übermittelt." en="Your chosen language (German or English) is stored only locally in your browser (local storage) and is not transmitted to us." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="5.2 Rechtsgrundlage für die Datenverarbeitung" en="5.2 Legal basis for data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO." en="The legal basis for processing personal data using technically necessary cookies is Art. 6 (1) (f) GDPR." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="5.3 Zweck der Datenverarbeitung" en="5.3 Purpose of data processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden." en="The purpose of using technically necessary cookies is to make websites easier to use. Some functions of our website cannot be offered without cookies." />
                  </p>
                </div>
              </div>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="6. Webhosting" en="6. Web hosting" />
              </h2>
              <div className="space-y-4">
                <p>
                  <T de="Unsere Website wird bei folgendem Dienstleister gehostet:" en="Our website is hosted by the following service provider:" />
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">IONOS SE</strong>
                  <br />
                  Elgendorfer Str. 57
                  <br />
                  56410 Montabaur
                  <br />
                  <T de="Deutschland" en="Germany" />
                </p>
                <p className="mt-4">
                  <T de="Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS:" en="When you visit our website, IONOS records various log files including your IP addresses. For details, see the IONOS privacy policy:" />{" "}
                  <a
                    href="https://www.ionos.de/terms-gtc/terms-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    www.ionos.de/terms-gtc/terms-privacy
                  </a>
                </p>
                <p className="mt-4">
                  <T de="Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website." en="IONOS is used on the basis of Art. 6 (1) (f) GDPR. We have a legitimate interest in presenting our website as reliably as possible." />
                </p>
              </div>
            </section>

            {/* E-Mail-Kommunikation */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="7. E-Mail-Kommunikation" en="7. Email communication" />
              </h2>
              <div className="space-y-4">
                <p>
                  <T de="Unsere E-Mail-Kommunikation wird über IONOS abgewickelt. Wenn Sie uns per E-Mail kontaktieren, werden Ihre Daten auf den Servern von IONOS gespeichert und verarbeitet." en="Our email communication is handled via IONOS. When you contact us by email, your data is stored and processed on IONOS servers." />
                </p>
                <p className="mt-2">
                  <strong className="font-semibold text-neutral-950">
                    <T de="E-Mail-Provider:" en="Email provider:" />
                  </strong>
                  <br />
                  IONOS SE
                  <br />
                  Elgendorfer Str. 57
                  <br />
                  56410 Montabaur
                  <br />
                  <T de="Deutschland" en="Germany" />
                </p>
                <p className="mt-4">
                  <T
                    de="Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der E-Mail-Kommunikation)."
                    en="The legal basis for the processing is Art. 6 (1) (f) GDPR (legitimate interest in email communication)."
                  />
                </p>
              </div>
            </section>

            {/* Rechte der betroffenen Person */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="8. Rechte der betroffenen Person" en="8. Rights of the data subject" />
              </h2>
              <div className="space-y-4">
                <p>
                  <T de="Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:" en="If your personal data is processed, you are a data subject within the meaning of the GDPR and you have the following rights vis-à-vis the controller:" />
                </p>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="8.1 Auskunftsrecht" en="8.1 Right of access" /></p>
                  <p className="mt-2">
                    <T de="Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:" en="You can ask the controller to confirm whether we process personal data concerning you. If so, you can request the following information from the controller:" />
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><T de="die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;" en="the purposes for which the personal data is processed;" /></li>
                    <li><T de="die Kategorien von personenbezogenen Daten, welche verarbeitet werden;" en="the categories of personal data being processed;" /></li>
                    <li>
                      <T de="die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;" en="the recipients or categories of recipients to whom the personal data concerning you has been or will be disclosed;" />
                    </li>
                    <li>
                      <T de="die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten;" en="the planned storage period of the personal data concerning you;" />
                    </li>
                    <li>
                      <T de="das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten;" en="the existence of a right to rectification or erasure of the personal data concerning you;" />
                    </li>
                    <li>
                      <T de="das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;" en="the existence of a right to lodge a complaint with a supervisory authority;" />
                    </li>
                    <li>
                      <T de="alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden." en="all available information about the source of the data if the personal data was not collected from the data subject." />
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="8.2 Recht auf Berichtigung" en="8.2 Right to rectification" /></p>
                  <p className="mt-2">
                    <T de="Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind." en="You have the right to have the controller rectify and/or complete the personal data concerning you if it is inaccurate or incomplete." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="8.3 Recht auf Löschung" en="8.3 Right to erasure" />
                  </p>
                  <p className="mt-2">
                    <T de="Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:" en="You can ask the controller to erase the personal data concerning you without undue delay, and the controller is obliged to erase this data without undue delay if one of the following grounds applies:" />
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>
                      <T de="Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig." en="The personal data concerning you is no longer necessary for the purposes for which it was collected or otherwise processed." />
                    </li>
                    <li>
                      <T de="Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung stützte." en="You withdraw the consent on which the processing was based." />
                    </li>
                    <li>
                      <T de="Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet." en="The personal data concerning you has been processed unlawfully." />
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="8.4 Recht auf Einschränkung der Verarbeitung" en="8.4 Right to restriction of processing" />
                  </p>
                  <p className="mt-2">
                    <T de="Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen." en="You have the right to request that the controller restrict processing." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="8.5 Recht auf Datenübertragbarkeit" en="8.5 Right to data portability" />
                  </p>
                  <p className="mt-2">
                    <T de="Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten." en="You have the right to receive the personal data concerning you that you have provided to the controller in a structured, commonly used and machine-readable format." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950"><T de="8.6 Widerspruchsrecht" en="8.6 Right to object" /></p>
                  <p className="mt-2">
                    <T de="Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen." en="You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="8.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung" en="8.7 Right to withdraw consent" />
                  </p>
                  <p className="mt-2">
                    <T de="Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt." en="You have the right to withdraw your data protection consent at any time. Withdrawing consent does not affect the lawfulness of processing carried out on the basis of the consent before its withdrawal." />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    <T de="8.8 Recht auf Beschwerde bei einer Aufsichtsbehörde" en="8.8 Right to lodge a complaint with a supervisory authority" />
                  </p>
                  <p className="mt-2">
                    <T de="Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt." en="Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement, if you believe that the processing of personal data concerning you infringes the GDPR." />
                  </p>
                  <p className="mt-2">
                    <strong className="font-semibold text-neutral-950">
                      <T de="Österreichische Datenschutzbehörde:" en="Austrian Data Protection Authority:" />
                    </strong>
                    <br />
                    Barichgasse 40-42
                    <br />
                    <T de="1030 Wien" en="1030 Vienna" />
                    <br />
                    <T de="Telefon: +43 1 52 152-0" en="Phone: +43 1 52 152-0" />
                    <br />
                    <T de="E-Mail: dsb@dsb.gv.at" en="Email: dsb@dsb.gv.at" />
                    <br />
                    <a
                      href="https://www.dsb.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-950 hover:text-neutral-600"
                    >
                      www.dsb.gv.at
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Aktualität */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                <T de="9. Aktualität und Änderung dieser Datenschutzerklärung" en="9. Validity and changes to this privacy policy" />
              </h2>
              <p>
                <T de="Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter" en="This privacy policy is currently valid and dates from December 2024. As our website and services evolve, or due to changes in legal or regulatory requirements, it may become necessary to amend this privacy policy. The current privacy policy is available on the website at" />{" "}
                <a
                  href="https://786.at/privacy"
                  className="text-neutral-950 hover:text-neutral-600"
                >
                  https://786.at/privacy
                </a>{" "}
                <T
                  de="von Ihnen abgerufen und ausgedruckt werden."
                  en="and can be viewed and printed at any time."
                />
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default DatenschutzPage;
