import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import React from "react";

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
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Seite nicht gefunden
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Zur Startseite
        </Link>
      </FadeIn>
    </Container>
  );
};

export default NotFound;
