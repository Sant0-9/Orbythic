import Link from 'next/link';
import type { Metadata } from 'next';
import { Brain, Code, GraduationCap, Lightbulb, Rocket, ShieldCheck, Sparkles, Target } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = getPageMetadata('about');

const values = [
  {
    title: 'Student-First Design',
    description:
      'Every feature is built from a student perspective, addressing real pain points in learning, stress management, and academic success. We understand the challenges because we live them.',
    icon: GraduationCap,
  },
  {
    title: 'Academic Integrity',
    description:
      'AI should enhance learning, not replace it. Quasera is designed with complete transparency, Socratic guidance, and audit trails to ensure genuine learning and academic honesty.',
    icon: ShieldCheck,
  },
  {
    title: 'Evidence-Based Innovation',
    description:
      'Every AI agent and learning feature is grounded in cognitive science research. We apply proven principles like spaced repetition, retrieval practice, and adaptive difficulty.',
    icon: Brain,
  },
  {
    title: 'Accessibility for All',
    description:
      'Learning should be accessible to everyone. Quasera supports diverse learning needs with ADHD accommodations, dyslexia modes, and WCAG compliance built in from day one.',
    icon: Sparkles,
  },
];

const journey = [
  {
    phase: 'The Problem',
    title: 'Struggling Students Need Better Tools',
    description:
      'Traditional study apps focus on organization, not actual learning. Students face fragmented tools, overwhelming course loads, and lack personalized support that adapts to their unique needs.',
  },
  {
    phase: 'The Vision',
    title: 'AI-Powered Learning Agents',
    description:
      'What if 30+ specialized AI agents could work together to optimize every aspect of learning - from scheduling and concept mastery to mental wellness and academic integrity?',
  },
  {
    phase: 'The Solution',
    title: 'Quasera is Born',
    description:
      'A comprehensive AI learning platform that combines adaptive scheduling, knowledge graphs, personalized tutoring, and mental wellness support in one intelligent system.',
  },
  {
    phase: 'The Future',
    title: 'Transforming Education at Scale',
    description:
      'Expanding from individual students to institutional partnerships, bringing AI-powered learning to universities and schools while maintaining our commitment to academic integrity.',
  },
];

const features = [
  {
    title: '30+ AI Learning Agents',
    description: 'Specialized agents working together to optimize your entire learning journey',
    icon: Brain,
  },
  {
    title: 'Evidence-Based Methods',
    description: 'Built on cognitive science research and proven learning principles',
    icon: Lightbulb,
  },
  {
    title: 'Academic Transparency',
    description: 'Complete audit trails and Socratic guidance ensure honest learning',
    icon: ShieldCheck,
  },
  {
    title: 'Rapid Innovation',
    description: 'Student-led development means features that actually solve real problems',
    icon: Rocket,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="About Orbythic"
            title="Building the Future of AI-Powered Learning"
            subtitle="Orbythic is on a mission to transform education with intelligent, student-centered technology that enhances learning while maintaining academic integrity and accessibility for all."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]">
              <Target className="h-10 w-10 text-nebula-purple" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Mission</h3>
              <p className="mt-4 text-starlight/75">
                To make world-class AI-powered learning accessible to every student, combining cutting-edge technology with evidence-based learning science.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]">
              <Rocket className="h-10 w-10 text-nebula-purple" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Vision</h3>
              <p className="mt-4 text-starlight/75">
                A world where every student has personalized AI agents working 24/7 to optimize their learning, reduce stress, and achieve academic success.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]">
              <Code className="h-10 w-10 text-nebula-purple" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Approach</h3>
              <p className="mt-4 text-starlight/75">
                Student-led development focused on solving real problems with innovative AI technology, rigorous academic standards, and rapid iteration.
              </p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h2 className="text-3xl font-bold text-starlight">Our Journey</h2>
            <p className="mt-2 text-lg text-starlight/80">
              From student frustration to AI-powered solution
            </p>
            <div className="mt-10 space-y-6">
              {journey.map((item, index) => (
                <div
                  key={item.phase}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-nebula-purple/20 text-lg font-bold text-nebula-purple transition-all duration-300 group-hover:scale-110 group-hover:bg-nebula-purple/30">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold uppercase tracking-wide text-nebula-purple">
                        {item.phase}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h2 className="text-3xl font-bold text-starlight">Our Values</h2>
            <p className="mt-2 text-lg text-starlight/80">
              Principles that guide every decision we make
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]"
                >
                  <value.icon className="h-10 w-10 text-nebula-purple transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <h4 className="mt-6 text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">{value.title}</h4>
                  <p className="mt-4 text-starlight/75 transition-colors duration-300 group-hover:text-starlight/85">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-starlight">What Makes Us Different</h2>
              <p className="mt-2 text-lg text-starlight/80">
                Student-led innovation meets cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
                >
                  <feature.icon className="h-8 w-8 text-nebula-purple transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-starlight transition-colors duration-300 group-hover:text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatHighlight
              value="30+"
              label="AI Learning Agents"
              description="Specialized agents working together to optimize learning"
            />
            <StatHighlight
              value="40%"
              label="Faster Mastery"
              description="Students learn concepts 40% faster with AI guidance"
            />
            <StatHighlight
              value="24/7"
              label="Always Available"
              description="AI agents work around the clock to support your learning"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-starlight">Leadership</h2>
              <p className="mt-4 text-lg text-starlight/80">
                Built by students, for students
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-nebula-purple/20 text-3xl font-bold text-nebula-purple">
                    SS
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-starlight">Shifat Islam Santo</h3>
                    <p className="mt-1 text-sm uppercase tracking-wide text-nebula-purple">Founder & CEO</p>
                    <p className="mt-4 text-starlight/75">
                      Computer Science student at The University of Texas at Dallas, currently in junior year.
                      Building Quasera to solve the real challenges students face with learning, time management, and academic success.
                    </p>
                    <p className="mt-4 text-sm text-starlight/60">
                      Passionate about AI, education technology, and creating tools that make a meaningful difference in students&apos; lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-nebula-purple/10 via-stellar-blue/5 to-transparent px-8 py-12 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)] backdrop-blur-xl">
            <div className="mx-auto max-w-2xl space-y-4">
              <h3 className="text-3xl font-bold text-starlight">
                Join Us on This Journey
              </h3>
              <p className="text-lg text-starlight/80">
                Whether you&apos;re a student, educator, or institution, we&apos;d love to hear from you.
                Be part of transforming education with AI-powered learning.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
              >
                Get in Touch
              </Link>
              <Link
                href="/quasera"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
              >
                Explore Quasera
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
