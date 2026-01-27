export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
    "@id": "https://786.at/#organization",
    "name": "Banoz Consultancy",
    "legalName": "786 Services KG",
    "url": "https://786.at",
    "logo": "https://786.at/logo.svg",
    "description": "Professionelle Bilanzbuchhaltung, Jahresabschlüsse und Beratung in Wien. Ihr zuverlässiger Partner für Buchhaltung, Personalverrechnung und Unternehmensberatung im Rahmen des BiBuG.",
    "telephone": "+4369915121472",
    "email": "office@786.at",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalvarienberggasse 17/1",
      "addressLocality": "Wien",
      "addressRegion": "Wien",
      "postalCode": "1170",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.2256",
      "longitude": "16.3336"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Wien"
    },
    "founder": {
      "@type": "Person",
      "name": "Syed Tayyab Hassan Naqvi",
      "jobTitle": "Geschäftsführer"
    },
    "sameAs": [
      "https://firmen.wko.at/786-services-kg/wien/?firmaid=a6602ba3-061b-4cf7-88b7-3257ef701e0f"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Buchhaltungsdienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Buchhaltung",
            "description": "Verbuchung sämtlicher Geschäftsfälle, doppelte Buchhaltung, Einnahmen-Ausgaben-Rechnung, Debitorenbuchhaltung, Saldenlisten, UVA und Kostenrechnung."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jahresabschluss & Bilanzierung",
            "description": "Überschussermittlung, Einnahmen-Ausgaben-Rechnung, betriebswirtschaftliche Auswertungen, Bilanzanalyse und steuerliche Optimierung."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personalverrechnung",
            "description": "Lohn- und Gehaltsberechnung, Steuerabzüge, An- und Abmeldung der Dienstnehmer, Lohnkonten und Beratung bei Gestaltung von Arbeitsverhältnissen."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Unternehmensberatung & Vertretung",
            "description": "Beratung in steuerlichen Themen im Rahmen des BiBuG, Steuerplanung, Förderungen, Sozialversicherungsberatung, Unternehmensnachfolge und Vertretung vor Abgabenbehörden."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://786.at"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Leistungen",
        "item": "https://786.at/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Über uns",
        "item": "https://786.at/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Kontakt",
        "item": "https://786.at/contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://786.at/#website",
    "url": "https://786.at",
    "name": "Banoz Consultancy",
    "description": "Professionelle Bilanzbuchhaltung in Wien",
    "publisher": {
      "@id": "https://786.at/#organization"
    },
    "inLanguage": "de-AT",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://786.at/services#{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Bilanzbuchhaltung und wer darf sie ausüben?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bilanzbuchhaltung umfasst die Erstellung von Jahresabschlüssen, Bilanzen und betriebswirtschaftlichen Auswertungen. In Österreich dürfen diese Tätigkeiten gemäß dem Bilanzbuchhaltungsgesetz (BiBuG) nur von geprüften Bilanzbuchhaltern ausgeübt werden. Als zugelassener Bilanzbuchhalter bieten wir alle Leistungen im Rahmen des BiBuG an."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Buchhaltungsleistungen bietet Banoz Consultancy an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten umfassende Buchhaltungsdienstleistungen: Laufende Buchhaltung (doppelte Buchführung und Einnahmen-Ausgaben-Rechnung), Jahresabschlüsse und Bilanzerstellung, Personalverrechnung mit Lohn- und Gehaltsabrechnung, Umsatzsteuervoranmeldung (UVA), sowie Unternehmensberatung und Vertretung vor Behörden."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet eine professionelle Buchhaltung in Wien?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für Buchhaltungsdienstleistungen richten sich nach dem Umfang Ihrer Geschäftstätigkeit, der Anzahl der Belege und dem gewünschten Leistungsumfang. Wir erstellen Ihnen gerne ein individuelles Angebot. Kontaktieren Sie uns für ein unverbindliches Erstgespräch."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Einnahmen-Ausgaben-Rechnung und doppelter Buchhaltung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Einnahmen-Ausgaben-Rechnung (E/A-Rechnung) ist eine vereinfachte Form der Gewinnermittlung für kleinere Unternehmen. Die doppelte Buchhaltung ist für bilanzierungspflichtige Unternehmen vorgeschrieben und erfasst alle Geschäftsvorfälle auf mindestens zwei Konten. Wir beraten Sie, welche Methode für Ihr Unternehmen die richtige ist."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft die Zusammenarbeit mit einem Bilanzbuchhalter ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach einem Erstgespräch analysieren wir Ihre Situation und erstellen ein individuelles Angebot. Die laufende Zusammenarbeit kann flexibel gestaltet werden: Sie können Ihre Belege digital oder physisch übermitteln. Wir übernehmen die Verbuchung, erstellen Auswertungen und kümmern uns um alle Fristen bei Finanzamt und Sozialversicherung."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Fristen muss ich bei der Buchhaltung beachten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wichtige Fristen sind: Monatliche UVA-Meldung bis zum 15. des Folgemonats, Jahresabschluss innerhalb von 9 Monaten nach dem Bilanzstichtag, Steuererklärungen je nach Zuständigkeit. Als Ihr Bilanzbuchhalter überwachen wir alle Fristen und sorgen für termingerechte Einreichungen."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
