import Audience from "@/components/Audience";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Eyebrow from "@/components/Eyebrow";
import Faq from "@/components/Faq";
import HeroCard from "@/components/HeroCard";
import Highlight from "@/components/Highlight";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { StatList, StatListItem } from "@/components/StatList";
import { HiCheck, HiOutlinePhone } from "react-icons/hi2";
import { T } from "@/i18n/LanguageProvider";

const highlights = [
  { de: "Kostenloses Erstgespräch", en: "Free initial consultation" },
  { de: "Fester Ansprechpartner", en: "One dedicated contact" },
  { de: "Geprüfte Bilanzbuchhaltung nach BiBuG", en: "Certified accountancy under the BiBuG" },
];

const stats = [
  { value: "10+", de: "Jahre Erfahrung", en: "Years of experience" },
  { value: "200+", de: "Zufriedene Kunden", en: "Satisfied clients" },
  { value: "5", de: "Fachbereiche", en: "Areas of expertise" },
];

const reasons = [
  {
    emoji: "🤝",
    title: "Persönliche Betreuung",
    titleEn: "Personal support",
    description:
      "Jeder Mandant erhält einen festen Ansprechpartner, der Ihr Unternehmen und Ihre Bedürfnisse genau kennt.",
    descriptionEn:
      "Every client gets one dedicated contact who knows your business and your needs inside out.",
  },
  {
    emoji: "📚",
    title: "Aktuelle Expertise",
    titleEn: "Up-to-date expertise",
    description:
      "Wir halten Sie über alle gesetzlichen Änderungen auf dem Laufenden und beraten Sie zu den Auswirkungen auf Ihre Buchhaltung und Lohnverrechnung.",
    descriptionEn:
      "We keep you informed about every change in the law and advise you on what it means for your bookkeeping and payroll.",
  },
  {
    emoji: "🔍",
    title: "Transparenz",
    titleEn: "Transparency",
    description:
      "Verständliche Auswertungen und regelmäßige Gespräche geben Ihnen volle Kontrolle über Ihre Finanzen.",
    descriptionEn:
      "Clear reports and regular conversations give you full control over your finances.",
  },
  {
    emoji: "🧭",
    title: "Ganzheitliche Beratung",
    titleEn: "End-to-end advice",
    description:
      "Von der Gründung über das Wachstum bis zur Unternehmensnachfolge – wir begleiten Sie in jeder Phase.",
    descriptionEn:
      "From formation through growth to succession, we support you at every stage.",
  },
];

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero */}
      <Container className="mt-10 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <Eyebrow as="p">
              <T de="Bilanzbuchhaltung in 1170 Wien" en="Accountancy in 1170 Vienna" />
            </Eyebrow>
            <h1 className="mt-6 font-display text-[2rem] leading-[1.1] font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl lg:text-6xl xl:text-7xl">
              <T
                de={<>Buchhaltung in Wien – <Highlight>einfach erledigt.</Highlight></>}
                en={<>Bookkeeping in Vienna – <Highlight>simply done.</Highlight></>}
              />
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-neutral-600 sm:mt-6 sm:text-xl">
              <T
                de="Banoz Consultancy übernimmt Buchhaltung, Personalverrechnung und Jahresabschluss für Gründer, EPU und kleine Unternehmen – damit Sie sich auf Ihr Geschäft konzentrieren können."
                en="Banoz Consultancy takes care of bookkeeping, payroll and annual accounts for founders, sole traders and small businesses – so you can focus on running your business."
              />
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Button href="/appointment" variant="accent" size="lg">
                <T de="Kostenloses Erstgespräch" en="Free initial consultation" />
              </Button>
              <Button href="tel:+436767056207" variant="outline" size="lg">
                <HiOutlinePhone className="h-5 w-5" />
                +43 676 7056207
              </Button>
            </div>
            <ul role="list" className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item) => (
                <li
                  key={item.de}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700"
                >
                  <HiCheck className="h-5 w-5 text-emerald-600" />
                  <T de={item.de} en={item.en} />
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="hidden px-6 py-6 md:block lg:col-span-5">
            <HeroCard />
          </div>
        </div>
      </Container>

      {/* Fast path: route each visitor type straight to the relevant service */}
      <Audience />

      <Services />

      {/* Trust indicators */}
      <Container className="mt-24 sm:mt-32">
        <StatList>
          {stats.map((stat) => (
            <StatListItem
              key={stat.de}
              value={stat.value}
              label={<T de={stat.de} en={stat.en} />}
            />
          ))}
        </StatList>
      </Container>

      <Process />

      {/* Why choose us */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-50 px-6 py-12 ring-1 ring-inset ring-neutral-200 sm:px-12 sm:py-20 lg:px-16">
            <h2 className="max-w-2xl font-display text-2xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              <T de="Warum Banoz Consultancy?" en="Why Banoz Consultancy?" />
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl bg-white p-6 ring-1 ring-inset ring-neutral-200 transition hover:ring-accent-400"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {reason.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-neutral-900">
                    <T de={reason.title} en={reason.titleEn} />
                  </h3>
                  <p className="mt-2 text-base text-neutral-600">
                    <T de={reason.description} en={reason.descriptionEn} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      <Partners />

      <Faq />

      <ContactSection />
    </main>
  );
}
