import Audience from "@/components/Audience";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Eyebrow from "@/components/Eyebrow";
import Faq from "@/components/Faq";
import HeroCard from "@/components/HeroCard";
import Highlight from "@/components/Highlight";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { StatList, StatListItem } from "@/components/StatList";
import { HiCheck, HiOutlinePhone } from "react-icons/hi2";

const highlights = [
  "Kostenloses Erstgespräch",
  "Fester Ansprechpartner",
  "Alle Leistungen im Rahmen des BiBuG",
];

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "5", label: "Fachbereiche" },
];

const reasons = [
  {
    emoji: "🤝",
    title: "Persönliche Betreuung",
    description:
      "Jeder Mandant erhält einen festen Ansprechpartner, der Ihr Unternehmen und Ihre Bedürfnisse genau kennt.",
  },
  {
    emoji: "📚",
    title: "Aktuelle Expertise",
    description:
      "Wir halten Sie über alle gesetzlichen Änderungen auf dem Laufenden und beraten Sie zu steuerlichen Optimierungsmöglichkeiten.",
  },
  {
    emoji: "🔍",
    title: "Transparenz",
    description:
      "Verständliche Auswertungen und regelmäßige Gespräche geben Ihnen volle Kontrolle über Ihre Finanzen.",
  },
  {
    emoji: "🧭",
    title: "Ganzheitliche Beratung",
    description:
      "Von der Gründung über das Wachstum bis zur Unternehmensnachfolge – wir begleiten Sie in jeder Phase.",
  },
];

export default function Home() {
  return (
    <main className="text-black">
      {/* Hero */}
      <Container className="mt-20 sm:mt-28 md:mt-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <Eyebrow as="p">Bilanzbuchhaltung in 1170 Wien</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl lg:text-6xl xl:text-7xl">
              Buchhaltung in Wien – <Highlight>einfach erledigt.</Highlight>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-neutral-600">
              Banoz Consultancy übernimmt Buchhaltung, Personalverrechnung und
              Jahresabschluss für kleine und mittelständische Unternehmen – damit
              Sie sich auf Ihr Geschäft konzentrieren können.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/appointment" variant="accent" size="lg">
                Kostenloses Erstgespräch
              </Button>
              <Button href="tel:+4369915121472" variant="outline" size="lg">
                <HiOutlinePhone className="h-5 w-5" />
                +43 699 15121472
              </Button>
            </div>
            <ul role="list" className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-700"
                >
                  <HiCheck className="h-5 w-5 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="hidden px-6 sm:block lg:col-span-5">
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
            <StatListItem key={stat.label} {...stat} />
          ))}
        </StatList>
      </Container>

      <Process />

      {/* Why choose us */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Warum Banoz Consultancy?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {reason.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-300">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      <Faq />

      <ContactSection />
    </main>
  );
}
