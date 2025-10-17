import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import { getPageMetadata, generateStructuredData } from '@/lib/utils/seo';
import StarfieldBackground from '@/components/backgrounds/starfield/RootStarfield';

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
      <div className="relative">
        <StarfieldBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="pt-16">
            <Hero />
            <ProductShowcase />
          </main>
        </div>
      </div>
    </>
  );
}
