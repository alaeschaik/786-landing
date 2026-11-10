import clsx from "clsx";

// Small pill label above headlines, shared by hero, page and section intros.
const Eyebrow = ({ children, invert = false, as: Component = "span", className }) => {
  return (
    <Component
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-sans text-sm font-semibold tracking-normal",
        invert ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-700",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-accent-400" />
      {children}
    </Component>
  );
};

export default Eyebrow;
