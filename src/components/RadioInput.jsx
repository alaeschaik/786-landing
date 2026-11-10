// Rendered as a selectable pill; the radio itself is visually hidden.
const RadioInput = ({ label, ...props }) => {
  return (
    <label className="cursor-pointer">
      <input type="radio" {...props} className="peer sr-only" />
      <span className="block rounded-full border border-neutral-300 px-4 py-2 text-center text-sm font-medium text-neutral-700 transition hover:border-neutral-950 peer-checked:border-neutral-950 peer-checked:bg-accent-300 peer-checked:text-neutral-950 peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-950 peer-focus-visible:ring-offset-2">
        {label}
      </span>
    </label>
  );
};

export default RadioInput;
