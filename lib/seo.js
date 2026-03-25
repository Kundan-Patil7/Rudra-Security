export const defaultSEO = {
  title: 'Rudra Security Pvt Ltd — India\'s Trusted Security Partner',
  description: 'Premier security services provider in Maharashtra. Industrial security, residential protection, CCTV surveillance with 98% client retention. 24/7 emergency response within 30 minutes.',
  keywords: [
    'security agency',
    'security services India',
    'industrial security',
    'residential security',
    'CCTV installation',
    'event security',
    'private security guards',
    'Nashik security',
    'Pune security',
    'Mumbai security',
    'Rudra Security',
  ],
  siteUrl: 'https://rudrasecurity.com',
  siteName: 'Rudra Security Pvt Ltd',
  siteLocale: 'en_IN',
  twitterHandle: '@rudrasecurity',
}

export const generateMetadata = (pageData = {}) => {
  const title = pageData.title ? `${pageData.title} — Rudra Security` : defaultSEO.title
  const description = pageData.description || defaultSEO.description
  const url = pageData.url ? `${defaultSEO.siteUrl}${pageData.url}` : defaultSEO.siteUrl

  return {
    title,
    description,
    keywords: defaultSEO.keywords,
    metadataBase: new URL(defaultSEO.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaultSEO.siteName,
      locale: defaultSEO.siteLocale,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Rudra Security — Vigilance. Integrity. Protection.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
      site: defaultSEO.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}