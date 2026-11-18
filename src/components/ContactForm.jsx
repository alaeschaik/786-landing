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

const serviceOptions = [
  { value: "buchhaltung", de: "Buchhaltung", en: "Bookkeeping" },
  { value: "jahresabschluss", de: "Jahresabschluss", en: "Annual accounts" },
  { value: "personal", de: "Personalverrechnung", en: "Payroll" },
  { value: "beratung", de: "Unternehmensberatung", en: "Business consulting" },
  { value: "mehrere", de: "Mehrere Bereiche", en: "Several areas" },
];

const field = (data, name) => String(data.get(name) || "").trim();

const buildEnquiry = (data) => ({
  fields: {
    name: field(data, "name"),
    email: field(data, "email"),
    company: field(data, "company"),
    phone: field(data, "phone"),
    message: field(data, "message"),
  },
  service: serviceOptions.find((o) => o.value === data.get("service")),
});

const ContactForm = () => {
  const t = useT();
  const { status, setStatus, handleSubmit } = useEnquirySubmit("contact", buildEnquiry);

  if (status === "sent") {
    return (
      <FadeIn>
        <SuccessPanel
          title={t("Vielen Dank für Ihre Nachricht!", "Thank you for your message!")}
          onReset={() => setStatus("idle")}
        >
          {t(
            "Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines Werktages bei Ihnen.",
            "We have received your enquiry and will get back to you within one business day."
          )}
          {sendsConfirmation &&
            t(
              " Eine Bestätigung ist unterwegs in Ihr Postfach.",
              " A confirmation is on its way to your inbox."
            )}
        </SuccessPanel>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="relative rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
      >
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          {t("Anfrage senden", "Send an enquiry")}
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
            label={t("Unternehmen", "Company")}
            name="company"
            autoComplete="organization"
            maxLength={150}
          />
          <TextInput label={t("Telefon", "Phone")} type="tel" name="phone" autoComplete="tel" maxLength={50} />
          <TextInput
            label={t("Ihre Nachricht", "Your message")}
            name="message"
            multiline
            required
            maxLength={5000}
          />
          <div className="border border-neutral-300 bg-white px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                {t("Welche Leistung interessiert Sie?", "Which service are you interested in?")}
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
        </div>
        {status === "error" && <ErrorNotice />}
        <SubmitButton status={status}>{t("Anfrage absenden", "Send enquiry")}</SubmitButton>
        <PrivacyNote />
      </form>
    </FadeIn>
  );
};

export default ContactForm;
