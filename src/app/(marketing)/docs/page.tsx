import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BookOpen,
  ChevronRight,
  Code,
  FileText,
  GraduationCap,
  LayoutGrid,
  Lightbulb,
  Puzzle,
  Rocket,
  Search,
  Settings,
  Users,
  Zap,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('docs');

const quickStartGuides = [
  {
    title: 'Getting Started with Quasera',
    description: 'Set up your first workspace, invite team members, and launch your initial adaptive learning journey.',
    icon: Rocket,
    href: '/docs/getting-started',
    time: '10 min',
  },
  {
    title: 'Creating Your First Learning Path',
    description: 'Design modular missions, add assessments, and configure adaptive logic to personalize learner experiences.',
    icon: LayoutGrid,
    href: '/docs/learning-paths',
    time: '15 min',
  },
  {
    title: 'Inviting Learners and Instructors',
    description: 'Manage user roles, configure permissions, and onboard cohorts with automated welcome workflows.',
    icon: Users,
    href: '/docs/user-management',
    time: '8 min',
  },
  {
    title: 'Understanding Analytics Dashboards',
    description: 'Navigate program health metrics, learner risk indicators, and content performance insights.',
    icon: Zap,
    href: '/docs/analytics',
    time: '12 min',
  },
];

const documentationSections = [
  {
    title: 'Product Documentation',
    description: 'Comprehensive guides for using Quasera features and workflows',
    icon: BookOpen,
    links: [
      { name: 'Platform Overview', href: '/docs/platform' },
      { name: 'Adaptive Learning Engine', href: '/docs/adaptive-engine' },
      { name: 'Assessment Builder', href: '/docs/assessments' },
      { name: 'Analytics and Reporting', href: '/docs/analytics-reporting' },
      { name: 'Workspace Management', href: '/docs/workspaces' },
    ],
  },
  {
    title: 'API Reference',
    description: 'Technical documentation for integrating with Quasera',
    icon: Code,
    links: [
      { name: 'Authentication', href: '/docs/api/authentication' },
      { name: 'Learner Data API', href: '/docs/api/learners' },
      { name: 'Content Management API', href: '/docs/api/content' },
      { name: 'Analytics API', href: '/docs/api/analytics' },
      { name: 'Webhooks', href: '/docs/api/webhooks' },
    ],
  },
  {
    title: 'Integration Guides',
    description: 'Connect Quasera with your existing tools and systems',
    icon: Puzzle,
    links: [
      { name: 'LMS Integrations (Canvas, Moodle)', href: '/docs/integrations/lms' },
      { name: 'SSO Configuration (SAML, OIDC)', href: '/docs/integrations/sso' },
      { name: 'Slack and Teams Setup', href: '/docs/integrations/messaging' },
      { name: 'Data Warehouse Exports', href: '/docs/integrations/data' },
      { name: 'Custom SIS Connectors', href: '/docs/integrations/sis' },
    ],
  },
  {
    title: 'Best Practices',
    description: 'Learn from successful Quasera implementations',
    icon: Lightbulb,
    links: [
      { name: 'Designing Adaptive Pathways', href: '/docs/best-practices/pathways' },
      { name: 'Content Accessibility Standards', href: '/docs/best-practices/accessibility' },
      { name: 'Program Health Monitoring', href: '/docs/best-practices/monitoring' },
      { name: 'Faculty Onboarding Strategies', href: '/docs/best-practices/faculty' },
      { name: 'Learner Engagement Tactics', href: '/docs/best-practices/engagement' },
    ],
  },
  {
    title: 'Administrator Guides',
    description: 'Manage security, compliance, and operations',
    icon: Settings,
    links: [
      { name: 'User Roles and Permissions', href: '/docs/admin/permissions' },
      { name: 'Security and Compliance', href: '/docs/admin/security' },
      { name: 'Billing and Subscriptions', href: '/docs/admin/billing' },
      { name: 'Audit Logs', href: '/docs/admin/audit-logs' },
      { name: 'Environment Isolation', href: '/docs/admin/environments' },
    ],
  },
  {
    title: 'Learning Science',
    description: 'Understand the pedagogy behind Quasera',
    icon: GraduationCap,
    links: [
      { name: 'Adaptive Learning Framework', href: '/docs/learning-science/framework' },
      { name: 'Learner Intelligence Graph', href: '/docs/learning-science/intelligence-graph' },
      { name: 'Mastery-Based Progression', href: '/docs/learning-science/mastery' },
      { name: 'Cognitive Load Optimization', href: '/docs/learning-science/cognitive-load' },
      { name: 'Evidence-Based Design', href: '/docs/learning-science/evidence' },
    ],
  },
];

const popularTopics = [
  'How to configure adaptive assessments',
  'Setting up SSO with SAML',
  'Creating custom analytics dashboards',
  'Migrating content from existing LMS',
  'Understanding learner risk indicators',
  'Configuring Slack notifications',
];

export default function DocsPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Documentation"
          title="Everything you need to orchestrate adaptive learning"
          subtitle="Comprehensive guides, API references, and best practices for implementing and scaling Quasera across your institution."
        />

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 md:p-14">
          <div className="flex items-center gap-3">
            <Search className="h-6 w-6 text-nebula-purple" />
            <h2 className="text-2xl font-semibold text-starlight">Search documentation</h2>
          </div>
          <div className="relative mt-6">
            <input
              type="text"
              placeholder="Search for guides, API references, or best practices..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-starlight placeholder-starlight/40 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm text-starlight/60">Popular:</span>
            {popularTopics.slice(0, 4).map((topic) => (
              <button
                key={topic}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-starlight/70 transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06] hover:text-starlight"
              >
                {topic}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-starlight">Quick Start Guides</h2>
          <p className="mt-3 text-starlight/70">
            New to Quasera? Start here to get up and running quickly.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickStartGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_30px_80px_rgba(10,14,39,0.55)]"
              >
                <guide.icon className="h-10 w-10 text-nebula-purple" />
                <h3 className="mt-4 text-lg font-semibold text-starlight group-hover:text-gradient transition-colors duration-300">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-starlight/70">
                  {guide.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-starlight/60">{guide.time}</span>
                  <ChevronRight className="h-4 w-4 text-nebula-purple group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {documentationSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex items-center gap-3">
                <section.icon className="h-8 w-8 text-nebula-purple" />
                <h3 className="text-xl font-semibold text-starlight">{section.title}</h3>
              </div>
              <p className="mt-3 text-sm text-starlight/70">{section.description}</p>
              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-starlight/80 transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06] hover:text-starlight"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-starlight/60" />
                        {link.name}
                      </span>
                      <ChevronRight className="h-4 w-4 text-starlight/40 group-hover:translate-x-1 group-hover:text-nebula-purple transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-starlight">Need help with implementation?</h3>
              <p className="text-starlight/70">
                Our customer success team is here to support your deployment. We offer onboarding workshops, technical architecture reviews, and ongoing strategic guidance.
              </p>
              <ul className="space-y-3 text-starlight/65">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Dedicated implementation manager for Scale and Enterprise plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Live onboarding workshops and quarterly strategy reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>24/7 technical support with guaranteed response times</span>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-starlight">Developer resources</h3>
              <p className="text-starlight/70">
                Build custom integrations, extend Quasera workflows, and connect your existing data infrastructure with our comprehensive API.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <Link
                  href="/docs/api"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06]"
                >
                  <span>API Reference</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs/webhooks"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06]"
                >
                  <span>Webhook Configuration</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs/sdk"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-starlight transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06]"
                >
                  <span>SDK and Libraries</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-starlight">Still have questions?</h3>
            <p className="text-starlight/70">
              Our support team is ready to help. Reach out with questions about implementation, integrations, or best practices.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
            >
              Contact Support
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
            >
              Read the Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
