// HTML emails for form submissions.
//
// Email clients ignore most modern CSS, so these templates use nested tables,
// inline styles and web-safe fonts. They render well in Gmail, Outlook, Apple
// Mail and on phones. Everything is built from plain strings so the same code
// runs in the browser (when the form is sent) and in Node (for previews, see
// scripts/preview-emails.mjs).

export const SITE_URL = "https://786.at";
export const OFFICE_EMAIL = "office@786.at";
export const OFFICE_PHONE = "+43 676 7056207";
export const OFFICE_PHONE_HREF = "tel:+436767056207";

const C = {
  page: "#f4f4f2",
  card: "#ffffff",
  ink: "#0a0a0a",
  text: "#404040",
  muted: "#737373",
  line: "#e5e5e5",
  soft: "#fafafa",
  accent: "#ffd43b",
  accentSoft: "#fff7d1",
  accentLine: "#ffe066",
  navy: "#172a63",
};

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const nl2br = (value) => escapeHtml(value).replace(/\r?\n/g, "<br />");

// ---------------------------------------------------------------------------
// Building blocks
// ---------------------------------------------------------------------------

function layout({ lang, preheader, body, footerNote }) {
  const t = (de, en) => (lang === "en" ? en : de);
  return `<!DOCTYPE html>
<html lang="${lang === "en" ? "en" : "de"}" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>Banoz Consultancy</title>
<style>
  @media only screen and (max-width: 620px) {
    .container { width: 100% !important; }
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .stack { display: block !important; width: 100% !important; box-sizing: border-box !important; padding-left: 20px !important; padding-right: 20px !important; }
    .label-cell { padding-bottom: 0 !important; border-bottom: 0 !important; }
    .value-cell { padding-top: 2px !important; }
    .h1 { font-size: 26px !important; line-height: 32px !important; }
  }
  a { color: ${C.ink}; }
</style>
</head>
<body style="margin:0;padding:0;background-color:${C.page};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escapeHtml(preheader)}&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.page};">
  <tr>
    <td align="center" style="padding:32px 12px;">
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
        <tr>
          <td style="background-color:${C.card};border-radius:24px;overflow:hidden;border:1px solid ${C.line};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="height:8px;line-height:8px;font-size:0;background-color:${C.accent};border-radius:24px 24px 0 0;">&nbsp;</td></tr>
              <tr>
                <td class="px" style="padding:32px 48px 8px 48px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td valign="middle">
                        <a href="${SITE_URL}" style="text-decoration:none;"><img src="${SITE_URL}/email/logo.png" width="96" height="72" alt="Banoz Consultancy" style="display:block;border:0;outline:none;width:96px;height:auto;" /></a>
                      </td>
                      <td valign="middle" align="right" style="font-family:${FONT};font-size:12px;line-height:18px;color:${C.muted};">
                        ${t("Bilanzbuchhaltung in Wien", "Accountancy in Vienna")}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              ${body}
            </table>
          </td>
        </tr>
        <tr>
          <td class="px" style="padding:28px 48px 8px 48px;font-family:${FONT};font-size:12px;line-height:20px;color:${C.muted};text-align:center;">
            <strong style="color:${C.text};">Banoz Consultancy</strong> &middot; 786 Services KG<br />
            ${t("Kalvarienberggasse 17/1, 1170 Wien", "Kalvarienberggasse 17/1, 1170 Vienna, Austria")}<br />
            <a href="${OFFICE_PHONE_HREF}" style="color:${C.muted};text-decoration:none;">${OFFICE_PHONE}</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:${OFFICE_EMAIL}" style="color:${C.muted};text-decoration:none;">${OFFICE_EMAIL}</a>
            &nbsp;&middot;&nbsp;
            <a href="${SITE_URL}" style="color:${C.muted};text-decoration:none;">786.at</a>
            ${footerNote ? `<br /><br /><span style="color:#a3a3a3;">${footerNote}</span>` : ""}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function badge(text) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="background-color:${C.accentSoft};border:1px solid ${C.accentLine};border-radius:999px;padding:6px 14px;font-family:${FONT};font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.ink};">${escapeHtml(text)}</td>
  </tr></table>`;
}

// Headline with a marker-style highlight like on the website.
function headline(before, highlighted, after = "") {
  return `<h1 class="h1" style="margin:20px 0 0 0;font-family:${FONT};font-size:32px;line-height:40px;font-weight:700;letter-spacing:-0.5px;color:${C.ink};">${escapeHtml(before)}<span style="background-color:${C.accentLine};padding:0 6px;border-radius:4px;">${escapeHtml(highlighted)}</span>${escapeHtml(after)}</h1>`;
}

function paragraph(html, style = "") {
  return `<p style="margin:16px 0 0 0;font-family:${FONT};font-size:16px;line-height:26px;color:${C.text};${style}">${html}</p>`;
}

function section(inner, padding = "24px 48px 0 48px") {
  return `<tr><td class="px" style="padding:${padding};">${inner}</td></tr>`;
}

function sectionTitle(text) {
  return `<p style="margin:0 0 12px 0;font-family:${FONT};font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted};">${escapeHtml(text)}</p>`;
}

function detailsTable(rows) {
  const visible = rows.filter((row) => row.value);
  const cells = visible
    .map((row, index) => {
      const border = index < visible.length - 1 ? `border-bottom:1px solid ${C.line};` : "";
      const value = row.href
        ? `<a href="${escapeHtml(row.href)}" style="color:${C.ink};text-decoration:underline;text-decoration-color:${C.accent};">${escapeHtml(row.value)}</a>`
        : escapeHtml(row.value);
      return `<tr>
        <td class="stack label-cell" width="34%" valign="top" style="padding:14px 16px 14px 20px;${border}font-family:${FONT};font-size:13px;line-height:20px;color:${C.muted};">${escapeHtml(row.label)}</td>
        <td class="stack value-cell" valign="top" style="padding:14px 20px 14px 16px;${border}font-family:${FONT};font-size:15px;line-height:22px;font-weight:600;color:${C.ink};">${value}</td>
      </tr>`;
    })
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.soft};border:1px solid ${C.line};border-radius:16px;border-collapse:separate;">${cells}</table>`;
}

function messageBlock(message) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="border-left:4px solid ${C.accent};background-color:${C.accentSoft};border-radius:0 16px 16px 0;padding:18px 22px;font-family:${FONT};font-size:15px;line-height:24px;color:${C.ink};">${nl2br(message)}</td>
  </tr></table>`;
}

function button(label, href, { variant = "accent" } = {}) {
  const bg = variant === "accent" ? C.accent : C.card;
  const border = variant === "accent" ? C.accent : "#d4d4d4";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 8px 0;"><tr>
    <td align="center" bgcolor="${bg}" style="border-radius:999px;border:1px solid ${border};">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:15px;line-height:20px;font-weight:700;color:${C.ink};text-decoration:none;border-radius:999px;">${escapeHtml(label)}</a>
    </td>
  </tr></table>`;
}

function steps(items) {
  return items
    .map(
      (item, index) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:${index ? 12 : 0}px;"><tr>
        <td width="40" valign="top">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
            <td align="center" valign="middle" width="28" height="28" style="width:28px;height:28px;border-radius:14px;background-color:${C.card};border:1px solid ${C.accentLine};font-family:${FONT};font-size:13px;font-weight:700;color:${C.ink};">${index + 1}</td>
          </tr></table>
        </td>
        <td valign="top" style="padding-top:4px;font-family:${FONT};font-size:15px;line-height:22px;color:${C.text};">${escapeHtml(item)}</td>
      </tr></table>`
    )
    .join("");
}

// ---------------------------------------------------------------------------
// Field metadata shared by both forms
// ---------------------------------------------------------------------------

const LABELS = {
  name: { de: "Name", en: "Name" },
  email: { de: "E-Mail", en: "Email" },
  phone: { de: "Telefon", en: "Phone" },
  company: { de: "Unternehmen", en: "Company" },
  service: { de: "Leistung", en: "Service" },
  timeSlot: { de: "Bevorzugter Zeitraum", en: "Preferred time" },
  language: { de: "Sprache", en: "Language" },
};

const KIND = {
  contact: { de: "Kontaktanfrage", en: "Enquiry" },
  appointment: { de: "Terminanfrage", en: "Meeting request" },
};

const pick = (obj, lang) => (obj ? (lang === "en" ? obj.en : obj.de) : "");

function formatDate(date, lang) {
  try {
    return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "de-AT", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Vienna",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

// ---------------------------------------------------------------------------
// 1) Notification to the office (always German, notes the visitor's language)
// ---------------------------------------------------------------------------

/**
 * @param {object} p
 * @param {"contact"|"appointment"} p.kind
 * @param {"de"|"en"} p.lang       language the visitor used on the site
 * @param {object} p.fields         { name, email, phone, company, message }
 * @param {object} [p.service]      { de, en } label of the chosen service
 * @param {object} [p.timeSlot]     { de, en } label of the preferred time
 * @param {Date}   [p.date]
 */
export function renderOfficeNotification({ kind, lang, fields, service, timeSlot, date = new Date() }) {
  const kindLabel = KIND[kind].de;
  const name = fields.name || "Unbekannt";
  const subject = `Neue ${kindLabel} von ${name}${service ? ` · ${service.de}` : ""}`;
  const replySubject = `Ihre ${kindLabel} bei Banoz Consultancy`;

  const rows = [
    { label: LABELS.name.de, value: fields.name },
    { label: LABELS.email.de, value: fields.email, href: fields.email ? `mailto:${fields.email}` : "" },
    { label: LABELS.phone.de, value: fields.phone, href: fields.phone ? `tel:${fields.phone.replace(/[^+\d]/g, "")}` : "" },
    { label: LABELS.company.de, value: fields.company },
    { label: LABELS.service.de, value: service?.de },
    { label: LABELS.timeSlot.de, value: timeSlot?.de },
    { label: LABELS.language.de, value: lang === "en" ? "Englisch – bitte auf Englisch antworten" : "Deutsch" },
  ];

  const actions = [
    fields.email ? button("Direkt antworten", `mailto:${fields.email}?subject=${encodeURIComponent(replySubject)}`) : "",
    fields.phone ? button("Zurückrufen", `tel:${fields.phone.replace(/[^+\d]/g, "")}`, { variant: "outline" }) : "",
  ].join("");

  const body = [
    section(
      `${badge(`Neue ${kindLabel}`)}
       ${headline("Anfrage von ", name)}
       ${paragraph(`Über das ${kind === "appointment" ? "Terminformular" : "Kontaktformular"} auf <a href="${SITE_URL}" style="color:${C.ink};">786.at</a> ist eine neue Nachricht eingegangen.`)}`,
      "28px 48px 0 48px"
    ),
    section(`${sectionTitle("Kontaktdaten")}${detailsTable(rows)}`, "28px 48px 0 48px"),
    fields.message ? section(`${sectionTitle("Nachricht")}${messageBlock(fields.message)}`, "28px 48px 0 48px") : "",
    actions ? section(`<div style="font-size:0;line-height:0;">${actions}</div>`, "28px 48px 0 48px") : "",
    section(
      `<p style="margin:0;padding-top:20px;border-top:1px solid ${C.line};font-family:${FONT};font-size:13px;line-height:20px;color:${C.muted};">Eingegangen am ${escapeHtml(formatDate(date, "de"))}. Mit &bdquo;Antworten&ldquo; schreiben Sie direkt an ${escapeHtml(fields.email || "den Absender")}.</p>`,
      "28px 48px 36px 48px"
    ),
  ].join("");

  const html = layout({
    lang: "de",
    preheader: `${kindLabel} von ${name}${fields.message ? `: ${fields.message.slice(0, 90)}` : ""}`,
    body,
  });

  const text = [
    `Neue ${kindLabel} über 786.at`,
    "",
    ...rows.filter((r) => r.value).map((r) => `${r.label}: ${r.value}`),
    fields.message ? `\nNachricht:\n${fields.message}` : "",
    "",
    `Eingegangen am ${formatDate(date, "de")}`,
  ].join("\n");

  return { subject, html, text };
}

// ---------------------------------------------------------------------------
// 2) Confirmation to the visitor (in the language they used)
// ---------------------------------------------------------------------------

/**
 * Deliberately leaves out the free-text message so the form can't be used to
 * send arbitrary content to third-party addresses.
 */
export function renderVisitorConfirmation({ kind, lang, fields, service, timeSlot }) {
  const t = (de, en) => (lang === "en" ? en : de);
  const firstName = (fields.name || "").trim().split(/\s+/)[0] || "";
  const subject = t(
    `Danke für Ihre ${KIND[kind].de} – Banoz Consultancy`,
    `Thank you for your ${KIND[kind].en.toLowerCase()} – Banoz Consultancy`
  );

  const rows = [
    { label: pick(LABELS.name, lang), value: fields.name },
    { label: pick(LABELS.email, lang), value: fields.email },
    { label: pick(LABELS.phone, lang), value: fields.phone },
    { label: pick(LABELS.company, lang), value: fields.company },
    { label: pick(LABELS.service, lang), value: pick(service, lang) },
    { label: pick(LABELS.timeSlot, lang), value: pick(timeSlot, lang) },
  ];

  const nextSteps =
    kind === "appointment"
      ? [
          t("Wir prüfen Ihre Anfrage und melden uns innerhalb eines Werktages.", "We review your request and get back to you within one business day."),
          t("Gemeinsam finden wir einen passenden Termin für Ihr kostenloses Erstgespräch.", "Together we find a convenient time for your free initial consultation."),
          t("Im Gespräch klären wir Ihre Anforderungen – ganz unverbindlich.", "In the meeting we discuss your needs – with no obligation."),
        ]
      : [
          t("Wir lesen Ihre Nachricht sorgfältig.", "We read your message carefully."),
          t("Sie erhalten innerhalb eines Werktages eine persönliche Antwort.", "You receive a personal reply within one business day."),
          t("Bei Bedarf vereinbaren wir ein kostenloses Erstgespräch.", "If helpful, we arrange a free initial consultation."),
        ];

  const body = [
    section(
      `${badge(t("Anfrage erhalten", "Request received"))}
       ${
         firstName
           ? headline(t("Danke, ", "Thank you, "), firstName, "!")
           : headline("", t("Vielen Dank", "Thank you"), "!")
       }
       ${paragraph(
         t(
           "Ihre Nachricht ist gut bei uns angekommen. Wir kümmern uns persönlich darum und melden uns so bald wie möglich bei Ihnen.",
           "Your message has reached us safely. We will handle it personally and get back to you as soon as possible."
         )
       )}`,
      "28px 48px 0 48px"
    ),
    section(`${sectionTitle(t("Ihre Angaben", "Your details"))}${detailsTable(rows)}`, "28px 48px 0 48px"),
    section(
      `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="background-color:${C.accentSoft};border-radius:16px;padding:22px 24px;">
          <p style="margin:0 0 16px 0;font-family:${FONT};font-size:16px;line-height:22px;font-weight:700;color:${C.ink};">${escapeHtml(t("So geht es weiter", "What happens next"))}</p>
          ${steps(nextSteps)}
        </td>
      </tr></table>`,
      "28px 48px 0 48px"
    ),
    section(
      `${paragraph(t("Sie möchten nicht warten? Rufen Sie uns gerne direkt an.", "Don't want to wait? Feel free to call us directly."), "margin-top:0;")}
       <div style="font-size:0;line-height:0;padding-top:16px;">
         ${button(t("Jetzt anrufen", "Call us now"), OFFICE_PHONE_HREF)}${button(t("Website besuchen", "Visit our website"), SITE_URL, { variant: "outline" })}
       </div>`,
      "28px 48px 0 48px"
    ),
    section(
      `<p style="margin:0;padding-top:20px;border-top:1px solid ${C.line};font-family:${FONT};font-size:15px;line-height:24px;color:${C.text};">${escapeHtml(t("Herzliche Grüße", "Kind regards"))}<br /><strong style="color:${C.ink};">${escapeHtml(t("Ihr Team von Banoz Consultancy", "The Banoz Consultancy team"))}</strong></p>`,
      "28px 48px 36px 48px"
    ),
  ].join("");

  const html = layout({
    lang,
    preheader: t(
      "Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines Werktages.",
      "We have received your request and will get back to you within one business day."
    ),
    body,
    footerNote: t(
      "Sie erhalten diese E-Mail, weil Sie auf 786.at ein Formular abgesendet haben. Falls Sie das nicht waren, können Sie diese Nachricht ignorieren.",
      "You are receiving this email because a form was submitted on 786.at. If this wasn't you, you can ignore this message."
    ),
  });

  const text = [
    t(`Danke${firstName ? `, ${firstName}` : ""}!`, `Thank you${firstName ? `, ${firstName}` : ""}!`),
    "",
    t("Ihre Nachricht ist gut bei uns angekommen. Wir melden uns so bald wie möglich.", "Your message has reached us. We will get back to you as soon as possible."),
    "",
    ...rows.filter((r) => r.value).map((r) => `${r.label}: ${r.value}`),
    "",
    `Banoz Consultancy · ${OFFICE_PHONE} · ${OFFICE_EMAIL}`,
  ].join("\n");

  return { subject, html, text };
}
