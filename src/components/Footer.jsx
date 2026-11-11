import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
const NewsletterForm = () => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-accent-100 p-6 sm:p-8">
      <h2 className="font-display text-lg font-semibold text-neutral-950">
        Jetzt Termin vereinbaren
      </h2>
      <p className="mt-3 text-sm text-neutral-800">
        Kontaktieren Sie uns für ein kostenloses Erstgespräch und erfahren Sie,
        wie wir Ihr Unternehmen optimal betreuen können.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Button href="/appointment" size="lg">
          Termin buchen
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Kontakt aufnehmen
        </Button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 border-t border-neutral-950/10 pt-12">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <Link href={"/"} aria-label="Home">
              <Logo fillOnHover />
            </Link>
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-4 text-sm text-neutral-700">
                <Link
                  href="/imprint"
                  className="hover:text-neutral-950 transition"
                >
                  Impressum
                </Link>
                <span>|</span>
                <Link
                  href="/privacy"
                  className="hover:text-neutral-950 transition"
                >
                  Datenschutz
                </Link>
              </div>
              <p className="text-sm text-neutral-700">
                © Banoz Consultancy / 786 Services KG {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
