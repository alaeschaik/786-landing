import clsx from "clsx";
import FadeIn, { FadeInStagger } from "./FadeIn";
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const channels = [
  {
    title: "Telefon",
    icon: HiOutlinePhone,
    color: "bg-accent-200",
    lines: ["Syed Tayyab Hassan Naqvi"],
    link: { href: "tel:+436767056207", label: "+43 676 7056207" },
  },
  {
    title: "E-Mail",
    icon: HiOutlineEnvelope,
    color: "bg-brand-100",
    lines: ["Für alle Anfragen"],
    link: { href: "mailto:office@786.at", label: "office@786.at" },
  },
  {
    title: "Kanzlei",
    icon: HiOutlineMapPin,
    color: "bg-rose-100",
    lines: ["Kalvarienberggasse 17/1", "1170 Wien"],
    link: {
      href: "https://maps.google.com/?q=Kalvarienberggasse+17/1+1170+Wien",
      label: "In Google Maps öffnen",
      external: true,
    },
  },
  {
    title: "Öffnungszeiten",
    icon: HiOutlineClock,
    color: "bg-emerald-100",
    lines: [
      "Montag - Freitag: 08:00 - 17:00",
      "Samstag & Sonntag: Geschlossen",
      "Termine außerhalb nach Vereinbarung",
    ],
  },
];

// Contact channels as cards; shared by the contact and appointment pages.
const ContactInfo = ({ className }) => {
  return (
    <FadeInStagger faster>
      <ul role="list" className={clsx("grid grid-cols-1 gap-4 sm:grid-cols-2", className)}>
        {channels.map((channel) => (
          <li key={channel.title}>
            <FadeIn className="h-full rounded-3xl border border-neutral-200 bg-white p-6">
              <span
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  channel.color
                )}
              >
                <channel.icon className="h-6 w-6 text-neutral-950" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-neutral-950">
                {channel.title}
              </h3>
              <div className="mt-2 space-y-1 text-sm text-neutral-600">
                {channel.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              {channel.link && (
                <a
                  href={channel.link.href}
                  {...(channel.link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="mt-3 inline-block text-sm font-semibold text-neutral-950 underline decoration-accent-400 decoration-2 underline-offset-4 hover:decoration-neutral-950"
                >
                  {channel.link.label}
                </a>
              )}
            </FadeIn>
          </li>
        ))}
      </ul>
    </FadeInStagger>
  );
};

export default ContactInfo;
