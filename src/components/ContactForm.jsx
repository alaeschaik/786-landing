import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Anfrage senden
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="E-Mail"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Unternehmen"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Telefon" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Ihre Nachricht" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Welche Leistung interessiert Sie?
              </legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="Buchhaltung" name="service" value="buchhaltung" />
              <RadioInput label="Jahresabschluss" name="service" value="jahresabschluss" />
              <RadioInput label="Personalverrechnung" name="service" value="personal" />
              <RadioInput label="Unternehmensberatung" name="service" value="beratung" />
              <RadioInput label="Mehrere Bereiche" name="service" value="mehrere" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Anfrage absenden
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
