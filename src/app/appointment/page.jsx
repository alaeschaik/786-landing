import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import Button from "@/components/Button";

export const metadata = {
  title: "Termin buchen",
  description: "Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch mit Banoz Consultancy. Online-Terminvereinbarung für Buchhaltung und Beratung im Rahmen des BiBuG in Wien.",
  alternates: {
    canonical: "/appointment",
  },
};

const TerminPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Terminvereinbarung"
        title="Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch"
      >
        <p>
          Nutzen Sie unser Kontaktformular, um einen Termin zu vereinbaren. Wir melden
          uns innerhalb von 24 Stunden bei Ihnen, um einen passenden Termin zu finden.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* Termin Form */}
          <FadeIn>
            <form>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Ihre Daten
              </h2>
              <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                <TextInput label="Name" name="name" autoComplete="name" required />
                <TextInput
                  label="E-Mail"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
                <TextInput
                  label="Telefon"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                />
                <TextInput
                  label="Unternehmen"
                  name="company"
                  autoComplete="organization"
                />

                {/* Preferred Date and Time */}
                <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                  <fieldset>
                    <legend className="text-base/6 text-neutral-500">
                      Bevorzugter Zeitraum
                    </legend>
                  </fieldset>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <RadioInput
                      label="Vormittag (8-12 Uhr)"
                      name="timeSlot"
                      value="morning"
                    />
                    <RadioInput
                      label="Nachmittag (12-17 Uhr)"
                      name="timeSlot"
                      value="afternoon"
                    />
                    <RadioInput
                      label="Flexibel"
                      name="timeSlot"
                      value="flexible"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                  <fieldset>
                    <legend className="text-base/6 text-neutral-500">
                      Worum geht es?
                    </legend>
                  </fieldset>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <RadioInput
                      label="Buchhaltung"
                      name="service"
                      value="buchhaltung"
                    />
                    <RadioInput
                      label="Jahresabschluss"
                      name="service"
                      value="jahresabschluss"
                    />
                    <RadioInput
                      label="Personalverrechnung"
                      name="service"
                      value="personal"
                    />
                    <RadioInput
                      label="Unternehmensberatung"
                      name="service"
                      value="beratung"
                    />
                    <RadioInput
                      label="Unternehmensgründung"
                      name="service"
                      value="gruendung"
                    />
                    <RadioInput
                      label="Allgemeine Beratung"
                      name="service"
                      value="allgemein"
                    />
                  </div>
                </div>

                <TextInput
                  label="Ihre Nachricht (optional)"
                  name="message"
                  placeholder="Gibt es etwas Besonderes, das wir wissen sollten?"
                />
              </div>
              <Button type="submit" className="mt-10">
                Termin anfragen
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-10 rounded-2xl bg-neutral-50 p-8">
              <h3 className="font-display text-base font-semibold text-neutral-950">
                Was passiert nach der Anfrage?
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-neutral-600 list-decimal list-inside">
                <li>
                  Sie erhalten innerhalb von 24 Stunden (Werktage) eine Bestätigung
                  per E-Mail oder Telefon
                </li>
                <li>
                  Wir vereinbaren gemeinsam einen passenden Termin für Ihr
                  kostenloses Erstgespräch
                </li>
                <li>
                  Im Gespräch besprechen wir Ihre Anforderungen und zeigen Ihnen,
                  wie wir Sie unterstützen können
                </li>
                <li>
                  Sie entscheiden in Ruhe, ob Sie mit uns zusammenarbeiten möchten –
                  keine Verpflichtung!
                </li>
              </ol>
            </div>
          </FadeIn>

          {/* Contact Information */}
          <div>
            <FadeIn>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Lieber direkt anrufen?
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Kein Problem! Rufen Sie uns an und vereinbaren Sie telefonisch einen
                Termin. Wir sind während unserer Öffnungszeiten gerne für Sie da.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">Telefon</p>
                    <a
                      href="tel:+4369915121472"
                      className="text-sm text-neutral-600 hover:text-neutral-950"
                    >
                      +43 699 15121472
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">E-Mail</p>
                    <a
                      href="mailto:office@786.at"
                      className="text-sm text-neutral-600 hover:text-neutral-950"
                    >
                      office@786.at
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl bg-neutral-950 p-8 text-white">
                <h3 className="font-display text-base font-semibold">
                  Unsere Öffnungszeiten
                </h3>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt>Montag - Freitag:</dt>
                    <dd className="font-semibold">08:00 - 17:00 Uhr</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Samstag:</dt>
                    <dd className="font-semibold">Geschlossen</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sonntag:</dt>
                    <dd className="font-semibold">Geschlossen</dd>
                  </div>
                </dl>
                <p className="mt-6 text-sm text-neutral-300">
                  Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-base font-semibold text-neutral-950">
                  Anfahrt
                </h3>
                <address className="mt-4 not-italic text-sm text-neutral-600">
                  <strong className="font-semibold text-neutral-950">
                    Banoz Consultancy
                  </strong>
                  <br />
                  Kalvarienberggasse 17/1
                  <br />
                  1170 Wien
                  <br />
                  <br />
                  <a
                    href="https://maps.google.com/?q=Kalvarienberggasse+17/1+1170+Wien"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-950 hover:text-neutral-600 underline"
                  >
                    In Google Maps öffnen →
                  </a>
                </address>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TerminPage;
