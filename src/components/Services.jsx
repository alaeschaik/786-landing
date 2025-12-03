import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Unsere Leistungen"
        title="Professionelle Buchhaltung und Steuerberatung für Ihr Unternehmen"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Von der laufenden Buchhaltung über Jahresabschlüsse bis zur strategischen Unternehmensberatung –
          wir bieten Ihnen umfassende Dienstleistungen für Ihren wirtschaftlichen Erfolg.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-start lg:justify-center">
          <List className="lg:w-full lg:max-w-5xl">
            <ListItem title="Buchhaltung" id="buchhaltung">
              Professionelle Finanzbuchhaltung mit Verbuchung aller Geschäftsfälle,
              Anlagenbuchhaltung, Debitoren- und Kreditorenbuchhaltung. Wir kümmern uns
              um alle Meldungen an das Finanzamt (UVA, ZM, Intrastat) und unterstützen
              Sie bei Betriebsprüfungen.
            </ListItem>
            <ListItem title="Jahresabschluss & Bilanzierung" id="jahresabschluss">
              Erstellung von Jahresabschlüssen für Einnahmen-Ausgaben-Rechner,
              Bilanzen für bilanzpflichtige Unternehmen, Überschussrechnungen
              (Vermietung/Verpachtung) sowie Zwischen- und Sonderbilanzen für
              Kreditansuchen oder besondere Anlässe.
            </ListItem>
            <ListItem title="Personalverrechnung" id="personal">
              Komplette Lohn- und Gehaltsverrechnung, kollektivvertragliche
              Einstufung, Krankenversicherungsverwaltung, Überstunden-, Prämien-
              und Reisekostenverrechnung sowie jährliche Abrechnungen und
              Kommunalsteuererklärungen.
            </ListItem>
            <ListItem title="Controlling" id="controlling">
              Effiziente Unternehmensüberwachung durch aktuelle und verlässliche
              Informationen. Wir verschaffen Ihnen Transparenz über Ihre
              Unternehmenskennzahlen und unterstützen Sie bei wichtigen Entscheidungen.
            </ListItem>
            <ListItem title="Unternehmensberatung" id="beratung">
              Begleitung bei Unternehmensgründungen, Rechtsformwahl, Finanzplanung
              und Cash-Flow-Analysen, Businessplan-Erstellung sowie Sanierungs- und
              Krisenmanagement. Wir sind Ihr strategischer Partner für alle
              unternehmerischen Herausforderungen.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
