'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/cosmic.module.css';
import StatHighlight from '@/components/ui/StatHighlight';
import AmbientGlow from '@/components/animations/AmbientGlow';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000106]">
      <AmbientGlow />

      <div className={styles.heroBackground} />
      <div className={styles.heroGrid} />
      <div className={styles.heroSpotlight} />
      <div className={styles.heroWave} />
      <div className={styles.heroCaustics} />
      <div className={styles.heroRays} />
      <div className={styles.heroNoise} />
      <div className={styles.heroAccent} />
      <div className={styles.heroShadow} />
      <div className={styles.heroBlend} />

      <div className="relative z-10 flex min-h-[92vh] items-center py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-nebula-purple" />
              <span className="text-sm text-starlight/80">Transforming Education Across the Cosmos</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl font-bold leading-tight text-starlight sm:text-5xl lg:text-7xl"
            >
              Design the Next
              <br />
              <span className="text-gradient">Orbythic Product Galaxy</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-starlight/80 sm:text-2xl"
            >
              From Quasera&apos;s adaptive learning OS to MemVault, our JSON Mermaid explorer, and the OrbitQR generator, Orbythic is crafting cosmic-grade apps for ambitious teams. Explore the constellation, championed by Quasera and powered by experimentation.
            </motion.p>

            {/* Search input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                  <Search className="h-5 w-5 text-starlight/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search for educational content..."
                  className="w-full rounded-xl border border-white/5 bg-transparent px-12 py-4 text-base text-starlight placeholder-starlight/40 outline-none transition focus:border-nebula-purple/40 focus:ring-2 focus:ring-nebula-purple/20 sm:text-lg"
                />
              </div>
            </motion.div>

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
