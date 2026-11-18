import Link from "next/link";
import clsx from "clsx";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import {
  HiArrowRight,
  HiOutlineBuildingOffice2,
  HiOutlineRocketLaunch,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";
import { T } from "@/i18n/LanguageProvider";

const audiences = [
  {
    title: "Ich gründe gerade",
    titleEn: "I'm starting a business",
    description: "Betriebswirtschaftliche Gründungsberatung, Buchhaltungs-Setup und Förderungen.",
    descriptionEn: "Business formation advice, bookkeeping set-up and funding.",
    href: "/services#gruendung",
    icon: HiOutlineRocketLaunch,
    className: "bg-rose-50 hover:bg-rose-100",
  },
  {
    title: "Einzelunternehmen & EPU",
    titleEn: "Sole traders & freelancers",
    description: "Einnahmen-Ausgaben-Rechnung, UVA und laufende Buchhaltung.",
    descriptionEn: "Cash-basis accounting, VAT returns and ongoing bookkeeping.",
    href: "/services#buchhaltung",
    icon: HiOutlineUser,
    className: "bg-accent-100 hover:bg-accent-200",
  },
  {
    title: "KMU & GmbH",
    titleEn: "SMEs & limited companies",
    description: "Doppelte Buchhaltung, Bilanz und Jahresabschluss.",
    descriptionEn: "Double-entry bookkeeping, balance sheet and annual accounts.",
    href: "/services#jahresabschluss",
    icon: HiOutlineBuildingOffice2,
    className: "bg-brand-50 hover:bg-brand-100",
  },
  {
    title: "Ich habe Mitarbeiter",
    titleEn: "I have employees",
    description: "Lohn- und Gehaltsverrechnung inklusive aller Meldungen.",
    descriptionEn: "Wage and salary payroll including all statutory filings.",
    href: "/services#personal",
    icon: HiOutlineUsers,
    className: "bg-emerald-50 hover:bg-emerald-100",
  },
];

const Audience = () => {
  return (
    <Container className="mt-20 sm:mt-28">
      <FadeIn>
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-500">
          <T de="Was beschreibt Sie am besten?" en="What describes you best?" />
        </h2>
      </FadeIn>
      <FadeInStagger faster>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audiences.map((item) => (
            <li key={item.title}>
              <FadeIn className="h-full">
                <Link
                  href={item.href}
                  className={clsx(
                    "group flex h-full flex-col rounded-3xl p-6 transition",
                    item.className
                  )}
                >
                  <item.icon className="h-8 w-8 text-neutral-950 transition group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-neutral-950">
                    <T de={item.title} en={item.titleEn} />
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    <T de={item.description} en={item.descriptionEn} />
                  </p>
                  <HiArrowRight className="mt-auto h-5 w-5 translate-y-4 text-neutral-950 transition group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
};

export default Audience;
