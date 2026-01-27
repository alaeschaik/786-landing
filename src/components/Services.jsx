import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Unsere Leistungen"
        title="Professionelle Buchhaltung und Beratung für Ihr Unternehmen"
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
              Verbuchung sämtlicher Geschäftsfälle, doppelte Buchhaltung, Einnahmen-Ausgaben-Rechnung,
              Debitorenbuchhaltung, Erstellung von Saldenlisten und betriebswirtschaftlichen Auswertungen,
              Umsatzsteuervoranmeldung (UVA) sowie Kostenrechnung und Kalkulation.
            </ListItem>
            <ListItem title="Jahresabschluss & Bilanzierung" id="jahresabschluss">
              Überschussermittlung und Einnahmen-Ausgaben-Rechnung, betriebswirtschaftliche
              Auswertungen, Bilanzanalyse, steuerliche Optimierung im Rahmen der gesetzlichen
              Möglichkeiten sowie Bilanzerstellung für kleine und mittlere Unternehmen.
            </ListItem>
            <ListItem title="Personalverrechnung" id="personal">
              Lohn- und Gehaltsberechnung inkl. Überstunden, Prämien und Reisekosten,
              Berechnung der Steuerabzüge, An- und Abmeldung der Dienstnehmer, Führung
              der Lohnkonten, Urlaubs- und Feiertagsberechnungen sowie Beratung bei
              Gestaltung von Arbeitsverhältnissen.
            </ListItem>
            <ListItem title="Unternehmensberatung & Vertretung" id="beratung">
              Beratung in steuerlichen Themen im Rahmen des BiBuG, Steuerplanung zur Senkung der Steuerbelastung,
              Beratung zu Förderungen und Begünstigungen, Sozialversicherungsberatung,
              Organisationsberatung, Unternehmensnachfolge sowie Vertretung vor Abgabenbehörden
              und Sozialversicherungsträgern.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
