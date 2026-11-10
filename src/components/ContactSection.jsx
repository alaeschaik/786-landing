import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="overflow-hidden rounded-4xl bg-neutral-950 px-6 py-20 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Lassen Sie uns über Ihre Buchhaltung sprechen
          </h2>
          <p className="mt-4 text-base text-neutral-300">
            Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr
            Unternehmen optimal betreuen können.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={"/appointment"} variant="accent" size="lg">
              Termin buchen
            </Button>
            <Button href={"/contact"} variant="outlineInverted" size="lg">
              Kontakt aufnehmen
            </Button>
            <Button href="tel:+4369915121472" variant="outlineInverted" size="lg">
              +43 699 15121472
            </Button>
          </div>
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Unsere Kanzlei in Wien
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
