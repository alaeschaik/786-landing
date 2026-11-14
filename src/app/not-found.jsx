import Button from "@/components/Button";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import Highlight from "@/components/Highlight";
import React from "react";
import { T } from "@/i18n/LanguageProvider";

export const metadata = {
  title: "Seite nicht gefunden",
  description: "Die angeforderte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück.",
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center text-center">
        <Eyebrow as="p">
          <T de="Fehler 404" en="Error 404" />
        </Eyebrow>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
          <T
            de={<>Diese Seite ist leider <Highlight>nicht verbucht.</Highlight></>}
            en={<>Sorry, this page has <Highlight>not been booked.</Highlight></>}
          />
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600">
          <T
            de="Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden."
            en="Sorry, the page you are looking for could not be found."
          />
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="accent" size="lg">
            <T de="Zur Startseite" en="Back to home" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <T de="Kontakt aufnehmen" en="Get in touch" />
          </Button>
        </div>
      </FadeIn>
    </Container>
  );
};

export default NotFound;
