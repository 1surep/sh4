// components/SEO/StructuredData.jsx

export default function StructuredData({ type = "Organization" }) {
  const baseUrl = "https://sierrah4.com";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sierra H4 - Sierra Hash House Harriers & Harriettes",
    "alternateName": "Sierra H4",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.jpg`,
    "description": "Sierra Hash House Harriers & Harriettes (Sierra H4) - Freetown's favorite drinking club with a running problem. Experience hashing, running, connection, and West African hashing hospitality.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Freetown",
      "addressRegion": "Western Area",
      "addressCountry": "SL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.4840",
      "longitude": "-13.2299"
    },
    "sameAs": [
      "https://twitter.com/SierraH4",
      "https://www.facebook.com/sierrah4",
      "https://www.instagram.com/sierrah4"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "url": `${baseUrl}/contact`
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sierra H4",
    "url": baseUrl,
    "description": "Sierra Hash House Harriers & Harriettes - Freetown's favorite drinking club with a running problem",
    "publisher": {
      "@type": "Organization",
      "name": "Sierra H4"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const sportsActivitySchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Sierra H4 Hash House Harriers",
    "description": "Weekly trail running and social events in Freetown, Sierra Leone",
    "sport": "Trail Running",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Freetown",
      "addressRegion": "Western Area",
      "addressCountry": "SL"
    }
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Pan Africa Hash 2027",
    "description": "Pan Africa Hash 2027 hosted by Sierra H4 in Freetown, Sierra Leone",
    "startDate": "2027-01-01",
    "endDate": "2027-01-07",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Freetown, Sierra Leone",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Freetown",
        "addressRegion": "Western Area",
        "addressCountry": "SL"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Sierra H4",
      "url": baseUrl
    }
  };

  const schemas = {
    Organization: organizationSchema,
    WebSite: websiteSchema,
    SportsActivity: sportsActivitySchema,
    Event: eventSchema,
  };

  const selectedSchema = schemas[type] || organizationSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
    />
  );
}

