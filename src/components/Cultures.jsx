import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-4xl bg-neutral-50 px-6 py-12 ring-1 ring-inset ring-neutral-200 sm:px-12 sm:py-20 lg:px-16">
        <FadeIn className="max-w-2xl">
          <h2>
            <Eyebrow className="mb-6 bg-white">
              Unsere Werte
            </Eyebrow>
            <span className="sr-only"> - </span>
            <span className="block font-display text-2xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-4xl">
              Professionell, verlässlich und persönlich.
            </span>
          </h2>
          <p className="mt-5 text-base text-neutral-600 sm:mt-6 sm:text-lg">
            Diese Prinzipien leiten uns bei der täglichen Arbeit und in der
            Zusammenarbeit mit unseren Mandanten.
          </p>
        </FadeIn>
        <div className="mt-12">
          <GridList>
            <GridListItem title="Vertrauen">
              Ihre Finanzdaten sind bei uns in sicheren Händen. Wir arbeiten mit
              höchster Vertraulichkeit und Integrität und sind Ihr verlässlicher
              Partner für Buchhaltung, Bilanz und Lohnverrechnung.
            </GridListItem>
            <GridListItem title="Transparenz">
              Wir kommunizieren klar und verständlich. Sie erhalten regelmäßige
              Updates und haben jederzeit Einblick in Ihre Zahlen. Keine
              versteckten Kosten, keine Überraschungen.
            </GridListItem>
            <GridListItem title="Kompetenz">
              Unser Team bildet sich kontinuierlich weiter, um Sie bei allen
              gesetzlichen Änderungen optimal zu beraten. Jahrelange Erfahrung
              trifft auf aktuelles Fachwissen.
            </GridListItem>
          </GridList>
        </div>
      </div>
    </Container>
  );
};

export default Cultures;
