import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import AppointmentForm from "@/components/AppointmentForm";
import ContactInfo from "@/components/ContactInfo";
import Highlight from "@/components/Highlight";
import { T } from "@/i18n/LanguageProvider";

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
        eyebrow={<T de="Terminvereinbarung" en="Book a meeting" />}
        title={
          <T
            de={<>Vereinbaren Sie jetzt Ihr <Highlight>kostenloses</Highlight> Erstgespräch</>}
            en={<>Book your <Highlight>free</Highlight> initial consultation now</>}
          />
        }
      >
        <p>
          <T
            de="Nutzen Sie unser Kontaktformular, um einen Termin zu vereinbaren. Wir melden uns zeitnah bei Ihnen, um einen passenden Termin zu finden."
            en="Use our form to request a meeting. We will get back to you promptly to find a time that suits you."
          />
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
                <T de="Lieber direkt anrufen?" en="Prefer to call?" />
              </h2>
              <p className="mt-4 text-base text-neutral-600">
                <T
                  de="Kein Problem! Rufen Sie uns an und vereinbaren Sie telefonisch einen Termin. Wir sind während unserer Öffnungszeiten gerne für Sie da."
                  en="No problem! Give us a call and book a meeting by phone. We are happy to help during our opening hours."
                />
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
