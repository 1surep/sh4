// app/head.js
import { metadata } from "./metadata";

export default function Head() {
  return (
    <>
      <title>{metadata.title.default}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <link rel="icon" href="/favicon.ico.ico" sizes="any" />
      <link rel="canonical" href="https://sierrah4.com" />
      {/* Open Graph */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      {/* Twitter Card */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:creator" content={metadata.twitter.creator} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
