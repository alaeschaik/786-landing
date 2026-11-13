import clsx from "clsx";

// Small label above headlines: a short accent rule followed by spaced
// small caps. Shared by hero, page and section intros.
const Eyebrow = ({ children, invert = false, as: Component = "span", className }) => {
  return (
    <Component
      className={clsx(
        "flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] sm:text-[0.8125rem]",
        invert ? "text-neutral-300" : "text-neutral-600",
        className
      )}
    >
      <span aria-hidden="true" className="h-0.5 w-8 flex-none rounded-full bg-accent-400" />
      {children}
    </Component>
  );
};

export default Eyebrow;
