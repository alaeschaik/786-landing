export const navigation = [
  {
    title: "Leistungen",
    links: [
      { title: "Buchhaltung", href: "/services#buchhaltung" },
      { title: "Jahresabschluss", href: "/services#jahresabschluss" },
      { title: "Personalverrechnung", href: "/services#personal" },
      { title: "Unternehmensberatung", href: "/services#beratung" },
      {
        title: (
          <>
            Alle Leistungen <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/services",
      },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { title: "Über uns", href: "/about" },
      { title: "Kontakt", href: "/contact" },
      { title: "Termin buchen", href: "/appointment" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { title: "office@786.at", href: "mailto:office@786.at" },
      { title: "+43 699 15121472", href: "tel:+4369915121472" },
      { title: "Kalvarienberggasse 17/1, 1170 Wien", href: "https://maps.google.com/?q=Kalvarienberggasse+17/1+1170+Wien" },
    ],
  },
];
