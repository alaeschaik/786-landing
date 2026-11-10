import FadeIn from "./FadeIn";

export function StatList({ children, ...props }) {
  return (
    <FadeIn {...props}>
      <dl className="grid grid-cols-3 gap-4 rounded-3xl bg-accent-300 px-6 py-10 sm:gap-8 sm:px-12">
        {children}
      </dl>
    </FadeIn>
  );
}

export function StatListItem({ label, value }) {
  return (
    <div className="flex flex-col-reverse text-center">
      <dt className="mt-2 text-sm font-medium text-neutral-800">{label}</dt>
      <dd className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
        {value}
      </dd>
    </div>
  );
}
