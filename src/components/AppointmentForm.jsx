"use client";

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const nextSteps = [
  "Sie erhalten zeitnah eine Bestätigung per E-Mail oder Telefon",
  "Wir vereinbaren gemeinsam einen passenden Termin für Ihr kostenloses Erstgespräch",
  "Im Gespräch besprechen wir Ihre Anforderungen und zeigen Ihnen, wie wir Sie unterstützen können",
  "Sie entscheiden in Ruhe, ob Sie mit uns zusammenarbeiten möchten – keine Verpflichtung!",
];

const AppointmentForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const company = data.get("company") || "";
    const timeSlot = data.get("timeSlot") || "";
    const service = data.get("service") || "";
    const message = data.get("message") || "";

    const subject = `Terminanfrage von ${name}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      company ? `Unternehmen: ${company}` : "",
      timeSlot ? `Bevorzugter Zeitraum: ${timeSlot}` : "",
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
          Ihre Daten
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="E-Mail"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Telefon"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
          />
          <TextInput
            label="Unternehmen"
            name="company"
            autoComplete="organization"
          />

          {/* Preferred Date and Time */}
          <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Bevorzugter Zeitraum
              </legend>
            </fieldset>
            <div className="mt-4 flex flex-wrap gap-2">
              <RadioInput
                label="Vormittag (8-12 Uhr)"
                name="timeSlot"
                value="Vormittag (8-12 Uhr)"
              />
              <RadioInput
                label="Nachmittag (12-17 Uhr)"
                name="timeSlot"
                value="Nachmittag (12-17 Uhr)"
              />
              <RadioInput
                label="Flexibel"
                name="timeSlot"
                value="Flexibel"
              />
            </div>
          </div>

          {/* Service Interest */}
          <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Worum geht es?
              </legend>
            </fieldset>
            <div className="mt-4 flex flex-wrap gap-2">
              <RadioInput
                label="Buchhaltung"
                name="service"
                value="Buchhaltung"
              />
              <RadioInput
                label="Jahresabschluss"
                name="service"
                value="Jahresabschluss"
              />
              <RadioInput
                label="Personalverrechnung"
                name="service"
                value="Personalverrechnung"
              />
              <RadioInput
                label="Unternehmensberatung"
                name="service"
                value="Unternehmensberatung"
              />
              <RadioInput
                label="Unternehmensgründung"
                name="service"
                value="Unternehmensgründung"
              />
              <RadioInput
                label="Allgemeine Beratung"
                name="service"
                value="Allgemeine Beratung"
              />
            </div>
          </div>

          <TextInput
            label="Ihre Nachricht (optional)"
            name="message"
            placeholder="Gibt es etwas Besonderes, das wir wissen sollten?"
          />
        </div>
        <Button type="submit" variant="accent" size="lg" className="mt-8">
          Termin anfragen
        </Button>
      </form>

      {/* What happens next */}
      <div className="mt-8 rounded-3xl bg-accent-100 p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-neutral-900">
          Was passiert nach der Anfrage?
        </h3>
        <ol role="list" className="mt-6 space-y-4">
          {nextSteps.map((step, index) => (
            <li key={step} className="flex gap-4 text-sm text-neutral-700">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900 ring-1 ring-accent-300">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
};

export default AppointmentForm;
