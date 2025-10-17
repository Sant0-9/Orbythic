import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BookOpen,
  Brain,
  Calendar,
  Code,
  FileText,
  GraduationCap,
  Heart,
  Lightbulb,
  Lock,
  Network,
  Rocket,
  Search,
  Settings,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getPageMetadata } from '@/lib/utils/seo';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = getPageMetadata('docs');

const quickStartGuides = [
  {
    title: 'Getting Started with Quasera',
    description: 'Set up your account, understand your AI learning agents, and take your first steps toward personalized learning.',
    icon: Rocket,
    href: '/docs/getting-started',
    time: '5 min',
    status: 'Available at Launch',
  },
  {
    title: 'Understanding Your 30+ AI Agents',
    description: 'Learn how each specialized AI agent works together to optimize your learning journey and academic success.',
    icon: Brain,
    href: '/docs/ai-agents',
    time: '10 min',
    status: 'Available at Launch',
  },
  {
    title: 'Using the Adaptive Schedule Orchestrator',
    description: 'Master your time with AI-powered scheduling that adapts to your learning pace and predicts optimal study windows.',
    icon: Calendar,
    href: '/docs/schedule-orchestrator',
    time: '8 min',
    status: 'Available at Launch',
  },
  {
    title: 'Academic Integrity & Transparency',
    description: 'Understand how Quasera maintains academic honesty with Socratic guidance and complete audit trails.',
    icon: Shield,
    href: '/docs/academic-integrity',
    time: '6 min',
    status: 'Available at Launch',
  },
];

const documentationSections = [
  {
    title: 'Student Guides',
    description: 'Complete documentation for students using Quasera',
    icon: GraduationCap,
    links: [
      { name: 'Platform Overview', href: '/docs/student/overview' },
      { name: 'AI Learning Agents Reference', href: '/docs/student/agents' },
      { name: 'Adaptive Study Tools', href: '/docs/student/study-tools' },
      { name: 'Knowledge Graph Visualization', href: '/docs/student/knowledge-graph' },
      { name: 'Mental Wellness Features', href: '/docs/student/wellness' },
      { name: 'Research Assistant Pro', href: '/docs/student/research' },
    ],
  },
  {
    title: 'AI Agent Reference',
    description: 'Detailed guides for each of the 30+ specialized AI agents',
    icon: Brain,
    links: [
      { name: 'Adaptive Schedule Orchestrator', href: '/docs/agents/schedule-orchestrator' },
      { name: 'Knowledge Graph Intelligence', href: '/docs/agents/knowledge-graph' },
      { name: 'Academic Integrity Guardian', href: '/docs/agents/integrity-guardian' },
      { name: 'Mental Wellness Guardian', href: '/docs/agents/wellness-guardian' },
      { name: 'Personalized Tutor Agent', href: '/docs/agents/tutor' },
      { name: 'Predictive Success Coach', href: '/docs/agents/success-coach' },
    ],
  },
  {
    title: 'Learning Science',
    description: 'Understand the evidence-based principles powering Quasera',
    icon: Lightbulb,
    links: [
      { name: 'Spaced Repetition & Forgetting Curves', href: '/docs/science/spaced-repetition' },
      { name: 'Knowledge Graph Theory', href: '/docs/science/knowledge-graphs' },
      { name: 'Cognitive Load Optimization', href: '/docs/science/cognitive-load' },
      { name: 'Retrieval Practice Methods', href: '/docs/science/retrieval-practice' },
      { name: 'Adaptive Learning Algorithms', href: '/docs/science/adaptive-algorithms' },
    ],
  },
  {
    title: 'Academic Integrity',
    description: 'How Quasera maintains learning transparency and honesty',
    icon: Shield,
    links: [
      { name: 'Socratic Guidance System', href: '/docs/integrity/socratic-guidance' },
      { name: 'Audit Trails & Transparency', href: '/docs/integrity/audit-trails' },
      { name: 'Policy Configuration', href: '/docs/integrity/policy-config' },
      { name: 'Learning Evidence Exports', href: '/docs/integrity/evidence-exports' },
      { name: 'Instructor Dashboards', href: '/docs/integrity/instructor-tools' },
    ],
  },
  {
    title: 'For Institutions',
    description: 'Deploy and manage Quasera at institutional scale',
    icon: Users,
    links: [
      { name: 'Institution Setup Guide', href: '/docs/institution/setup' },
      { name: 'LMS Integration (Canvas, Moodle, Blackboard)', href: '/docs/institution/lms' },
      { name: 'Faculty Dashboards & Analytics', href: '/docs/institution/faculty' },
      { name: 'Student Success Metrics', href: '/docs/institution/metrics' },
      { name: 'WCAG Accessibility Compliance', href: '/docs/institution/accessibility' },
    ],
  },
  {
    title: 'API & Integrations',
    description: 'Technical documentation for developers and IT teams',
    icon: Code,
    links: [
      { name: 'REST API Reference', href: '/docs/api/reference' },
      { name: 'Authentication & SSO', href: '/docs/api/authentication' },
      { name: 'Webhooks & Events', href: '/docs/api/webhooks' },
      { name: 'Data Export API', href: '/docs/api/exports' },
      { name: 'Custom Integrations', href: '/docs/api/custom' },
    ],
  },
];

const popularTopics = [
  'How does the Knowledge Graph track my progress?',
  'Using the Mental Wellness Guardian effectively',
  'Understanding academic integrity features',
  'Connecting with Research Assistant Pro',
  'Optimizing study schedules with AI',
  'Exporting learning evidence for instructors',
];

const aiAgentCategories = [
  {
    title: 'Academic Intelligence',
    description: 'Agents that orchestrate your learning workflow',
    icon: Brain,
    count: '3 agents',
    color: 'nebula-purple',
  },
  {
    title: 'Learning Intelligence',
    description: 'Personalize and accelerate your learning',
    icon: Target,
    count: '8 agents',
    color: 'stellar-blue',
  },
  {
    title: 'Wellness & Support',
    description: 'Mental health and long-term success',
    icon: Heart,
    count: '5 agents',
    color: 'aurora-green',
  },
  {
    title: 'Specialized Tools',
    description: 'Research, code, career, and more',
    icon: Zap,
    count: '15+ agents',
    color: 'cosmic-cyan',
  },
];

export default function DocsPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Documentation"
            title="Your Complete Guide to AI-Powered Learning"
            subtitle="Comprehensive documentation for students, educators, and institutions. Learn how to harness the power of 30+ specialized AI agents to transform your learning experience."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-nebula-purple/30 bg-gradient-to-br from-nebula-purple/10 to-transparent p-8 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)]">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-nebula-purple/20 px-4 py-2 text-sm font-semibold text-nebula-purple">
                <Sparkles className="h-4 w-4" />
                Early Access Documentation
              </div>
              <h2 className="mt-6 text-3xl font-bold text-starlight">
                Comprehensive Documentation Coming at Launch
              </h2>
              <p className="mt-4 text-lg text-starlight/80">
                We&apos;re building extensive documentation, video tutorials, and interactive guides for every feature.
                Early access members will get exclusive early documentation access and direct support from our team.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
                >
                  Join Early Access
                </Link>
                <Link
                  href="/quasera"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06]"
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)] md:p-14">
            <div className="flex items-center gap-3">
              <Search className="h-6 w-6 text-nebula-purple" />
              <h2 className="text-2xl font-semibold text-starlight">Documentation Search</h2>
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                placeholder="Search for AI agents, features, guides, or integrations..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-starlight placeholder-starlight/40 transition-all duration-300 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20"
                disabled
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-starlight/40">
                Available at launch
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm text-starlight/60">Popular topics:</span>
              {popularTopics.slice(0, 3).map((topic) => (
                <button
                  key={topic}
                  disabled
                  className="cursor-not-allowed rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-starlight/50"
                >
                  {topic}
                </button>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-starlight">Quick Start Guides</h2>
              <p className="mt-3 text-lg text-starlight/70">
                Essential guides to get you started with Quasera&apos;s AI-powered learning platform
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickStartGuides.map((guide) => (
                <article
                  key={guide.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]"
                >
                  <guide.icon className="h-10 w-10 text-nebula-purple transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                    {guide.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-starlight/60">{guide.time} read</span>
                    <span className="rounded-full bg-nebula-purple/10 px-2 py-1 text-xs font-medium text-nebula-purple">
                      {guide.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-starlight">AI Agent Categories</h2>
              <p className="mt-3 text-lg text-starlight/70">
                Explore Quasera&apos;s 30+ specialized AI agents organized by learning domain
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {aiAgentCategories.map((category) => (
                <article
                  key={category.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]"
                >
                  <category.icon className="h-10 w-10 text-nebula-purple transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                    {category.description}
                  </p>
                  <div className="mt-4 inline-flex items-center rounded-full bg-nebula-purple/10 px-3 py-1 text-xs font-medium text-nebula-purple">
                    {category.count}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {documentationSections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-nebula-purple/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-3">
                  <section.icon className="h-8 w-8 text-nebula-purple" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-starlight">{section.title}</h3>
                </div>
                <p className="mt-3 text-sm text-starlight/70">{section.description}</p>
                <ul className="mt-6 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-starlight/60 transition-all duration-300">
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-starlight/40" aria-hidden="true" />
                          {link.name}
                        </span>
                        <Lock className="h-3 w-3 text-starlight/40" aria-hidden="true" />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-nebula-purple/20 bg-nebula-purple/5 p-4 text-center">
                  <p className="text-sm text-nebula-purple">Available at Launch</p>
                </div>
              </article>
            ))}
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-nebula-purple" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-starlight">Early Access Support</h3>
                </div>
                <p className="text-starlight/70">
                  As an early access member, you&apos;ll receive white-glove support directly from our founding team.
                  We&apos;re here to help you succeed with personalized onboarding and ongoing guidance.
                </p>
                <ul className="space-y-3 text-starlight/65">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                    <span>Direct access to product team and engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                    <span>Priority documentation and video tutorial access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                    <span>Live onboarding sessions and Q&A workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                    <span>Dedicated Slack channel for instant support</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Settings className="h-8 w-8 text-nebula-purple" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-starlight">For Institutions</h3>
                </div>
                <p className="text-starlight/70">
                  Institutional partners receive comprehensive implementation support, including technical integration assistance,
                  faculty training programs, and custom documentation tailored to your specific needs.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight">
                    <span>Implementation Guides</span>
                    <span className="text-xs text-nebula-purple">Coming Soon</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight">
                    <span>Faculty Training Resources</span>
                    <span className="text-xs text-nebula-purple">Coming Soon</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight">
                    <span>LMS Integration Docs</span>
                    <span className="text-xs text-nebula-purple">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h3 className="text-3xl font-bold text-starlight">What Documentation Will Include</h3>
            <p className="mt-2 text-lg text-starlight/80">
              At launch, you&apos;ll have access to comprehensive, searchable documentation covering every aspect of Quasera
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <BookOpen className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">Step-by-Step Guides</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Detailed tutorials with screenshots and examples for every feature
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Code className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">API Documentation</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Complete REST API reference with code examples in multiple languages
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Sparkles className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">Video Tutorials</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Watch and learn with guided video walkthroughs for visual learners
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Network className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">Integration Guides</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Connect Quasera with your LMS, SIS, and other education tools
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Lightbulb className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">Best Practices</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Learn optimal strategies backed by learning science research
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Target className="h-8 w-8 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold text-starlight">Use Case Examples</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Real-world scenarios showing how to maximize your learning outcomes
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="flex flex-col gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-nebula-purple/10 via-stellar-blue/5 to-transparent px-8 py-12 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)] backdrop-blur-xl">
            <div className="mx-auto max-w-2xl space-y-4">
              <h3 className="text-3xl font-bold text-starlight">
                Get Early Access to Documentation
              </h3>
              <p className="text-lg text-starlight/80">
                Join our early access program and be among the first to receive comprehensive documentation,
                video tutorials, and personalized onboarding support.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
              >
                Join Early Access Waitlist
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
              >
                Explore Solutions
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
