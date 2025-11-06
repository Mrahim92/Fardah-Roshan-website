import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function SEO({ 
  title, 
  description, 
  keywords,
  image,
  type = 'website',
  path = '',
  noindex = false 
}) {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language || 'en'
  
  // Site configuration
  const siteUrl = 'https://mrahim92.github.io/Fardah-Roshan-website'
  const defaultImage = `${siteUrl}/og-image.jpg` // We'll create this
  const organizationName = 'Fardah Roshan Academy'
  
  // Build full URL
  const fullUrl = `${siteUrl}${path}`
  
  // Use provided image or default
  const ogImage = image ? `${siteUrl}${image}` : defaultImage
  
  // Language alternates
  const languages = ['en', 'fa', 'ps']
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLanguage} dir={currentLanguage === 'fa' || currentLanguage === 'ps' ? 'rtl' : 'ltr'} />
      <title>{title} | {organizationName}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* hreflang for multilingual support */}
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}${path}?lang=${lang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | ${organizationName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={organizationName} />
      <meta property="og:locale" content={currentLanguage === 'fa' ? 'fa_AF' : currentLanguage === 'ps' ? 'ps_AF' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={`${title} | ${organizationName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content={organizationName} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#00C2CB" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Nonprofit/Charity specific */}
      <meta property="og:see_also" content="https://www.facebook.com/fardahroshanacademy/" />
      <meta property="og:see_also" content="https://www.instagram.com/fardah.roshan.academy/" />
      <meta property="og:see_also" content="https://www.youtube.com/channel/UCeA9WAIckoKAEy7Gtm8P2og" />
    </Helmet>
  )
}

export default SEO

