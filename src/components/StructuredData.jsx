import { Helmet } from 'react-helmet-async'

function StructuredData() {
  const siteUrl = 'https://www.fardah-roshan.website'
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO", "EducationalOrganization"],
    "name": "Fardah Roshan Academy",
    "alternateName": "فرده روشن اکادمی",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.webp`,
    "description": "501(c)(3) nonprofit providing computer labs, libraries, and educational programs across Afghanistan to increase literacy and support education.",
    "foundingDate": "2020",
    "taxID": "85-4170493",
    "nonprofitStatus": "501(c)(3)",
    "email": "info@fardahroshan.org",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AF",
      "addressRegion": "Afghanistan"
    },
    "sameAs": [
      "https://www.facebook.com/fardahroshanacademy/",
      "https://www.instagram.com/fardah.roshan.academy/",
      "https://www.youtube.com/channel/UCeA9WAIckoKAEy7Gtm8P2og"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Afghanistan"
    },
    "knowsAbout": [
      "Education",
      "Literacy",
      "Computer Literacy",
      "Libraries",
      "Student Support",
      "School Development"
    ],
    "subOrganization": [
      {
        "@type": "EducationalOrganization",
        "name": "Computer Labs Program",
        "description": "Modern computer education facilities in schools across Afghanistan"
      },
      {
        "@type": "Library",
        "name": "Libraries Program",
        "description": "Well-stocked libraries promoting literacy across Afghanistan"
      }
    ]
  }
  
  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fardah Roshan Academy",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "fa", "ps"]
  }
  
  // Breadcrumb Schema (for navigation)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Programs",
        "item": `${siteUrl}/computer-labs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Donate",
        "item": `${siteUrl}/donate`
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  )
}

export default StructuredData

