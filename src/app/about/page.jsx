import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "Über uns",
  description: "Banoz Consultancy (786 Services KG) - Ihr Partner für professionelle Buchhaltung in Wien. Erfahren Sie mehr über unser Team und unsere Werte.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Über uns" title="Ihr Partner für professionelle Buchhaltung in Wien">
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
            steuerliche Optimierung – wir verstehen Ihre Herausforderungen und entwickeln
            individuelle Lösungen für Ihren Erfolg.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="15+" label="Jahre Erfahrung" />
          <StatListItem value="100+" label="Betreute Unternehmen" />
          <StatListItem value="5" label="Fachbereiche" />
        </StatList>
      </Container>

      {/* Team Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Unser Team
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              <strong className="font-semibold text-neutral-950">
                Syed Tayyab Hassan Naqvi
              </strong>
              <br />
              Geschäftsführer
              <br />
              <br />
              Mit jahrelanger Erfahrung in der Bilanzbuchhaltung und Unternehmensberatung
              leitet Herr Naqvi unser Team mit Expertise und Engagement. Seine
              Schwerpunkte liegen in der strategischen Beratung und der Optimierung
              betriebswirtschaftlicher Prozesse.
            </p>
          </div>
        </div>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
