export function constructMetadata({
  title = "Banoz Consultancy - Bilanzbuchhaltung in Wien",
  description = "Professionelle Bilanzbuchhaltung, Jahresabschlüsse und Steuerberatung in Wien. Ihr zuverlässiger Partner für Buchhaltung, Personalverrechnung und Unternehmensberatung.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@786services",
    },
    icons,
    metadataBase: new URL("https://786.at/"),
    themeColor: "#1e3a8a",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
