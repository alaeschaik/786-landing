import React, { useId } from "react";

const fieldClass =
  "peer block w-full border border-neutral-300 bg-white px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-accent-300/60 group-first:rounded-t-2xl group-last:rounded-b-2xl";

// Floating-label input; pass `multiline` for a textarea.
const TextInput = ({ label, multiline = false, rows = 4, ...props }) => {
  const id = useId();
  const Field = multiline ? "textarea" : "input";
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <Field
        {...(multiline ? { rows } : { type: "text" })}
        id={id}
        {...props}
        placeholder=" "
        className={multiline ? `${fieldClass} resize-y` : fieldClass}
      />
      <label
        htmlFor={id}
        className={
          "pointer-events-none absolute left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 " +
          (multiline ? "top-8" : "top-1/2 -mt-3")
        }
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
