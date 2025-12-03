import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Unsere Kanzlei
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Besuchen Sie uns persönlich in unserer Kanzlei in Wien oder vereinbaren Sie
        einen Termin für ein unverbindliches Erstgespräch.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Kontaktieren Sie uns
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Allgemeine Anfragen", "office@786.at"],
            ["Telefon", "+43 699 15121472"],
          ].map(([label, contact]) => (
            <div key={contact}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                {label === "Telefon" ? (
                  <Link
                    href={`tel:${contact}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {contact}
                  </Link>
                ) : (
                  <Link
                    href={`mailto:${contact}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {contact}
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Schnellkontakt
        </h2>
        <div className="mt-6 space-y-4 text-sm">
          <p className="text-neutral-600">
            <strong className="font-semibold text-neutral-950">Website:</strong>{" "}
            <Link href="https://786.at" className="text-neutral-600 hover:text-neutral-950">
              786.at
            </Link>
          </p>
          <p className="text-neutral-600">
            <strong className="font-semibold text-neutral-950">Termin buchen:</strong>{" "}
            <Link href="/appointment" className="text-neutral-600 hover:text-neutral-950">
              Online-Terminvereinbarung
            </Link>
          </p>
        </div>
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
