import FadeIn from "./FadeIn";

export function StatList({ children, ...props }) {
  return (
    <FadeIn {...props}>
      <dl className="grid grid-cols-3 gap-2 rounded-3xl bg-accent-300 px-4 py-8 sm:gap-8 sm:py-10 sm:px-12">
        {children}
      </dl>
    </FadeIn>
  );
}

export function StatListItem({ label, value }) {
  return (
    <div className="flex flex-col-reverse justify-end text-center">
      <dt className="mt-2 text-xs font-medium text-neutral-800 sm:text-sm">{label}</dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-5xl">
        {value}
      </dd>
    </div>
  );
}
