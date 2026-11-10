import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="rounded-4xl bg-neutral-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <FadeIn className="max-w-2xl">
          <h2>
            <Eyebrow invert className="mb-6">
              Unsere Werte
            </Eyebrow>
            <span className="sr-only"> - </span>
            <span className="block font-display text-3xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-4xl">
              Professionell, verlässlich und persönlich.
            </span>
          </h2>
          <p className="mt-6 text-lg text-neutral-300">
            Diese Prinzipien leiten uns bei der täglichen Arbeit und in der
            Zusammenarbeit mit unseren Mandanten.
          </p>
        </FadeIn>
        <div className="mt-12">
          <GridList>
            <GridListItem title="Vertrauen" invert>
              Ihre Finanzdaten sind bei uns in sicheren Händen. Wir arbeiten mit
              höchster Vertraulichkeit und Integrität und sind Ihr verlässlicher
              Partner in allen steuerlichen Angelegenheiten.
            </GridListItem>
            <GridListItem title="Transparenz" invert>
              Wir kommunizieren klar und verständlich. Sie erhalten regelmäßige
              Updates und haben jederzeit Einblick in Ihre Zahlen. Keine
              versteckten Kosten, keine Überraschungen.
            </GridListItem>
            <GridListItem title="Kompetenz" invert>
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
