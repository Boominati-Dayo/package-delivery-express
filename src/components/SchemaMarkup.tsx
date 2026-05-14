export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://pdex.com/#organization',
        'name': 'Package Delivery Express (PDEX)',
        'url': 'https://pdex.com',
        'logo': 'https://pdex.com/PDEXLogo.png',
        'description': 'Professional package delivery services across USA and international destinations. Specializing in domestic shipping, international shipping, pet transport, and valuable goods delivery since 2000.',
        'foundingDate': '2000',
        'slogan': 'Delivering Beyond Borders Since 2000',
        'knowsAbout': ['Package Delivery', 'Domestic Shipping', 'International Shipping', 'Pet Transport', 'Logistics'],
        'areaServed': 'Worldwide',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-267-223-9811',
          'contactType': 'customer service',
          'email': 'admin@packagedeliveryexpress.com',
          'availableLanguage': 'English'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://pdex.com/#website',
        'url': 'https://pdex.com',
        'name': 'Package Delivery Express (PDEX)',
        'publisher': { '@id': 'https://pdex.com/#organization' },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://pdex.com/track?tracking={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}