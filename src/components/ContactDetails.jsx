import React from "react";
import FadeIn from "./FadeIn";
import ContactInfo from "./ContactInfo";

const ContactDetails = () => {
  return (
    <div>
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Unsere Kanzlei
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Besuchen Sie uns persönlich in unserer Kanzlei in Wien oder vereinbaren Sie
          einen Termin für ein unverbindliches Erstgespräch.
        </p>
      </FadeIn>
      <ContactInfo className="mt-8" />
    </div>
  );
};

export default ContactDetails;
