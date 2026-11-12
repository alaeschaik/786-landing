import Link from "next/link";
import clsx from "clsx";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import {
  HiArrowRight,
  HiOutlineBriefcase,
  HiOutlineCalculator,
  HiOutlineDocumentChartBar,
  HiOutlineUsers,
} from "react-icons/hi2";

export const services = [
  {
    id: "buchhaltung",
    title: "Buchhaltung",
    icon: HiOutlineCalculator,
    color: "bg-accent-200",
    description:
      "Laufende Verbuchung aller Geschäftsfälle – doppelt oder als Einnahmen-Ausgaben-Rechnung.",
    tags: ["UVA", "E/A-Rechnung", "Saldenlisten", "Kostenrechnung"],
  },
  {
    id: "jahresabschluss",
    title: "Jahresabschluss & Bilanzierung",
    icon: HiOutlineDocumentChartBar,
    color: "bg-brand-100",
    description:
      "Jahresabschlüsse für kleine Unternehmen nach UGB – termingerecht und nachvollziehbar.",
    tags: ["Bilanz", "Bilanzanalyse", "E/A-Rechnung"],
  },
  {
    id: "personal",
    title: "Personalverrechnung",
    icon: HiOutlineUsers,
    color: "bg-emerald-100",
    description:
      "Korrekte Lohn- und Gehaltsabrechnung inklusive aller Meldungen an ÖGK und Finanzamt.",
    tags: ["Löhne & Gehälter", "An-/Abmeldung", "Lohnkonten"],
  },
  {
    id: "beratung",
    title: "Unternehmensberatung & Vertretung",
    icon: HiOutlineBriefcase,
    color: "bg-rose-100",
    description:
      "Von der Gründung bis zur Nachfolge: Unternehmensberatung, Sozialversicherungsberatung und Vertretung im Rahmen des BiBuG.",
    tags: ["Gründung", "Förderungen", "Lohnabgabenprüfung"],
  },
];

// Icon tile + title used at the top of each detail section on /services.
export const ServiceHeading = ({ id }) => {
  const service = services.find((item) => item.id === id);
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span
        className={clsx(
          "flex h-11 w-11 flex-none items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl",
          service.color
        )}
      >
        <service.icon className="h-7 w-7 text-neutral-950" />
      </span>
      <h2 className="min-w-0 font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
        {service.title}
      </h2>
    </div>
  );
};

const Services = ({
  eyebrow = "Unsere Leistungen",
  title = "Alles, was Ihre Zahlen brauchen – aus einer Hand",
  intro = "Von der laufenden Buchhaltung über Jahresabschlüsse bis zur strategischen Beratung. Wählen Sie einen Bereich für alle Details.",
  className = "mt-24 sm:mt-32 lg:mt-40",
}) => {
  return (
    <section id="leistungen" className="scroll-mt-24">
      <SectionIntro eyebrow={eyebrow} title={title} className={className}>
        <p>{intro}</p>
      </SectionIntro>
      <Container className="mt-12 sm:mt-16">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.id}>
                <FadeIn className="h-full">
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 transition sm:p-8 hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg hover:shadow-neutral-900/5"
                  >
                    <span
                      className={clsx(
                        "flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:-rotate-6",
                        service.color
                      )}
                    >
                      <service.icon className="h-7 w-7 text-neutral-950" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-neutral-950 sm:mt-6 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">
                      {service.description}
                    </p>
                    <ul role="list" className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-neutral-950">
                      Details ansehen
                      <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
};

export default Services;
