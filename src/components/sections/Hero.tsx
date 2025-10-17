'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-nebula-purple/20 bg-nebula-purple/5 px-4 py-2 text-sm font-medium text-nebula-purple backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Building the Future of AI-Powered Learning</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-balance text-5xl font-bold leading-tight text-starlight sm:text-6xl lg:text-7xl"
            >
              Your AI Academic
              <br />
              <span className="text-gradient drop-shadow-[0_0_24px_rgba(99,102,241,0.5)]">
                Operating System
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-starlight/70 sm:text-2xl"
            >
              Quasera transforms how you learn with intelligent AI agents that understand your courses, optimize your schedule, and adapt to how you think.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-6 text-sm text-starlight/60"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-nebula-purple" />
                <span>Personalized AI Tutoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-stellar-blue" />
                <span>Adaptive Study Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cosmic-pink" />
                <span>Multi-Agent Intelligence</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/pricing"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-nebula-purple/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-nebula-purple/40"
              >
                <span>Join Early Access</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quasera"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 text-lg font-semibold text-starlight backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/40 hover:bg-white/[0.05]"
              >
                <span>Learn More</span>
              </Link>
            </motion.div>

            {/* Social Proof / Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-starlight/50">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-nebula-purple/40 to-stellar-blue/40"
                    />
                  ))}
                </div>
                <span>Join students on the early access waitlist</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Grid Below Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/30 hover:bg-white/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-nebula-purple/10 p-3">
                  <Brain className="h-6 w-6 text-nebula-purple" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-starlight">
                  Understands How You Learn
                </h3>
                <p className="text-sm leading-relaxed text-starlight/60">
                  AI agents build a persistent model of your knowledge, tracking what you know and how you learn best across all your courses.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-stellar-blue/30 hover:bg-white/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-stellar-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-stellar-blue/10 p-3">
                  <Zap className="h-6 w-6 text-stellar-blue" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-starlight">
                  Proactive Study Support
                </h3>
                <p className="text-sm leading-relaxed text-starlight/60">
                  Get intelligent schedule optimization, automatic review sessions, and early warnings before you fall behind.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cosmic-pink/30 hover:bg-white/[0.04]">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-pink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cosmic-pink/10 p-3">
                  <Sparkles className="h-6 w-6 text-cosmic-pink" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-starlight">
                  Academic Integrity First
                </h3>
                <p className="text-sm leading-relaxed text-starlight/60">
                  Built to guide learning, not provide shortcuts. Socratic questioning and explanations that develop genuine understanding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
