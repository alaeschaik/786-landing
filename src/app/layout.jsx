import RootLayout from "@/components/RootLayout";
import StructuredData from "@/components/StructuredData";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://786.at"),
  title: {
    template: "%s | Banoz Consultancy",
    default: "Banoz Consultancy - Bilanzbuchhaltung in Wien",
  },
  description: "Professionelle Bilanzbuchhaltung, Jahresabschlüsse und Beratung in Wien. Ihr zuverlässiger Partner für Buchhaltung, Personalverrechnung und Unternehmensberatung im Rahmen des BiBuG.",
  keywords: [
    "Bilanzbuchhaltung",
    "Buchhaltung Wien",
    "Jahresabschluss",
    "Personalverrechnung",
    "Unternehmensberatung",
    "786 Services KG",
    "Banoz Consultancy",
    "Buchhaltung 1170 Wien",
    "BiBuG",
    "Lohnverrechnung Wien",
    "Bilanzierung",
    "Steuerberatung Wien",
    "Einnahmen Ausgaben Rechnung",
    "Buchhalter Wien",
    "KMU Buchhaltung",
    "Finanzbuchhaltung",
    "UVA Erstellung",
    "Umsatzsteuervoranmeldung"
  ],
  authors: [{ name: "786 Services KG" }],
  creator: "786 Services KG",
  publisher: "786 Services KG",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://786.at",
    siteName: "Banoz Consultancy",
    title: "Banoz Consultancy - Bilanzbuchhaltung in Wien",
    description: "Professionelle Bilanzbuchhaltung, Jahresabschlüsse und Beratung im Rahmen des BiBuG in Wien.",
    images: [
      {
        url: "/agency.PNG",
        width: 1200,
        height: 630,
        alt: "Banoz Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banoz Consultancy - Bilanzbuchhaltung in Wien",
    description: "Professionelle Bilanzbuchhaltung, Jahresabschlüsse und Beratung im Rahmen des BiBuG in Wien.",
    images: ["/agency.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Hier können später Google Search Console und andere Verification Codes hinzugefügt werden
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="de-AT"
      suppressHydrationWarning
      className="h-full overflow-x-hidden bg-white text-base antialiased text-neutral-900"
    >
      <head>
        {/* Hide the German static HTML for visitors who chose English until React
            has swapped the text, with a timeout so the page can never stay hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("lang")==="en"){var d=document.documentElement;d.classList.add("lang-pending");d.lang="en";setTimeout(function(){d.classList.remove("lang-pending")},1500)}}catch(e){}`,
          }}
        />
        <StructuredData />
      </head>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <RootLayout>{children}</RootLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
