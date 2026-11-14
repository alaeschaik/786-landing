import { navigation } from "@/constants";
import { T } from "@/i18n/LanguageProvider";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.de}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              <T de={item.de} en={item.en} />
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link) => (
                <li key={link.href} className="mt-4">
                  <Link
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="transition hover:text-neutral-950"
                  >
                    <T de={link.de} en={link.en} />
                    {link.arrow && <span aria-hidden="true"> &rarr;</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
