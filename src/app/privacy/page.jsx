import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";

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
      <PageIntro eyebrow="Rechtliches" title="Datenschutzerklärung">
        <p>
          Informationen gemäß Art. 13 und 14 DSGVO über die Verarbeitung Ihrer
          personenbezogenen Daten.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl space-y-12 text-base text-neutral-600">
            {/* Einleitung */}
            <section>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
                verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
                gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
                Datenschutzinformationen informieren wir Sie über die wichtigsten
                Aspekte der Datenverarbeitung im Rahmen unserer Website und unserer
                Dienstleistungen.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                1. Verantwortlicher
              </h2>
              <div className="space-y-2">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">
                    786 Services KG
                  </strong>
                  <br />
                  vertreten durch Geschäftsführer Syed Tayyab Hassan Naqvi
                  <br />
                  Kalvarienberggasse 17/1
                  <br />
                  1170 Wien
                  <br />
                  Österreich
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">Kontakt:</strong>
                  <br />
                  Telefon:{" "}
                  <a
                    href="tel:+4369915121472"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    +43 699 15121472
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:office@786.at"
                    className="text-neutral-950 hover:text-neutral-600"
                  >
                    office@786.at
                  </a>
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">Gewerbewortlaut:</strong> Bilanzbuchhalter
                  <br />
                  <strong className="font-semibold text-neutral-950">Gewerberechtliche Geschäftsführung:</strong> Fahad Hassan
                  <br />
                  <strong className="font-semibold text-neutral-950">Spezielle Aufsichtsbehörde:</strong> Präsident der Wirtschaftskammer Österreich gemäß § 63 Bilanzbuchhaltungsgesetz 2014
                  <br />
                  <strong className="font-semibold text-neutral-950">Berufszweig:</strong> Bilanzbuchhaltung nach BibuG
                  <br />
                  <strong className="font-semibold text-neutral-950">Behörde gem. ECG:</strong> Bilanzbuchhaltungsbehörde
                  <br />
                  <strong className="font-semibold text-neutral-950">Adresse:</strong> 1170 Wien, Kalvarienberggasse 17/1
                  <br />
                  <strong className="font-semibold text-neutral-950">Datum:</strong> Seit 10.12.2025
                </p>
              </div>
            </section>

            {/* Allgemeines zur Datenverarbeitung */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    2.1 Umfang der Verarbeitung personenbezogener Daten
                  </p>
                  <p className="mt-2">
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
                    nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
                    sowie unserer Inhalte und Leistungen erforderlich ist. Die
                    Verarbeitung personenbezogener Daten unserer Nutzer erfolgt
                    regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
                    solchen Fällen, in denen eine vorherige Einholung einer Einwilligung
                    aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der
                    Daten durch gesetzliche Vorschriften gestattet ist.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                  </p>
                  <p className="mt-2">
                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
                    Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
                    lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
                  </p>
                  <p className="mt-2">
                    Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
                    eines Vertrages, dessen Vertragspartei die betroffene Person ist,
                    erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
                    Rechtsgrundlage.
                  </p>
                  <p className="mt-2">
                    Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
                    rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
                    unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
                  </p>
                  <p className="mt-2">
                    Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                    unseres Unternehmens oder eines Dritten erforderlich und überwiegen
                    die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
                    erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO
                    als Rechtsgrundlage für die Verarbeitung.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    2.3 Datenlöschung und Speicherdauer
                  </p>
                  <p className="mt-2">
                    Die personenbezogenen Daten der betroffenen Person werden gelöscht
                    oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
                    Speicherung kann darüber hinaus erfolgen, wenn dies durch den
                    europäischen oder nationalen Gesetzgeber in unionsrechtlichen
                    Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
                    Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
                    Löschung der Daten erfolgt auch dann, wenn eine durch die genannten
                    Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
                    Erforderlichkeit zur weiteren Speicherung der Daten für einen
                    Vertragsabschluss oder eine Vertragserfüllung besteht.
                  </p>
                </div>
              </div>
            </section>

            {/* Bereitstellung der Website */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                3. Bereitstellung der Website und Erstellung von Logfiles
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    3.1 Beschreibung und Umfang der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Bei jedem Aufruf unserer Internetseite erfasst unser System
                    automatisiert Daten und Informationen vom Computersystem des
                    aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Informationen über den Browsertyp und die verwendete Version</li>
                    <li>Das Betriebssystem des Nutzers</li>
                    <li>Den Internet-Service-Provider des Nutzers</li>
                    <li>Die IP-Adresse des Nutzers</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>
                      Websites, von denen das System des Nutzers auf unsere
                      Internetseite gelangt
                    </li>
                  </ul>
                  <p className="mt-2">
                    Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine
                    Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten
                    des Nutzers findet nicht statt.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    3.2 Rechtsgrundlage für die Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Rechtsgrundlage für die vorübergehende Speicherung der Daten und der
                    Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    3.3 Zweck der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Die vorübergehende Speicherung der IP-Adresse durch das System ist
                    notwendig, um eine Auslieferung der Website an den Rechner des
                    Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für
                    die Dauer der Sitzung gespeichert bleiben. Die Speicherung in
                    Logfiles erfolgt, um die Funktionsfähigkeit der Website
                    sicherzustellen. Zudem dienen uns die Daten zur Optimierung der
                    Website und zur Sicherstellung der Sicherheit unserer
                    informationstechnischen Systeme.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">3.4 Dauer der Speicherung</p>
                  <p className="mt-2">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
                    ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung
                    der Daten zur Bereitstellung der Website ist dies der Fall, wenn die
                    jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in
                    Logfiles ist dies nach spätestens sieben Tagen der Fall.
                  </p>
                </div>
              </div>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                4. Kontaktformular und E-Mail-Kontakt
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    4.1 Beschreibung und Umfang der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Auf unserer Internetseite sind Kontaktformulare vorhanden, welche für
                    die elektronische Kontaktaufnahme genutzt werden können. Nimmt ein
                    Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske
                    eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer</li>
                    <li>Unternehmen (optional)</li>
                    <li>Nachricht/Anfrage</li>
                    <li>Zeitpunkt der Absendung</li>
                    <li>Gewählte Leistung/Terminwunsch (bei Terminanfragen)</li>
                  </ul>
                  <p className="mt-2">
                    Alternativ ist eine Kontaktaufnahme über die bereitgestellte
                    E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail
                    übermittelten personenbezogenen Daten des Nutzers gespeichert.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    4.2 Rechtsgrundlage für die Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen
                    einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                    Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer
                    Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f
                    DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab,
                    so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1
                    lit. b DSGVO.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    4.3 Zweck der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske
                    dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle einer
                    Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche
                    berechtigte Interesse an der Verarbeitung der Daten. Die sonstigen
                    während des Absendevorgangs verarbeiteten personenbezogenen Daten
                    dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und
                    die Sicherheit unserer informationstechnischen Systeme
                    sicherzustellen.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">4.4 Dauer der Speicherung</p>
                  <p className="mt-2">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
                    ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen
                    Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die
                    per E-Mail übersandt wurden, ist dies dann der Fall, wenn die
                    jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die
                    Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass
                    der betroffene Sachverhalt abschließend geklärt ist.
                  </p>
                  <p className="mt-2">
                    Sofern gesetzliche Aufbewahrungsfristen bestehen (z.B. aus dem UGB
                    oder der BAO), werden die Daten nach Ablauf dieser Fristen gelöscht.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                5. Verwendung von Cookies
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-neutral-950">
                    5.1 Beschreibung und Umfang der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um
                    Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem
                    Computersystem des Nutzers gespeichert werden.
                  </p>
                  <p className="mt-2">
                    Wir verwenden ausschließlich technisch notwendige Cookies, die für die
                    Funktionalität der Website erforderlich sind. Diese Cookies werden
                    nicht für Tracking- oder Analysezwecke verwendet.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    5.2 Rechtsgrundlage für die Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter
                    Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f
                    DSGVO.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    5.3 Zweck der Datenverarbeitung
                  </p>
                  <p className="mt-2">
                    Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                    Nutzung von Websites für die Nutzer zu vereinfachen. Einige
                    Funktionen unserer Internetseite können ohne den Einsatz von Cookies
                    nicht angeboten werden.
                  </p>
                </div>
              </div>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                6. Webhosting
              </h2>
              <div className="space-y-4">
                <p>
                  Unsere Website wird bei folgendem Dienstleister gehostet:
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-neutral-950">IONOS SE</strong>
                  <br />
                  Elgendorfer Str. 57
                  <br />
                  56410 Montabaur
                  <br />
                  Deutschland
                </p>
                <p className="mt-4">
                  Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles
                  inklusive Ihrer IP-Adressen. Details entnehmen Sie der
                  Datenschutzerklärung von IONOS:{" "}
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
                  Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                  DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
                  zuverlässigen Darstellung unserer Website.
                </p>
              </div>
            </section>

            {/* E-Mail-Kommunikation */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                7. E-Mail-Kommunikation
              </h2>
              <div className="space-y-4">
                <p>
                  Unsere E-Mail-Kommunikation wird über IONOS abgewickelt. Wenn Sie uns
                  per E-Mail kontaktieren, werden Ihre Daten auf den Servern von IONOS
                  gespeichert und verarbeitet.
                </p>
                <p className="mt-2">
                  <strong className="font-semibold text-neutral-950">
                    E-Mail-Provider:
                  </strong>
                  <br />
                  IONOS SE
                  <br />
                  Elgendorfer Str. 57
                  <br />
                  56410 Montabaur
                  <br />
                  Deutschland
                </p>
                <p className="mt-4">
                  Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
                  (berechtigtes Interesse an der E-Mail-Kommunikation).
                </p>
              </div>
            </section>

            {/* Rechte der betroffenen Person */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">
                8. Rechte der betroffenen Person
              </h2>
              <div className="space-y-4">
                <p>
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
                  Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber
                  dem Verantwortlichen zu:
                </p>
                <div>
                  <p className="font-semibold text-neutral-950">8.1 Auskunftsrecht</p>
                  <p className="mt-2">
                    Sie können von dem Verantwortlichen eine Bestätigung darüber
                    verlangen, ob personenbezogene Daten, die Sie betreffen, von uns
                    verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie von
                    dem Verantwortlichen über folgende Informationen Auskunft verlangen:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                    <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                    <li>
                      die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die
                      Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch
                      offengelegt werden;
                    </li>
                    <li>
                      die geplante Dauer der Speicherung der Sie betreffenden
                      personenbezogenen Daten;
                    </li>
                    <li>
                      das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie
                      betreffenden personenbezogenen Daten;
                    </li>
                    <li>
                      das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;
                    </li>
                    <li>
                      alle verfügbaren Informationen über die Herkunft der Daten, wenn die
                      personenbezogenen Daten nicht bei der betroffenen Person erhoben werden.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">8.2 Recht auf Berichtigung</p>
                  <p className="mt-2">
                    Sie haben ein Recht auf Berichtigung und/oder Vervollständigung
                    gegenüber dem Verantwortlichen, sofern die verarbeiteten
                    personenbezogenen Daten, die Sie betreffen, unrichtig oder
                    unvollständig sind.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    8.3 Recht auf Löschung
                  </p>
                  <p className="mt-2">
                    Sie können von dem Verantwortlichen verlangen, dass die Sie
                    betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und
                    der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu
                    löschen, sofern einer der folgenden Gründe zutrifft:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>
                      Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für
                      die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr
                      notwendig.
                    </li>
                    <li>
                      Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung stützte.
                    </li>
                    <li>
                      Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig
                      verarbeitet.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    8.4 Recht auf Einschränkung der Verarbeitung
                  </p>
                  <p className="mt-2">
                    Sie haben das Recht, von dem Verantwortlichen die Einschränkung der
                    Verarbeitung zu verlangen.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    8.5 Recht auf Datenübertragbarkeit
                  </p>
                  <p className="mt-2">
                    Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die
                    Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">8.6 Widerspruchsrecht</p>
                  <p className="mt-2">
                    Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
                    Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                    betreffenden personenbezogenen Daten Widerspruch einzulegen.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    8.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                  </p>
                  <p className="mt-2">
                    Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung
                    jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die
                    Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                    Verarbeitung nicht berührt.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-950">
                    8.8 Recht auf Beschwerde bei einer Aufsichtsbehörde
                  </p>
                  <p className="mt-2">
                    Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                    gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
                    einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                    Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                    Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
                    betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                  </p>
                  <p className="mt-2">
                    <strong className="font-semibold text-neutral-950">
                      Österreichische Datenschutzbehörde:
                    </strong>
                    <br />
                    Barichgasse 40-42
                    <br />
                    1030 Wien
                    <br />
                    Telefon: +43 1 52 152-0
                    <br />
                    E-Mail: dsb@dsb.gv.at
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
                9. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember
                2024. Durch die Weiterentwicklung unserer Website und Angebote darüber
                oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website
                unter{" "}
                <a
                  href="https://786.at/privacy"
                  className="text-neutral-950 hover:text-neutral-600"
                >
                  https://786.at/privacy
                </a>{" "}
                von Ihnen abgerufen und ausgedruckt werden.
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default DatenschutzPage;
