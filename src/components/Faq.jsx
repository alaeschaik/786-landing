import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionIntro from "./SectionIntro";
import { HiChevronDown } from "react-icons/hi2";
import { faqs } from "@/constants/faq";
import { T } from "@/i18n/LanguageProvider";

const Faq = () => {
  return (
    <section id="faq" className="scroll-mt-24">
      <SectionIntro
        eyebrow={<T de="Häufige Fragen" en="Frequently asked questions" />}
        title={<T de="Kurz beantwortet" en="Quick answers" />}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          <T
            de="Die wichtigsten Antworten auf einen Blick. Ihre Frage ist nicht dabei? Rufen Sie uns einfach an."
            en="The most important answers at a glance. Can't find your question? Just give us a call."
          />
        </p>
      </SectionIntro>
      <Container className="mt-12">
        <FadeIn className="mx-auto max-w-4xl divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white">
          {faqs.map(({ question, answer, questionEn, answerEn }) => (
            <details key={question} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold text-neutral-950 [&::-webkit-details-marker]:hidden">
                <T de={question} en={questionEn} />
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-neutral-100 transition group-open:rotate-180 group-open:bg-accent-300">
                  <HiChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base text-neutral-600">
                <T de={answer} en={answerEn} />
              </p>
            </details>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
};

export default Faq;
