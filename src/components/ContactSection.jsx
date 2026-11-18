import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";
import { T } from "@/i18n/LanguageProvider";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="overflow-hidden rounded-4xl bg-accent-100 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-4xl">
            <T
              de="Lassen Sie uns über Ihre Buchhaltung sprechen"
              en="Let's talk about your bookkeeping"
            />
          </h2>
          <p className="mt-4 text-base text-neutral-700 sm:text-lg">
            <T
              de="Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen optimal betreuen können."
              en="Book a free initial consultation and find out how we can best support your business."
            />
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={"/appointment"} variant="accent" size="lg">
              <T de="Termin buchen" en="Book a meeting" />
            </Button>
            <Button href={"/contact"} variant="outline" size="lg">
              <T de="Kontakt aufnehmen" en="Get in touch" />
            </Button>
            <Button href="tel:+436767056207" variant="outline" size="lg">
              +43 676 7056207
            </Button>
          </div>
          <div className="mt-10 border-t border-accent-300/60 pt-10">
            <h3 className="font-display text-base font-semibold text-neutral-900">
              <T de="Unsere Kanzlei in Wien" en="Our office in Vienna" />
            </h3>
            <Offices
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
