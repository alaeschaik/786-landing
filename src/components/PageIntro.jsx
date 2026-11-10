import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import clsx from "clsx";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <Container
      className={clsx("mt-20 sm:mt-28 md:mt-32", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] break-words sm:text-5xl lg:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
