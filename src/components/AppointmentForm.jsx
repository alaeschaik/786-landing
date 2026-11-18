"use client";

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import {
  ErrorNotice,
  Honeypot,
  PrivacyNote,
  SubmitButton,
  SuccessPanel,
  useEnquirySubmit,
} from "./EnquiryFeedback";
import { useT } from "@/i18n/LanguageProvider";
import { sendsConfirmation } from "@/lib/sendEnquiry";

const nextSteps = [
  {
    de: "Sie erhalten zeitnah eine Bestätigung per E-Mail oder Telefon",
    en: "You will promptly receive a confirmation by email or phone",
  },
  {
    de: "Wir vereinbaren gemeinsam einen passenden Termin für Ihr kostenloses Erstgespräch",
    en: "Together we arrange a convenient time for your free initial consultation",
  },
  {
    de: "Im Gespräch besprechen wir Ihre Anforderungen und zeigen Ihnen, wie wir Sie unterstützen können",
    en: "In the meeting we discuss your needs and show you how we can support you",
  },
  {
    de: "Sie entscheiden in Ruhe, ob Sie mit uns zusammenarbeiten möchten – keine Verpflichtung!",
    en: "You decide in your own time whether you'd like to work with us – no obligation!",
  },
];

const timeSlotOptions = [
  { value: "vormittag", de: "Vormittag (8-12 Uhr)", en: "Morning (8am–12pm)" },
  { value: "nachmittag", de: "Nachmittag (12-17 Uhr)", en: "Afternoon (12–5pm)" },
  { value: "flexibel", de: "Flexibel", en: "Flexible" },
];

const serviceOptions = [
  { value: "buchhaltung", de: "Buchhaltung", en: "Bookkeeping" },
  { value: "jahresabschluss", de: "Jahresabschluss", en: "Annual accounts" },
  { value: "personal", de: "Personalverrechnung", en: "Payroll" },
  { value: "beratung", de: "Unternehmensberatung", en: "Business consulting" },
  { value: "gruendung", de: "Unternehmensgründung", en: "Starting a business" },
  { value: "allgemein", de: "Allgemeine Beratung", en: "General advice" },
];

const field = (data, name) => String(data.get(name) || "").trim();

const buildEnquiry = (data) => ({
  fields: {
    name: field(data, "name"),
    email: field(data, "email"),
    phone: field(data, "phone"),
    company: field(data, "company"),
    message: field(data, "message"),
  },
  timeSlot: timeSlotOptions.find((o) => o.value === data.get("timeSlot")),
  service: serviceOptions.find((o) => o.value === data.get("service")),
});

const AppointmentForm = () => {
  const t = useT();
  const { status, setStatus, handleSubmit } = useEnquirySubmit("appointment", buildEnquiry);

  return (
    <FadeIn>
      {status === "sent" ? (
        <SuccessPanel
          title={t("Ihre Terminanfrage ist da!", "Your meeting request is in!")}
          onReset={() => setStatus("idle")}
        >
          {t(
            "Vielen Dank! Wir melden uns innerhalb eines Werktages, um einen passenden Termin mit Ihnen zu vereinbaren.",
            "Thank you! We will get back to you within one business day to arrange a convenient time."
          )}
          {sendsConfirmation &&
            t(
              " Eine Bestätigung haben wir Ihnen per E-Mail geschickt.",
              " We have sent you a confirmation by email."
            )}
        </SuccessPanel>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
        >
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            {t("Ihre Daten", "Your details")}
          </h2>
          <Honeypot />
          <div className="isolate mt-6 -space-y-px rounded-2xl">
            <TextInput label={t("Name", "Name")} name="name" autoComplete="name" required maxLength={100} />
            <TextInput
              label={t("E-Mail", "Email")}
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={200}
            />
            <TextInput
              label={t("Telefon", "Phone")}
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              maxLength={50}
            />
            <TextInput
              label={t("Unternehmen", "Company")}
              name="company"
              autoComplete="organization"
              maxLength={150}
            />

            <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">
                  {t("Bevorzugter Zeitraum", "Preferred time")}
                </legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {timeSlotOptions.map((option) => (
                    <RadioInput
                      key={option.value}
                      label={t(option.de, option.en)}
                      name="timeSlot"
                      value={option.value}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">
                  {t("Worum geht es?", "What is it about?")}
                </legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceOptions.map((option) => (
                    <RadioInput
                      key={option.value}
                      label={t(option.de, option.en)}
                      name="service"
                      value={option.value}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <TextInput
              label={t("Ihre Nachricht (optional)", "Your message (optional)")}
              name="message"
              multiline
              rows={3}
              maxLength={5000}
            />
          </div>
          {status === "error" && <ErrorNotice />}
          <SubmitButton status={status}>{t("Termin anfragen", "Request a meeting")}</SubmitButton>
          <PrivacyNote />
        </form>
      )}

      {/* What happens next */}
      <div className="mt-8 rounded-3xl bg-accent-100 p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-neutral-900">
          {t("Was passiert nach der Anfrage?", "What happens after you send your request?")}
        </h3>
        <ol role="list" className="mt-6 space-y-4">
          {nextSteps.map((step, index) => (
            <li key={step.de} className="flex gap-4 text-sm text-neutral-700">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-900 ring-1 ring-accent-300">
                {index + 1}
              </span>
              {t(step.de, step.en)}
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
};

export default AppointmentForm;
