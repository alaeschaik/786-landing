// Writes sample emails to email-previews/ so the design can be checked in a
// browser without sending anything:  npm run email:preview
import { mkdirSync, writeFileSync } from "node:fs";
import {
  renderOfficeNotification,
  renderVisitorConfirmation,
} from "../src/lib/emailTemplates.js";

const sample = {
  fields: {
    name: "Maria Muster",
    email: "maria@example.com",
    phone: "+43 660 1234567",
    company: "Muster GmbH",
    message:
      "Guten Tag,\n\nwir gründen gerade eine GmbH und suchen Unterstützung bei Buchhaltung und Lohnverrechnung für drei Mitarbeiter.\n\nLiebe Grüße\nMaria Muster",
  },
  service: { de: "Personalverrechnung", en: "Payroll" },
  timeSlot: { de: "Vormittag (8-12 Uhr)", en: "Morning (8am–12pm)" },
};

const outDir = new URL("../email-previews/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const files = {
  "office-appointment.html": renderOfficeNotification({ kind: "appointment", lang: "en", ...sample }),
  "office-contact.html": renderOfficeNotification({ kind: "contact", lang: "de", ...sample, timeSlot: undefined }),
  "confirmation-de.html": renderVisitorConfirmation({ kind: "appointment", lang: "de", ...sample }),
  "confirmation-en.html": renderVisitorConfirmation({ kind: "contact", lang: "en", ...sample, timeSlot: undefined }),
};

for (const [name, email] of Object.entries(files)) {
  writeFileSync(new URL(name, outDir), email.html);
  console.log(`email-previews/${name}  –  ${email.subject}`);
}
