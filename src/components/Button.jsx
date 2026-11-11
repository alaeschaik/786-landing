import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary:
    "bg-accent-400 text-neutral-900 shadow-sm shadow-accent-500/30 hover:bg-accent-300",
  accent:
    "bg-accent-400 text-neutral-900 shadow-sm shadow-accent-500/30 hover:bg-accent-300",
  inverted: "bg-white text-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50",
  outline:
    "bg-white text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 hover:ring-neutral-400",
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
