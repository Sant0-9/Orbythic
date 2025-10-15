export const siteUrl = 'https://orbythic.com';
export const logoUrl = `${siteUrl}/orbythic-logo.svg`;

export const defaultSEO = {
  titleTemplate: '%s | Orbythic',
  defaultTitle: 'Orbythic - Transform Education with AI',
  description: 'Discover Quasera by Orbythic, the next-generation educational platform that adapts to how students learn. Join 10,000+ learners worldwide.',
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: `${siteUrl}/`,
    siteName: 'Orbythic',
    title: 'Orbythic - Transform Education with AI',
    description: 'Discover Quasera by Orbythic, the next-generation educational platform that adapts to how students learn.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Orbythic - Transform Education with AI',
      },
    ],
  },
  twitter: {
    handle: '@orbythic',
    site: '@orbythic',
    cardType: 'summary_large_image' as const,
  },
};

export const pageSEO = {
  home: {
    path: '/',
    title: 'Orbythic - Transform Education with AI-Powered Learning',
    description: 'Discover Quasera by Orbythic, the next-generation educational platform that adapts to how students learn. Join 10,000+ learners worldwide.',
    keywords: 'ed-tech, AI education, adaptive learning, Quasera, Orbythic, educational technology',
  },
  quasera: {
    path: '/quasera',
    title: 'Quasera - Adaptive Learning Platform by Orbythic',
    description: 'Quasera uses AI to personalize education for every student. Features include adaptive assessments, real-time progress tracking, and collaborative tools.',
    keywords: 'Quasera, adaptive learning, AI education, personalized learning, student platform',
  },
  solutions: {
    path: '/solutions',
    title: 'Educational Solutions - Students, Teams, Bootcamps, Research',
    description: 'Comprehensive educational solutions for students, study teams, bootcamps, and research labs. Powered by Orbythic\'s AI technology.',
    keywords: 'educational solutions, student tools, study teams, bootcamp platform, research labs',
  },
  pricing: {
    path: '/pricing',
    title: 'Pricing Plans - Orbythic Educational Platform',
    description: 'Flexible pricing plans for individuals, teams, and institutions. Start your educational transformation with Orbythic.',
    keywords: 'pricing, plans, educational platform, subscription, Orbythic cost',
  },
  docs: {
    path: '/docs',
    title: 'Documentation - Orbythic Help Center',
    description: 'Complete documentation and guides for using Orbythic and Quasera. Get started, learn features, and maximize your learning potential.',
    keywords: 'documentation, help center, guides, tutorials, Orbythic support',
  },
  blog: {
    path: '/blog',
    title: 'Blog - Ed-Tech Insights and Updates | Orbythic',
    description: 'Stay updated with the latest in educational technology, AI learning insights, and Orbythic product updates.',
    keywords: 'ed-tech blog, AI learning, educational technology, Orbythic updates',
  },
  about: {
    path: '/about',
    title: 'About Orbythic - Transforming Education Through AI',
    description: 'Learn about Orbythic\'s mission to revolutionize education with AI-powered learning solutions. Meet our team and discover our vision.',
    keywords: 'about Orbythic, company mission, AI education, team, vision',
  },
  contact: {
    path: '/contact',
    title: 'Contact Orbythic - Get in Touch',
    description: 'Get in touch with the Orbythic team. We\'re here to help with questions, partnerships, and support.',
    keywords: 'contact Orbythic, support, partnerships, help, get in touch',
  },
};

export const structuredData = {
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
