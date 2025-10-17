import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Lightbulb, Rocket, Target } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('blog');

const upcomingTopics = [
  {
    title: 'Building Quasera: The Vision Behind 30+ AI Learning Agents',
    description: 'How we&apos;re architecting a multi-agent system that understands how you learn, adapts in real-time, and orchestrates your entire academic journey.',
    category: 'Product Development',
    icon: Rocket,
  },
  {
    title: 'The Science of Adaptive Learning: From Research to Reality',
    description: 'Exploring the cognitive science, AI research, and educational psychology that powers Quasera&apos;s learning intelligence.',
    category: 'Learning Science',
    icon: Lightbulb,
  },
  {
    title: 'Academic Integrity in the Age of AI',
    description: 'Why we built academic integrity into Quasera&apos;s core architecture, and how AI can enhance learning without enabling shortcuts.',
    category: 'Ed-Tech Insights',
    icon: Target,
  },
  {
    title: 'The Real Student Experience: Challenges & Solutions',
    description: 'Behind the scenes of building Quasera as a student developer: the problems I faced, the solutions I&apos;m creating, and lessons learned.',
    category: 'Founder Notes',
    icon: BookOpen,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Blog"
            title="Building the Future of AI-Powered Learning"
            subtitle="Follow our journey as we develop Quasera and explore the intersection of artificial intelligence, education, and student success. Written by Shifat Islam Santo, Founder & Developer."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
                <Rocket className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-starlight">Blog Coming Soon</h2>
                <p className="mt-3 text-lg text-starlight/70">
                  We&apos;re currently focused on building Quasera and preparing for early access launch.
                </p>
                <p className="mt-2 text-starlight/60">
                  Our blog will launch alongside the platform, featuring insights on AI-powered learning,
                  product development updates, and the future of education technology.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-starlight">Topics We&apos;ll Cover</h3>
              <p className="mt-2 text-starlight/70">
                Get ready for deep dives into the technology, science, and vision behind Quasera.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {upcomingTopics.map((topic) => {
                const IconComponent = topic.icon;
                return (
                  <div
                    key={topic.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_30px_80px_rgba(10,14,39,0.55)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/5 to-stellar-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-nebula-purple/10 transition-colors duration-300 group-hover:bg-nebula-purple/20">
                          <IconComponent className="h-6 w-6 text-nebula-purple" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block rounded-full bg-stellar-blue/10 px-3 py-1 text-xs font-medium text-stellar-blue">
                            {topic.category}
                          </span>
                          <h4 className="mt-3 text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-nebula-purple">
                            {topic.title}
                          </h4>
                          <p className="mt-2 text-sm text-starlight/70">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold text-starlight">Stay Updated</h3>
              <p className="mt-3 text-starlight/70">
                Be the first to know when we publish new articles about AI-powered learning,
                product updates, and early access opportunities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  disabled
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight placeholder-starlight/40 opacity-50 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20"
                />
                <button
                  type="button"
                  disabled
                  className="rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white opacity-50 transition-all duration-300"
                >
                  Coming Soon
                </button>
              </div>
              <p className="mt-4 text-xs text-starlight/50">
                Newsletter subscription will be available at launch
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-starlight">In the Meantime</h3>
            <p className="mt-3 text-starlight/70">
              Learn more about Quasera and join our early access waitlist
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/quasera"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-starlight transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/40 hover:bg-white/[0.08]"
              >
                Explore Quasera
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Join Waitlist
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
