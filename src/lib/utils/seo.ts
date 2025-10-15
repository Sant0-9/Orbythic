import { Metadata } from 'next';
import { defaultSEO, pageSEO, siteUrl } from '@/lib/constants/seo';

export function getPageMetadata(page: keyof typeof pageSEO, overrides?: Partial<Metadata>): Metadata {
  const pageData = pageSEO[page];
  const canonical = new URL(pageData.path, siteUrl).toString();

  const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      url: canonical,
      title: pageData.title,
      description: pageData.description,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: pageData.title,
      description: pageData.description,
    },
  };

  return {
    ...metadata,
    ...overrides,
  };
}

export function generateStructuredData(type: 'organization' | 'website' | 'softwareApplication') {
  const structuredData = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Orbythic',
      url: 'https://orbythic.com',
      logo: 'https://orbythic.com/logo.png',
      description: 'Transform education with AI-powered learning solutions',
      foundingDate: '2024',
      sameAs: [
        'https://twitter.com/orbythic',
        'https://linkedin.com/company/orbythic',
        'https://github.com/orbythic',
      ],
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://orbythic.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Orbythic',
      url: 'https://orbythic.com',
      description: 'Transform education with AI-powered learning solutions',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://orbythic.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Quasera',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      description: 'AI-powered adaptive learning platform for personalized education',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Orbythic',
      },
    },
  };

  return structuredData[type];
}
