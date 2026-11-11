import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionIntro from "./SectionIntro";
import Button from "./Button";
import {
  HiOutlineArrowsRightLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineInboxArrowDown,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const steps = [
  {
    title: "Kostenloses Erstgespräch",
    description:
      "Wir lernen Ihr Unternehmen kennen und klären, was Sie wirklich brauchen.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    title: "Individuelles Angebot",
    description:
      "Sie erhalten ein klares Angebot, abgestimmt auf Umfang und Belegmenge.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Belege übergeben",
    description:
      "Digital oder persönlich – ganz wie es für Sie am einfachsten ist.",
    icon: HiOutlineInboxArrowDown,
  },
  {
    title: "Entspannt zurücklehnen",
    description:
      "Wir verbuchen, werten aus und behalten alle Fristen für Sie im Blick.",
    icon: HiOutlineShieldCheck,
  },
];

const Process = () => {
  return (
    <section id="ablauf" className="scroll-mt-24">
      <SectionIntro
        eyebrow="So funktioniert's"
        title="In vier Schritten zur entspannten Buchhaltung"
        className="mt-24 sm:mt-32 lg:mt-40"
      />
      <Container className="mt-12 sm:mt-16">
        <FadeInStagger faster className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-neutral-300 lg:block"
          />
          <ol
            role="list"
            className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <FadeIn>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-neutral-900 ring-1 ring-inset ring-accent-300">
                    <step.icon className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900 ring-1 ring-neutral-300">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-600">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </FadeInStagger>
        <FadeIn className="mt-12 flex flex-col items-start gap-6 rounded-3xl bg-neutral-50 p-6 ring-1 ring-inset ring-neutral-200 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <HiOutlineArrowsRightLeft className="mt-1 h-6 w-6 flex-none text-neutral-950" />
            <p className="text-base text-neutral-700">
              <strong className="font-semibold text-neutral-950">
                Sie möchten Ihren Buchhalter wechseln?
              </strong>{" "}
              Sprechen Sie uns an – wir besprechen die Übergabe gemeinsam.
            </p>
          </div>
          <Button href="/appointment" size="lg" className="flex-none">
            Wechsel besprechen
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Process;
