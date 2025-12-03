import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Unsere Werte"
        title="Professionell, verlässlich und persönlich."
        invert
      >
        <p>
          Diese Prinzipien leiten uns bei der täglichen Arbeit und in der Zusammenarbeit
          mit unseren Mandanten.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Vertrauen" invert>
            Ihre Finanzdaten sind bei uns in sicheren Händen. Wir arbeiten mit höchster
            Vertraulichkeit und Integrität und sind Ihr verlässlicher Partner in allen
            steuerlichen Angelegenheiten.
          </GridListItem>
          <GridListItem title="Transparenz" invert>
            Wir kommunizieren klar und verständlich. Sie erhalten regelmäßige Updates
            und haben jederzeit Einblick in Ihre Zahlen. Keine versteckten Kosten,
            keine Überraschungen.
          </GridListItem>
          <GridListItem title="Kompetenz" invert>
            Unser Team bildet sich kontinuierlich weiter, um Sie bei allen gesetzlichen
            Änderungen optimal zu beraten. Jahrelange Erfahrung trifft auf aktuelles
            Fachwissen.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
