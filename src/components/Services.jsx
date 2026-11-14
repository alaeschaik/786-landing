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
  HiOutlineEnvelopeOpen,
  HiOutlinePrinter,
  HiOutlineRocketLaunch,
  HiOutlineUsers,
} from "react-icons/hi2";
import { T } from "@/i18n/LanguageProvider";

export const services = [
  {
    id: "buchhaltung",
    title: "Buchhaltung",
    titleEn: "Bookkeeping",
    icon: HiOutlineCalculator,
    color: "bg-accent-200",
    description:
      "Laufende Verbuchung aller Geschäftsfälle – doppelt oder als Einnahmen-Ausgaben-Rechnung.",
    descriptionEn:
      "Ongoing recording of all business transactions – double-entry or cash-basis accounting.",
    tags: ["UVA", "E/A-Rechnung", "Saldenlisten", "Kostenrechnung"],
    tagsEn: ["VAT returns", "Cash-basis accounts", "Trial balances", "Cost accounting"],
  },
  {
    id: "jahresabschluss",
    title: "Jahresabschluss & Bilanzierung",
    titleEn: "Annual accounts & balance sheets",
    icon: HiOutlineDocumentChartBar,
    color: "bg-brand-100",
    description:
      "Jahresabschlüsse für kleine Unternehmen nach UGB – termingerecht und nachvollziehbar.",
    descriptionEn:
      "Annual accounts for small businesses under the Austrian Commercial Code (UGB) – on time and easy to follow.",
    tags: ["Bilanz", "Bilanzanalyse", "E/A-Rechnung"],
    tagsEn: ["Balance sheet", "Balance sheet analysis", "Cash-basis accounts"],
  },
  {
    id: "personal",
    title: "Personalverrechnung",
    titleEn: "Payroll",
    icon: HiOutlineUsers,
    color: "bg-emerald-100",
    description:
      "Korrekte Lohn- und Gehaltsabrechnung inklusive aller Meldungen an ÖGK und Finanzamt.",
    descriptionEn:
      "Accurate wage and salary payroll including all filings with the ÖGK and the tax office.",
    tags: ["Löhne & Gehälter", "An-/Abmeldung", "Lohnkonten"],
    tagsEn: ["Wages & salaries", "Registration / deregistration", "Payroll accounts"],
  },
  {
    id: "gruendung",
    title: "Gründung",
    titleEn: "Business formation",
    icon: HiOutlineRocketLaunch,
    color: "bg-orange-100",
    description:
      "Vom Businessplan bis zur ersten Buchung: Wir begleiten Sie Schritt für Schritt in die Selbstständigkeit.",
    descriptionEn:
      "From business plan to first booking: we guide you step by step into self-employment.",
    tags: ["Businessplan", "Förderungen", "Buchhaltungs-Setup"],
    tagsEn: ["Business plan", "Funding", "Bookkeeping set-up"],
  },
  {
    id: "schriftstuecke",
    title: "Behördliche Schriftstücke",
    titleEn: "Official correspondence",
    icon: HiOutlineEnvelopeOpen,
    color: "bg-sky-100",
    description:
      "Post vom Finanzamt, der ÖGK oder dem Magistrat? Wir sichten, erklären und erledigen sie für Sie.",
    descriptionEn:
      "Letters from the tax office, the ÖGK or the municipal authority? We review, explain and handle them for you.",
    tags: ["Finanzamt", "ÖGK", "Fristen"],
    tagsEn: ["Tax office", "ÖGK", "Deadlines"],
  },
  {
    id: "bueroservice",
    title: "Büroservice",
    titleEn: "Office services",
    icon: HiOutlinePrinter,
    color: "bg-violet-100",
    description:
      "Schreibarbeiten, Postversand, Botengänge und Telefonservice – wir entlasten Ihr Büro.",
    descriptionEn:
      "Typing, mailing, errands and telephone service – we take the load off your office.",
    tags: ["Schreibarbeiten", "Post", "Telefonservice"],
    tagsEn: ["Typing", "Mail", "Telephone service"],
  },
  {
    id: "beratung",
    title: "Unternehmensberatung & Vertretung",
    titleEn: "Business consulting & representation",
    icon: HiOutlineBriefcase,
    color: "bg-rose-100",
    description:
      "Vom Wachstum bis zur Nachfolge: Unternehmensberatung, Sozialversicherungsberatung und Vertretung im Rahmen des BiBuG.",
    descriptionEn:
      "From growth to succession: business consulting, social insurance advice and representation within the scope of the BiBuG.",
    tags: ["Organisation", "Nachfolge", "Lohnabgabenprüfung"],
    tagsEn: ["Organisation", "Succession", "Payroll tax audits"],
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
        <T de={service.title} en={service.titleEn} />
      </h2>
    </div>
  );
};

// Overview order: the two widest slots (first and last card) get the longest
// texts, the rest are sorted by length so cards in a row have similar height.
const serviceLength = (s) => s.title.length * 2 + s.description.length + s.tags.join(" ").length;
const orderedServices = (() => {
  // Layout (lg): [wide, narrow] [narrow, narrow, narrow] [narrow, wide]
  const byLength = [...services].sort((a, b) => serviceLength(b) - serviceLength(a));
  const [longest, second, ...rest] = byLength;
  const [shortest, secondShortest, ...middle] = rest.reverse();
  return [longest, shortest, ...middle, secondShortest, second];
})();

const Services = ({
  eyebrow = <T de="Unsere Leistungen" en="Our services" />,
  title = (
    <T
      de="Alles, was Ihre Zahlen brauchen – aus einer Hand"
      en="Everything your numbers need – from a single source"
    />
  ),
  intro = (
    <T
      de="Von der laufenden Buchhaltung über Jahresabschlüsse bis zur strategischen Beratung. Wählen Sie einen Bereich für alle Details."
      en="From ongoing bookkeeping and annual accounts to strategic advice. Choose an area for all the details."
    />
  ),
  className = "mt-24 sm:mt-32 lg:mt-40",
}) => {
  return (
    <section id="leistungen" className="scroll-mt-24">
      <SectionIntro eyebrow={eyebrow} title={title} className={className}>
        <p>{intro}</p>
      </SectionIntro>
      <Container className="mt-12 sm:mt-16">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orderedServices.map((service, index) => (
              <li
                key={service.id}
                className={clsx(
                  // 7 cards: widen first and last so every row is filled.
                  index === 0 && "lg:col-span-2",
                  index === orderedServices.length - 1 && "sm:col-span-2"
                )}
              >
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
                      <T de={service.title} en={service.titleEn} />
                    </h3>
                    <p className="mt-3 text-base text-neutral-600">
                      <T de={service.description} en={service.descriptionEn} />
                    </p>
                    <ul role="list" className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <li
                          key={tag}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                        >
                          <T de={tag} en={service.tagsEn?.[tagIndex]} />
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-neutral-950">
                      <T de="Details ansehen" en="View details" />
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
