// Rendered as a selectable pill; the input itself is visually hidden.
// Pass type="checkbox" to allow several pills in a group to be selected.
const RadioInput = ({ label, type = "radio", ...props }) => {
  return (
    <label className="cursor-pointer">
      <input type={type} {...props} className="peer sr-only" />
      <span className="block rounded-full border border-neutral-300 px-4 py-2 text-center text-sm font-medium text-neutral-700 transition hover:border-neutral-950 peer-checked:border-neutral-950 peer-checked:bg-accent-300 peer-checked:text-neutral-950 peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-950 peer-focus-visible:ring-offset-2">
        {label}
      </span>
    </label>
  );
};

export default RadioInput;
