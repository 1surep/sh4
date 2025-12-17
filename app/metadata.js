// app/metadata.js

export const metadata = {
  metadataBase: new URL("https://sierrah4.com"),
  title: {
    default: "Sierra H4 - Sierra Hash House Harriers & Harriettes",
    template: "%s | Sierra H4 - Sierra Hash House Harriers & Harriettes"
  },
  description: "Sierra Hash House Harriers & Harriettes (Sierra H4) - Freetown's favorite drinking club with a running problem. Experience hashing, running, connection, and West African hashing hospitality. Join us for weekly runs, social events, and the 2027 Pan Africa Hash.",
  keywords: [
    "Sierra H4",
    "Hash House Harriers",
    "Hashing",
    "Running Club",
    "Sierra Leone",
    "Harriettes",
    "Freetown clubs",
    "Social running",
    "ON ON",
    "PAH 2027",
    "Pan Africa Hash 2027",
    "Hasher",
    "Hash",
    "Trail running",
    "Social club",
    "Freetown running",
    "West Africa hashing"
  ],
  authors: [{ name: "Sierra H4" }],
  creator: "Sierra H4",
  publisher: "Sierra H4",
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
  openGraph: {
    title: "Sierra H4 - Sierra Hash House Harriers & Harriettes",
    description: "Sierra Hash House Harriers & Harriettes (Sierra H4) - Freetown's beloved hashing club, global family, and the 2027 Pan Africa Hash hosts. Join Freetown's favorite drinking club with a running problem.",
    url: "https://sierrah4.com",
    siteName: "Sierra H4 - Hash House Harriers & Harriettes",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 - Hash House Harriers & Harriettes Logo",
      },
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "Sierra H4 Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sierra H4 - Sierra Hash House Harriers & Harriettes",
    description: "Freetown's Favorite Drinking Club With a Running Problem. Global hashing community in Sierra Leone. Join us for weekly runs and social events.",
    site: "@SierraH4",
    creator: "@SierraH4",
    images: [
      "/logo.jpg"
    ]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://sierrah4.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#166534",
  other: {
    "geo.region": "SL-W",
    "geo.placename": "Freetown",
    "geo.position": "8.4840;-13.2299",
    "ICBM": "8.4840, -13.2299",
  },
};
