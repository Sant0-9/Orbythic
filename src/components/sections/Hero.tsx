'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StatHighlight from '@/components/ui/StatHighlight';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 text-starlight"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-balance text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
            >
              Design the Next
              <br />
              <span className="text-gradient drop-shadow-[0_0_18px_rgba(99,102,241,0.45)]">Orbythic Product Galaxy</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-starlight/80 sm:text-xl"
            >
              From Quasera&apos;s adaptive learning OS to MemVault, our JSON Mermaid explorer, and the OrbitQR generator, Orbythic is crafting cosmic-grade apps for ambitious teams. Explore the constellation, championed by Quasera and powered by experimentation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="#product-suite"
                className="group relative inline-flex items-center space-x-2 rounded-lg bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-nebula-purple/25"
              >
                <span>Explore the Suite</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quasera"
                className="inline-flex items-center space-x-2 rounded-lg border border-white/15 px-8 py-4 text-lg font-semibold text-starlight/80 transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/5 hover:text-starlight"
              >
                <span>Meet Quasera</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-3"
            >
              <StatHighlight value="4+" label="Products in orbit" description="Learning, developer tooling, memory systems, and no-code utilities." />
              <StatHighlight value="95%" label="Learning mastery lift" description="Measured across Quasera pilots using adaptive pathways." />
              <StatHighlight value="24/7" label="Cosmic guidance" description="Always-on mentorship and support across the Orbythic suite." />
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
