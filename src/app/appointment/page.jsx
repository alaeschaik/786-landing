import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import AppointmentForm from "@/components/AppointmentForm";
import ContactInfo from "@/components/ContactInfo";
import Highlight from "@/components/Highlight";

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
        title={<>Vereinbaren Sie jetzt Ihr <Highlight>kostenloses</Highlight> Erstgespräch</>}
      >
        <p>
          Nutzen Sie unser Kontaktformular, um einen Termin zu vereinbaren. Wir melden
          uns zeitnah bei Ihnen, um einen passenden Termin zu finden.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {/* Termin Form */}
          <AppointmentForm />

          {/* Contact Information */}
          <div>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Lieber direkt anrufen?
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                Kein Problem! Rufen Sie uns an und vereinbaren Sie telefonisch einen
                Termin. Wir sind während unserer Öffnungszeiten gerne für Sie da.
              </p>
            </FadeIn>
            <ContactInfo className="mt-8" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default TerminPage;
