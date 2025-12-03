import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
const NewsletterForm = () => {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Jetzt Termin vereinbaren
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Kontaktieren Sie uns für ein kostenloses Erstgespräch und erfahren Sie,
        wie wir Ihr Unternehmen optimal betreuen können.
      </p>
      <div className="mt-6 space-y-3">
        <a
          href="/appointment"
          className="block w-full rounded-2xl bg-neutral-950 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-neutral-800"
        >
          Termin buchen
        </a>
        <a
          href="/contact"
          className="block w-full rounded-2xl border-2 border-neutral-950 px-6 py-4 text-center text-base font-semibold text-neutral-950 transition hover:bg-neutral-50"
        >
          Kontakt aufnehmen
        </a>
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
              <Logo className="h-8" fillOnHover>
                Banoz Consultancy
              </Logo>
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
