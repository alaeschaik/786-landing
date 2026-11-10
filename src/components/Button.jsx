import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary: "bg-neutral-950 text-white hover:bg-neutral-800",
  inverted: "bg-white text-neutral-950 hover:bg-neutral-200",
  accent:
    "bg-accent-400 text-neutral-950 hover:bg-accent-300 shadow-[0_4px_0_0_theme(colors.neutral.950)] hover:shadow-[0_2px_0_0_theme(colors.neutral.950)] hover:translate-y-0.5",
  outline:
    "ring-2 ring-inset ring-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white",
  outlineInverted:
    "ring-2 ring-inset ring-white/40 text-white hover:bg-white hover:text-neutral-950",
};

const sizes = {
  sm: "px-4 py-1.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  invert,
  variant,
  size = "sm",
  href,
  className,
  children,
  ...props
}) => {
  className = clsx(
    className,
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
    sizes[size],
    variants[variant ?? (invert ? "inverted" : "primary")]
  );

  let inner = <>{children}</>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
