"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiCheck, HiOutlineExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";
import { useLanguage, useT } from "@/i18n/LanguageProvider";
import { sendEnquiry } from "@/lib/sendEnquiry";

// Shared submit logic for the contact and appointment forms.
// `buildEnquiry(formData)` returns { fields, service, timeSlot }.
export function useEnquirySubmit(kind, buildEnquiry) {
  const { lang } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (data.get("website")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const result = await sendEnquiry({ kind, lang, ...buildEnquiry(data) });
      setStatus(result === "sent" ? "sent" : "idle");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return { status, setStatus, handleSubmit };
}

// Hidden from people and assistive tech; bots tend to fill every field.
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function PrivacyNote() {
  const t = useT();
  return (
    <p className="mt-6 text-sm text-neutral-500">
      {t("Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer ", "By submitting, you agree to the processing of your details as described in our ")}
      <Link href="/privacy" className="font-medium text-neutral-700 underline decoration-accent-400 decoration-2 underline-offset-4 hover:text-neutral-950">
        {t("Datenschutzerklärung", "privacy policy")}
      </Link>
      {t(" zu.", ".")}
    </p>
  );
}

export function SubmitButton({ status, children }) {
  const t = useT();
  const sending = status === "sending";
  return (
    <Button
      type="submit"
      variant="accent"
      size="lg"
      className="mt-8 disabled:cursor-wait disabled:opacity-70"
      disabled={sending}
    >
      {sending && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent"
        />
      )}
      {sending ? t("Wird gesendet …", "Sending …") : children}
    </Button>
  );
}

export function ErrorNotice() {
  const t = useT();
  return (
    <div
      role="alert"
      className="mt-6 flex gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"
    >
      <HiOutlineExclamationTriangle className="mt-0.5 h-5 w-5 flex-none" />
      <p>
        {t(
          "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an ",
          "Sorry, your message could not be sent. Please try again or email us directly at "
        )}
        <a href="mailto:office@786.at" className="font-semibold underline">
          office@786.at
        </a>
        .
      </p>
    </div>
  );
}

export function SuccessPanel({ title, children, onReset }) {
  const t = useT();
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-center sm:p-10"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-300"
      >
        <HiCheck className="h-8 w-8 text-neutral-950" />
      </motion.span>
      <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">{title}</h2>
      <div className="mx-auto mt-3 max-w-md text-base text-neutral-600">{children}</div>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 text-sm font-semibold text-neutral-950 underline decoration-accent-400 decoration-2 underline-offset-4 hover:decoration-neutral-950"
      >
        {t("Weitere Nachricht senden", "Send another message")}
      </button>
    </motion.div>
  );
}
