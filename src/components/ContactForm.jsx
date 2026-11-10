"use client";

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const company = data.get("company") || "";
    const phone = data.get("phone") || "";
    const message = data.get("message") || "";
    const service = data.get("service") || "";

    const subject = `Kontaktanfrage von ${name}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      company ? `Unternehmen: ${company}` : "",
      phone ? `Telefon: ${phone}` : "",
      service ? `Leistung: ${service}` : "",
      message ? `\nNachricht:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:office@786.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
      >
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Anfrage senden
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl">
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
          <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Welche Leistung interessiert Sie?
              </legend>
            </fieldset>
            <div className="mt-4 flex flex-wrap gap-2">
              <RadioInput label="Buchhaltung" name="service" value="buchhaltung" />
              <RadioInput label="Jahresabschluss" name="service" value="jahresabschluss" />
              <RadioInput label="Personalverrechnung" name="service" value="personal" />
              <RadioInput label="Unternehmensberatung" name="service" value="beratung" />
              <RadioInput label="Mehrere Bereiche" name="service" value="mehrere" />
            </div>
          </div>
        </div>
        <Button type="submit" variant="accent" size="lg" className="mt-8">
          Anfrage absenden
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
