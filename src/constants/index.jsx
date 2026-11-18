// Footer navigation; each label carries its German (default) and English text.
export const navigation = [
  {
    de: "Leistungen",
    en: "Services",
    links: [
      { de: "Buchhaltung", en: "Bookkeeping", href: "/services#buchhaltung" },
      { de: "Jahresabschluss", en: "Annual accounts", href: "/services#jahresabschluss" },
      { de: "Personalverrechnung", en: "Payroll", href: "/services#personal" },
      { de: "Gründung", en: "Business formation", href: "/services#gruendung" },
      { de: "Büroservice", en: "Office services", href: "/services#bueroservice" },
      { de: "Unternehmensberatung", en: "Business consulting", href: "/services#beratung" },
      { de: "Alle Leistungen", en: "All services", href: "/services", arrow: true },
    ],
  },
  {
    de: "Unternehmen",
    en: "Company",
    links: [
      { de: "Über uns", en: "About us", href: "/about" },
      { de: "Kontakt", en: "Contact", href: "/contact" },
      { de: "Kooperationen", en: "Partnerships", href: "/about#kooperationen" },
      { de: "Termin buchen", en: "Book a meeting", href: "/appointment" },
      { de: "Kundenlogin", en: "Client login", href: "https://banoz.786.at/bmdcom/bmdcom.dll" },
    ],
  },
  {
    de: "Kontakt",
    en: "Contact",
    links: [
      { de: "office@786.at", href: "mailto:office@786.at" },
      { de: "+43 676 7056207", href: "tel:+436767056207" },
      {
        de: "Kalvarienberggasse 17/1, 1170 Wien",
        en: "Kalvarienberggasse 17/1, 1170 Vienna",
        href: "https://maps.google.com/?q=Kalvarienberggasse+17/1+1170+Wien",
      },
    ],
  },
];
