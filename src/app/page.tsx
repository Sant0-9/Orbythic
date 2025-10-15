import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import { getPageMetadata, generateStructuredData } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('home');

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData('organization')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData('website')),
        }}
      />
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  );
}
