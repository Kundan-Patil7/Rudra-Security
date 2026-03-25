export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rudra Security Pvt Ltd',
  url: 'https://rudrasecurity.com',
  logo: 'https://rudrasecurity.com/logos/logo.png',
  description: 'Premier security services provider in Maharashtra offering industrial security, residential protection, and CCTV surveillance.',
  foundingDate: '2018',
  founders: [
    {
      '@type': 'Person',
      name: 'Jayesh Deshmukh',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Bhagwati Banquet',
    addressLocality: 'Sinner',
    addressRegion: 'Nashik',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7020898975',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
  sameAs: [
    'https://www.linkedin.com/company/rudra-security',
    'https://twitter.com/rudrasecurity',
  ],
  award: 'ISO 9001:2015 Certified',
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rudra Security Pvt Ltd',
  image: 'https://rudrasecurity.com/og-image.jpg',
  priceRange: '₹₹',
  telephone: '+91-7020898975',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Bhagwati Banquet',
    addressLocality: 'Sinner',
    addressRegion: 'Nashik',
    postalCode: '422101',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.9975,
    longitude: 73.7898,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
  },
}