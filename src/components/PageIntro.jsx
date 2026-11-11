import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import clsx from "clsx";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <Container
      className={clsx("mt-10 sm:mt-16 lg:mt-20", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-5 block max-w-5xl font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:mt-6 sm:text-5xl lg:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-5 max-w-3xl text-lg text-neutral-600 sm:mt-6 sm:text-xl",
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
