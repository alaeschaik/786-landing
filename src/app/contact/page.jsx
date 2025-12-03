import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Banoz Consultancy in Wien. Kalvarienberggasse 17/1, 1170 Wien. Tel: +43 699 15121472, E-Mail: office@786.at. Kostenlose Erstberatung.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Kontakt" title="Lassen Sie uns sprechen">
        <p>
          Vereinbaren Sie ein kostenloses Erstgespräch. Wir freuen uns darauf,
          Sie und Ihr Unternehmen kennenzulernen.
        </p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
