import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://orbythic.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/quasera', '/solutions', '/pricing', '/docs', '/blog', '/about', '/contact'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
