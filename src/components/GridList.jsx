import { Children, isValidElement } from "react";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";

const textLength = (node) => {
  if (node == null || typeof node === "boolean") return 0;
  if (typeof node === "string" || typeof node === "number") {
    return String(node).replace(/\s+/g, " ").trim().length;
  }
  if (Array.isArray(node)) return node.reduce((sum, n) => sum + textLength(n), 0);
  if (isValidElement(node)) {
    return textLength(node.props.title) + textLength(node.props.children);
  }
  return 0;
};

// Items are ordered from shortest to longest text so each row holds cards of
// similar height and as little space as possible is left empty.
import { HiCheck } from "react-icons/hi2";

export function GridList({ className, children, sortByLength = true }) {
  const items = Children.toArray(children);
  if (sortByLength) {
    items.sort((a, b) => textLength(a) - textLength(b));
  }
  return (
    <FadeInStagger faster>
      <ul
        role="list"
        className={clsx(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3",
          className
        )}
      >
        {items}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({ title, children, className, invert = false }) {
  return (
    <li className={clsx("text-base", className)}>
      <FadeIn
        className={clsx(
          "h-full rounded-3xl p-6 transition",
          invert
            ? "bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
            : "border border-neutral-200 bg-white text-neutral-600 hover:border-accent-400"
        )}
      >
        <span
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full",
            invert ? "bg-accent-400 text-neutral-950" : "bg-accent-300 text-neutral-950"
          )}
        >
          <HiCheck className="h-4 w-4" />
        </span>
        <h3
          className={clsx(
            "mt-4 font-display text-lg font-semibold",
            invert ? "text-white" : "text-neutral-950"
          )}
        >
          {title}
        </h3>
        <p className="mt-2">{children}</p>
      </FadeIn>
    </li>
  );
}
