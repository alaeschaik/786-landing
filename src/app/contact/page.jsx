import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Highlight from "@/components/Highlight";
import PageIntro from "@/components/PageIntro";
import { T } from "@/i18n/LanguageProvider";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Banoz Consultancy in Wien. Kalvarienberggasse 17/1, 1170 Wien. Tel: +43 676 7056207, E-Mail: office@786.at. Kostenlose Erstberatung.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <PageIntro
        eyebrow={<T de="Kontakt" en="Contact" />}
        title={
          <T
            de={<>Lassen Sie uns <Highlight>sprechen</Highlight></>}
            en={<>Let&apos;s <Highlight>talk</Highlight></>}
          />
        }
      >
        <p>
          <T
            de="Vereinbaren Sie ein kostenloses Erstgespräch. Wir freuen uns darauf, Sie und Ihr Unternehmen kennenzulernen."
            en="Book a free initial consultation. We look forward to getting to know you and your business."
          />
        </p>
      </PageIntro>
      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
