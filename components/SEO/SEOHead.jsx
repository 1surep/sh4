// components/SEO/SEOHead.jsx
// Additional SEO meta tags component (if needed for dynamic content)

export default function SEOHead({ 
  title, 
  description, 
  image, 
  url, 
  type = "website" 
}) {
  const siteUrl = "https://sierrah4.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/logo.jpg`;

  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={fullUrl} />
    </>
  );
}

