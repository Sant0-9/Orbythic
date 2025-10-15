'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

const products = [
  {
    name: 'Quasera',
    headline: 'Adaptive Learning Operating System',
    description:
      'Our flagship AI platform orchestrating mastery-based journeys, telemetry, and operations for modern education leaders.',
    status: 'Flagship · Scaling private beta',
    href: '/quasera',
    actionLabel: 'Explore Quasera',
  },
  {
    name: 'MemVault',
    headline: 'Personal Memory Architecture',
    description:
      'Augment your teams with durable memory stores, semantic recall, and granular control over what AI retains and forgets.',
    status: 'Private alpha · Request access',
    href: '/contact?product=memvault',
    actionLabel: 'Request MemVault access',
  },
  {
    name: 'OrbitQR',
    headline: 'Instant QR + Smart Routing',
    description:
      'Generate branded QR codes with analytics, geofenced routing, and campaign timelines built for product launches.',
    status: 'Builder preview',
    href: '/contact?product=orbitqr',
    actionLabel: 'Join OrbitQR preview',
  },
  {
    name: 'JSON Meridian',
    headline: 'JSON → Mermaid Diagramming',
    description:
      'Visualize complex payloads and architectures instantly with shareable Mermaid graphs, version history, and embeds.',
    status: 'Public beta soon',
    href: '/contact?product=json-meridian',
    actionLabel: 'Get notified',
  },
];

export default function ProductShowcase() {
  return (
    <section id="product-suite" className="relative isolate overflow-hidden bg-[#000104]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/60 via-black/80 to-[#000104]/95" />
      <div className="pointer-events-none absolute inset-x-[-20%] bottom-[-40%] h-[80%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,186,109,0.15),rgba(0,0,0,0.1)_70%,transparent_100%)] opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_50%,#000104_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2 lg:sticky lg:top-32">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-starlight/40">
              Orbythic Suite
            </span>
            <h2 className="text-3xl font-semibold text-starlight sm:text-4xl">
              One studio. Many constellations.
            </h2>
            <p className="text-lg text-starlight/70">
              We build focused tools that share a common design language, data posture, and accessibility standard.
              Each product experiments boldly on its own mission, while Quasera anchors the wider learning ecosystem.
            </p>
            <p className="text-starlight/60">
              Toggle between live pilots, utility drops, and upcoming releases. The left column stays with you as you
              explore, while new cards animate into view—a small nod to the scroll-triggered journeys we craft inside
              our apps.
            </p>
          </div>
          <div className="space-y-10 lg:col-span-3">
            {products.map((product) => (
              <ScrollReveal
                key={product.name}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.018] p-8 transition-transform duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cosmic-gradient/80 text-base font-semibold text-white shadow-lg shadow-nebula-purple/20">
                      {product.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-starlight">{product.name}</h3>
                      <p className="text-sm text-starlight/60">{product.status}</p>
                    </div>
                  </div>
                  <Link
                    href={product.href}
                    className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-starlight/70 transition-all duration-300 hover:border-nebula-purple/40 hover:text-starlight lg:inline-flex"
                  >
                    {product.actionLabel}
                  </Link>
                </div>
                <p className="mt-6 text-lg text-starlight/80">{product.headline}</p>
                <p className="mt-3 text-base text-starlight/65">{product.description}</p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-nebula-purple transition-colors duration-300 hover:text-starlight lg:hidden"
                >
                  {product.actionLabel}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
