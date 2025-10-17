import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Brain,
  Calendar,
  Shield,
  Network,
  Sparkles,
  Users,
  Zap,
  Heart,
  BookOpen,
  Code,
  Globe,
  TrendingUp,
  Target,
  Layers,
} from 'lucide-react';
import { getPageMetadata, generateStructuredData } from '@/lib/utils/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const metadata: Metadata = getPageMetadata('quasera');

const coreAgentTiers = [
  {
    tier: 'Academic Intelligence',
    description: 'Autonomous agents that orchestrate your entire learning workflow',
    agents: [
      {
        name: 'Adaptive Schedule Orchestrator',
        description: 'Dynamically optimizes your study plan in real-time using AI planning and reinforcement learning',
        icon: Calendar,
        highlights: ['90%+ prediction accuracy', 'Real-time optimization', 'Multi-constraint solving'],
      },
      {
        name: 'Knowledge Graph Intelligence',
        description: 'Maps your understanding with concept dependencies, mastery tracking, and targeted interventions',
        icon: Network,
        highlights: ['Visual knowledge graphs', 'Decay modeling', 'Gap detection'],
      },
      {
        name: 'Academic Integrity Guardian',
        description: 'Ensures academic honesty with Socratic guidance and complete audit trails for transparency',
        icon: Shield,
        highlights: ['95%+ blocking rate', 'Complete audit logs', 'Policy-aware responses'],
      },
    ],
  },
  {
    tier: 'Learning Intelligence',
    description: 'AI agents that personalize and accelerate your learning journey',
    agents: [
      {
        name: 'Adaptive Quiz Generation',
        description: 'Creates personalized practice problems targeting your specific knowledge gaps and learning pace',
        icon: Target,
        highlights: ['Multi-format questions', 'Difficulty calibration', 'Spaced repetition'],
      },
      {
        name: 'Personalized Tutor Agent',
        description: 'One-on-one AI tutoring with Socratic method adapting to your learning style',
        icon: Sparkles,
        highlights: ['8 teaching strategies', 'Multi-modal explanations', 'Real-time adaptation'],
      },
      {
        name: 'Learning Science Engine',
        description: 'Applies evidence-based principles like spacing, interleaving, and retrieval practice',
        icon: Brain,
        highlights: ['Personalized forgetting curves', 'Optimal difficulty', 'Research-backed'],
      },
    ],
  },
  {
    tier: 'Wellness & Support',
    description: 'AI agents focused on your mental health and long-term success',
    agents: [
      {
        name: 'Mental Wellness Guardian',
        description: 'Monitors stress patterns and provides evidence-based interventions for student wellbeing',
        icon: Heart,
        highlights: ['Burnout prediction', 'Crisis detection', 'Wellness tracking'],
      },
      {
        name: 'Predictive Success Coach',
        description: 'Detects early warning signs and provides proactive interventions before struggles escalate',
        icon: TrendingUp,
        highlights: ['4-week early alerts', '80%+ accuracy', 'Personalized interventions'],
      },
      {
        name: 'Accessibility Support',
        description: 'Ensures universal accessibility with adaptive accommodations for all learners',
        icon: Users,
        highlights: ['ADHD support', 'Dyslexia modes', 'Screen reader optimized'],
      },
    ],
  },
];

const advancedModules = [
  {
    title: 'LMS Integration Hub',
    description: 'Seamlessly sync with Canvas, Moodle, Blackboard with automatic assignment import and grade synchronization',
    icon: Layers,
  },
  {
    title: 'Research Assistant Pro',
    description: 'Accelerate academic research with AI-powered literature reviews across 200M+ papers',
    icon: BookOpen,
  },
  {
    title: 'Code Lab Coach',
    description: 'Specialized programming support with test-driven development and debugging guidance',
    icon: Code,
  },
  {
    title: 'Global Learning Exchange',
    description: 'Connect with students worldwide for peer learning across 500+ partner universities',
    icon: Globe,
  },
  {
    title: 'Career Compass Agent',
    description: 'Bridge academic learning to career readiness with skill gap analysis and portfolio building',
    icon: Zap,
  },
];

const successMetrics = [
  { value: '40%', label: 'Faster concept mastery', description: 'vs. traditional methods' },
  { value: '60%', label: 'Better retention', description: 'After 3+ months' },
  { value: '80%', label: 'Course failure reduction', description: 'With early intervention' },
  { value: '30%', label: 'Stress reduction', description: 'Student-reported levels' },
];

export default function QuaseraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData('softwareApplication')),
        }}
      />
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="AI-Powered Learning Operating System"
              title={<span className="text-gradient">Quasera</span>}
              subtitle="A multi-agent AI learning platform with 30+ specialized agents working in harmony to maximize student success through personalized, adaptive, and evidence-based learning support."
            />
          </ScrollReveal>

          <StaggerReveal className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4" delay={0.2}>
            {successMetrics.map((metric) => (
              <StatHighlight
                key={metric.label}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </StaggerReveal>

          <ScrollReveal className="mt-24">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
              <h2 className="text-3xl font-bold text-starlight">
                More Than a Study Tracker
              </h2>
              <p className="mt-4 text-lg text-starlight/80">
                Quasera transforms from a simple study app into a comprehensive AI Learning Ecosystem.
                Each module represents a sophisticated AI subsystem that orchestrates specialized agents
                to provide personalized, adaptive support while maintaining academic integrity.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]">
                  <Brain className="h-8 w-8 text-nebula-purple transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-semibold text-starlight">Multi-Agent AI</h3>
                  <p className="mt-2 text-sm text-starlight/70">
                    30+ specialized AI agents working autonomously and collaboratively
                  </p>
                </div>
                <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-green/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(52,211,153,0.2)]">
                  <Zap className="h-8 w-8 text-aurora-green transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-semibold text-starlight">Real-Time Adaptation</h3>
                  <p className="mt-2 text-sm text-starlight/70">
                    Continuously monitors and adjusts to your learning patterns
                  </p>
                </div>
                <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stellar-blue/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(96,165,250,0.2)]">
                  <Shield className="h-8 w-8 text-stellar-blue transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 font-semibold text-starlight">Academic Integrity</h3>
                  <p className="mt-2 text-sm text-starlight/70">
                    Complete audit trails and policy-aware guidance
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {coreAgentTiers.map((tier) => (
            <div key={tier.tier} className="mt-24">
              <ScrollReveal>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-starlight">{tier.tier}</h2>
                  <p className="mt-2 text-lg text-starlight/70">{tier.description}</p>
                </div>
              </ScrollReveal>

              <StaggerReveal className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {tier.agents.map((agent) => (
                  <article
                    key={agent.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/0 to-nebula-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <agent.icon className="relative h-10 w-10 text-nebula-purple transition-all duration-500 group-hover:scale-110 group-hover:text-nebula-purple/90" aria-hidden="true" />
                    <h3 className="relative mt-6 text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                      {agent.name}
                    </h3>
                    <p className="relative mt-4 text-starlight/75 transition-colors duration-300 group-hover:text-starlight/85">{agent.description}</p>
                    <ul className="relative mt-6 space-y-2">
                      {agent.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-starlight/65 transition-colors duration-300 group-hover:text-starlight/75">
                          <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-nebula-purple transition-all duration-300 group-hover:scale-125 group-hover:bg-nebula-purple/90" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </StaggerReveal>
            </div>
          ))}

          <ScrollReveal className="mt-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-nebula-purple/10 to-transparent p-10 shadow-[0_40px_100px_rgba(99,102,241,0.15)]">
              <h2 className="text-3xl font-bold text-starlight">
                Additional Specialized Modules
              </h2>
              <p className="mt-4 text-lg text-starlight/80">
                Beyond core learning agents, Quasera includes specialized modules for research,
                programming, career development, and global collaboration.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {advancedModules.map((module) => (
                  <div
                    key={module.title}
                    className="group rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-stellar-blue/40 hover:bg-black/60 hover:shadow-[0_20px_50px_rgba(96,165,250,0.2)]"
                  >
                    <module.icon className="h-8 w-8 text-stellar-blue transition-all duration-300 group-hover:scale-110 group-hover:text-stellar-blue/90" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold text-starlight transition-colors duration-300 group-hover:text-white">{module.title}</h3>
                    <p className="mt-2 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">{module.description}</p>
                  </div>
                ))}
                <div className="group rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-aurora-green/40 hover:bg-black/60 hover:shadow-[0_20px_50px_rgba(52,211,153,0.2)]">
                  <Sparkles className="h-8 w-8 text-aurora-green transition-all duration-300 group-hover:scale-110 group-hover:text-aurora-green/90" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-starlight transition-colors duration-300 group-hover:text-white">And 20+ More</h3>
                  <p className="mt-2 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                    Including VR/AR labs, gamification, offline learning, neurodiversity support, and crisis response systems
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)] md:p-14">
            <SectionHeader
              align="left"
              eyebrow="Intelligent Architecture"
              title="How Quasera's AI Agents Work Together"
              subtitle="A sophisticated multi-agent system where specialized AI agents communicate, collaborate, and learn to optimize your entire learning experience."
              className="max-w-3xl"
            />
            <div className="mt-10 space-y-6 text-starlight/70">
              <p>
                At the heart of Quasera is an autonomous orchestration engine that coordinates 30+ specialized AI agents.
                Each agent has expertise in a specific domain - from scheduling and content processing to mental wellness and career guidance.
              </p>
              <p>
                Agents share a unified knowledge base built from your study materials, conversations, performance data, and learning patterns.
                They communicate through an event-driven architecture, allowing them to react to your actions and coordinate complex workflows automatically.
              </p>
              <p>
                The system continuously learns and improves. Every interaction generates feedback data that refines predictions,
                personalizes strategies, and identifies what works best for you. This creates a self-evolving learning platform
                that becomes more effective over time.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(148,163,255,0.25)]">
                <div className="text-4xl font-bold text-nebula-purple transition-all duration-300 group-hover:scale-105">30+</div>
                <div className="mt-2 text-sm font-medium text-starlight">Specialized AI Agents</div>
                <div className="mt-1 text-xs text-starlight/60">Working 24/7 on your behalf</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stellar-blue/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(96,165,250,0.25)]">
                <div className="text-4xl font-bold text-stellar-blue transition-all duration-300 group-hover:scale-105">99.9%</div>
                <div className="mt-2 text-sm font-medium text-starlight">System Uptime</div>
                <div className="mt-1 text-xs text-starlight/60">Enterprise-grade reliability</div>
              </div>
              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-green/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(52,211,153,0.25)]">
                <div className="text-4xl font-bold text-aurora-green transition-all duration-300 group-hover:scale-105">{'<1s'}</div>
                <div className="mt-2 text-sm font-medium text-starlight">Response Time</div>
                <div className="mt-1 text-xs text-starlight/60">Real-time AI assistance</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h2 className="text-3xl font-bold text-starlight">
              Academic Integrity Built In
            </h2>
            <p className="mt-4 text-lg text-starlight/80">
              Every AI interaction is designed to enhance learning while maintaining academic honesty.
              Quasera guides students toward understanding rather than providing direct answers.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(148,163,255,0.15)]">
                <h3 className="text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">Socratic Guidance</h3>
                <p className="text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                  AI automatically switches to Socratic mode when detecting direct answer requests,
                  guiding students to discover solutions through probing questions and hints.
                </p>
              </div>
              <div className="group space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stellar-blue/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(96,165,250,0.15)]">
                <h3 className="text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">Complete Transparency</h3>
                <p className="text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                  Immutable audit logs track all AI interactions with timestamps, prompts, responses,
                  and learning artifacts - providing full transparency to instructors.
                </p>
              </div>
              <div className="group space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-green/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(52,211,153,0.15)]">
                <h3 className="text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">Policy Awareness</h3>
                <p className="text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                  Configurable per assignment or course, the system respects institutional academic policies
                  and adapts assistance levels accordingly.
                </p>
              </div>
              <div className="group space-y-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(148,163,255,0.15)]">
                <h3 className="text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">Proof of Learning</h3>
                <p className="text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                  One-click exports provide complete learning evidence: sources consulted, hint tiers used,
                  time spent, and work samples for instructor review.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-24 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-nebula-purple/10 via-stellar-blue/5 to-transparent p-12 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)] backdrop-blur-xl md:flex-row md:text-left">
            <div className="max-w-2xl space-y-4">
              <h3 className="text-3xl font-bold text-starlight">
                Transform Education with AI
              </h3>
              <p className="text-lg text-starlight/80">
                Quasera combines cutting-edge AI technology with evidence-based learning science
                and deep empathy for the student experience. Every student gets personalized support
                at scale while maintaining human values of integrity, equity, and genuine learning.
              </p>
            </div>
            <div className="flex min-w-fit flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
              >
                Request Demo
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
              >
                Explore Solutions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
