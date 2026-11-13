import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import FadeIn from "@/components/FadeIn";
import Highlight from "@/components/Highlight";
import PageIntro from "@/components/PageIntro";
import Partners from "@/components/Partners";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "Über uns",
  description: "Banoz Consultancy (786 Services KG) - Ihr Partner für professionelle Buchhaltung in Wien. Erfahren Sie mehr über unser Team und unsere Werte.",
  alternates: {
    canonical: "/about",
  },
};

const team = [
  { name: "Syed Tayyab Hassan Naqvi", initials: "TN" },
  { name: "Fahad Hassan, BPr", initials: "FH" },
];

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Über uns" title={<>Ihr Partner für professionelle Buchhaltung in <Highlight>Wien</Highlight></>}>
        <p>
          Banoz Consultancy (786 Services KG) bietet seit vielen Jahren professionelle
          Buchhaltungsdienstleistungen für kleine und mittelständische Unternehmen in Wien
          und Umgebung.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Unter der Leitung von Geschäftsführer Syed Tayyab Hassan Naqvi haben wir uns
            auf die ganzheitliche Betreuung von Unternehmen spezialisiert – von der
            laufenden Buchhaltung über Jahresabschlüsse bis hin zur strategischen
            Unternehmensberatung.
          </p>
          <p>
            Unser Anspruch ist es, Ihnen nicht nur die Buchhaltung abzunehmen, sondern
            Sie als verlässlicher Partner auf Ihrem Weg zu begleiten. Mit persönlicher
            Betreuung, aktueller Expertise und transparenter Kommunikation sorgen wir
            dafür, dass Sie sich auf Ihr Kerngeschäft konzentrieren können, während wir
            uns um Ihre Zahlen kümmern.
          </p>
          <p>
            Ob Unternehmensgründung, laufende Buchhaltung, Personalverrechnung oder
            Jahresabschluss – wir verstehen Ihre Herausforderungen und entwickeln
            individuelle Lösungen für Ihren Erfolg.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16 sm:mt-20">
        <StatList>
          <StatListItem value="10+" label="Jahre Erfahrung" />
          <StatListItem value="200+" label="Betreute Unternehmen" />
          <StatListItem value="5" label="Fachbereiche" />
        </StatList>
      </Container>

      {/* Team Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="rounded-4xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10 lg:p-12">
          <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Unser Team
          </h2>
          <ul role="list" className="mt-8 flex flex-wrap gap-4">
            {team.map((person) => (
              <li
                key={person.name}
                className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white py-3 pl-3 pr-6"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent-300 font-display text-base font-semibold text-neutral-950">
                  {person.initials}
                </span>
                <span className="font-semibold text-neutral-950">
                  {person.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Geschäftsführer
          </p>
          <p className="mt-4 max-w-3xl text-base text-neutral-600">
            Mit jahrelanger Erfahrung in der Bilanzbuchhaltung und Unternehmensberatung
            leitet Herr Naqvi unser Team mit Expertise und Engagement. Seine
            Schwerpunkte liegen in der strategischen Beratung und der Optimierung
            betriebswirtschaftlicher Prozesse.
          </p>
        </FadeIn>
      </Container>

      <Cultures />
      <Partners />
      <ContactSection />
    </>
  );
};

export default AboutPage;
