// Sends form submissions as email through EmailJS (https://www.emailjs.com).
//
// The site is a static export (GitHub Pages), so there is no server of our own
// to send mail from. EmailJS relays the message using the office mailbox that
// is connected in the EmailJS dashboard. One generic EmailJS template is used
// for every email; the designed HTML is built here and passed in as {{{html}}}.
// Setup steps: docs/EMAIL_SETUP.md.

import {
  OFFICE_EMAIL,
  renderOfficeNotification,
  renderVisitorConfirmation,
} from "./emailTemplates";

const config = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  // Send the visitor a confirmation email as well (default: on).
  sendConfirmation: process.env.NEXT_PUBLIC_EMAILJS_SEND_CONFIRMATION !== "false",
  officeEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || OFFICE_EMAIL,
};

export const isEmailConfigured = Boolean(
  config.serviceId && config.templateId && config.publicKey
);

export const sendsConfirmation = isEmailConfigured && config.sendConfirmation;

async function sendViaEmailJS({ toEmail, subject, html, text, replyTo, fromName }) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        to_email: toEmail,
        subject,
        html,
        text,
        reply_to: replyTo,
        from_name: fromName,
      },
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`EmailJS ${response.status}: ${detail}`);
  }
}

// Fallback while EmailJS isn't configured: open the visitor's mail app.
function openMailClient({ subject, text }) {
  window.location.href = `mailto:${config.officeEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(text)}`;
}

/**
 * @param {object} enquiry  see renderOfficeNotification in emailTemplates.js
 * @returns {Promise<"sent"|"mailto">}
 */
export async function sendEnquiry(enquiry) {
  const notification = renderOfficeNotification(enquiry);

  if (!isEmailConfigured) {
    openMailClient(notification);
    return "mailto";
  }

  await sendViaEmailJS({
    toEmail: config.officeEmail,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
    replyTo: enquiry.fields.email,
    fromName: `${enquiry.fields.name} via 786.at`,
  });

  if (config.sendConfirmation && enquiry.fields.email) {
    const confirmation = renderVisitorConfirmation(enquiry);
    // The office already has the enquiry; a failed confirmation shouldn't
    // show the visitor an error.
    try {
      await sendViaEmailJS({
        toEmail: enquiry.fields.email,
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
        replyTo: config.officeEmail,
        fromName: "Banoz Consultancy",
      });
    } catch (error) {
      console.warn("Confirmation email failed", error);
    }
  }

  return "sent";
}
