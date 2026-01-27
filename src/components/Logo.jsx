import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/images/logo.svg";

const Logo = ({ invert, href, className, fillOnHover, ...props }) => {
  const logoClass = clsx(
    "relative block",
    className
  );

  const inner = (
    <Image
      src={logoImage}
      alt="Banoz Consultancy Logo"
      className={clsx(
        "h-12 w-auto transition-opacity duration-300",
        invert ? "invert" : ""
      )}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className={logoClass} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={clsx("cursor-pointer", logoClass)} {...props}>
      {inner}
    </div>
  );
};

export default Logo;
