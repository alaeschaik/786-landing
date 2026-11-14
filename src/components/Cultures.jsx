import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import { GridList, GridListItem } from "./GridList";
import { T } from "@/i18n/LanguageProvider";

const Cultures = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-4xl bg-neutral-50 px-6 py-12 ring-1 ring-inset ring-neutral-200 sm:px-12 sm:py-20 lg:px-16">
        <FadeIn className="max-w-2xl">
          <h2>
            <Eyebrow className="mb-6">
              <T de="Unsere Werte" en="Our values" />
            </Eyebrow>
            <span className="sr-only"> - </span>
            <span className="block font-display text-2xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-4xl">
              <T
                de="Professionell, verlässlich und persönlich."
                en="Professional, reliable and personal."
              />
            </span>
          </h2>
          <p className="mt-5 text-base text-neutral-600 sm:mt-6 sm:text-lg">
            <T
              de="Diese Prinzipien leiten uns bei der täglichen Arbeit und in der Zusammenarbeit mit unseren Mandanten."
              en="These principles guide our daily work and how we work with our clients."
            />
          </p>
        </FadeIn>
        <div className="mt-12">
          <GridList>
            <GridListItem title={<T de="Vertrauen" en="Trust" />}>
              <T
                de="Ihre Finanzdaten sind bei uns in sicheren Händen. Wir arbeiten mit höchster Vertraulichkeit und Integrität und sind Ihr verlässlicher Partner für Buchhaltung, Bilanz und Lohnverrechnung."
                en="Your financial data is in safe hands with us. We work with the utmost confidentiality and integrity and are your reliable partner for bookkeeping, balance sheets and payroll."
              />
            </GridListItem>
            <GridListItem title={<T de="Transparenz" en="Transparency" />}>
              <T
                de="Wir kommunizieren klar und verständlich. Sie erhalten regelmäßige Updates und haben jederzeit Einblick in Ihre Zahlen. Keine versteckten Kosten, keine Überraschungen."
                en="We communicate clearly and plainly. You get regular updates and can see your numbers at any time. No hidden costs, no surprises."
              />
            </GridListItem>
            <GridListItem title={<T de="Kompetenz" en="Expertise" />}>
              <T
                de="Unser Team bildet sich kontinuierlich weiter, um Sie bei allen gesetzlichen Änderungen optimal zu beraten. Jahrelange Erfahrung trifft auf aktuelles Fachwissen."
                en="Our team trains continuously so we can advise you on every change in the law. Years of experience meet up-to-date expertise."
              />
            </GridListItem>
          </GridList>
        </div>
      </div>
    </Container>
  );
};

export default Cultures;
