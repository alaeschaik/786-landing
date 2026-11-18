import React from "react";
import FadeIn from "./FadeIn";
import ContactInfo from "./ContactInfo";
import { T } from "@/i18n/LanguageProvider";

const ContactDetails = () => {
  return (
    <div>
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          <T de="Unsere Kanzlei" en="Our office" />
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          <T
            de="Besuchen Sie uns persönlich in unserer Kanzlei in Wien oder vereinbaren Sie einen Termin für ein unverbindliches Erstgespräch."
            en="Visit us in person at our office in Vienna or book a free, no-obligation initial consultation."
          />
        </p>
      </FadeIn>
      <ContactInfo className="mt-8" />
    </div>
  );
};

export default ContactDetails;
