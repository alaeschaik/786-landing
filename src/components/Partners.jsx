import { HiArrowUpRight, HiOutlineCalculator, HiOutlineScale } from "react-icons/hi2";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";
import { T } from "@/i18n/LanguageProvider";

const partners = [
  {
    name: "Mag. Galanda",
    role: "Rechtsanwalt",
    roleEn: "Lawyer",
    description:
      "Für alle rechtlichen Fragen – von Verträgen und Rechtsformwahl bis zur Vertretung vor Gericht.",
    descriptionEn:
      "For all legal questions – from contracts and choosing a legal form to representation in court.",
    href: "https://www.ra-galanda.at",
    domain: "ra-galanda.at",
    icon: HiOutlineScale,
    color: "bg-sky-100",
  },
  {
    name: "Mag. Kai Herbst",
    role: "Steuerberater",
    roleEn: "Tax adviser",
    description:
      "Für Steuererklärungen, Steuerplanung und die Vertretung vor dem Finanzamt.",
    descriptionEn:
      "For tax returns, tax planning and representation before the tax office.",
    href: "https://www.steuerberatung-herbst.at",
    domain: "steuerberatung-herbst.at",
    icon: HiOutlineCalculator,
    color: "bg-emerald-100",
  },
];

const Partners = ({ className = "mt-24 sm:mt-32 lg:mt-40" }) => {
  return (
    <section id="kooperationen" className="scroll-mt-24">
      <SectionIntro
        eyebrow={<T de="Kooperationen" en="Partnerships" />}
        title={
          <T
            de="Starke Partner für alles darüber hinaus"
            en="Strong partners for everything beyond"
          />
        }
        className={className}
      >
        <p>
          <T
            de="Für Rechts- und Steuerfragen außerhalb der Bilanzbuchhaltung arbeiten wir eng mit erfahrenen Partnern zusammen – Sie haben trotzdem nur einen Ansprechpartner."
            en="For legal and tax matters beyond accountancy we work closely with experienced partners – and you still have just one point of contact."
          />
        </p>
      </SectionIntro>
      <Container className="mt-10 sm:mt-12">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <li key={partner.href}>
                <FadeIn className="h-full">
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg hover:shadow-neutral-900/5 sm:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl ${partner.color}`}
                      >
                        <partner.icon className="h-7 w-7 text-neutral-950" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold text-neutral-950">
                          {partner.name}
                        </h3>
                        <p className="text-sm font-medium text-neutral-500">
                          <T de={partner.role} en={partner.roleEn} />
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-base text-neutral-600">
                      <T de={partner.description} en={partner.descriptionEn} />
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-neutral-950">
                      {partner.domain}
                      <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
};

export default Partners;
