import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BadgeCheck,
  Brain,
  Building,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Users,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const metadata: Metadata = getPageMetadata('solutions');

const audiences = [
  {
    name: 'Universities and Colleges',
    description:
      'Deliver adaptive pathways across undergraduate and graduate programs. Quasera connects LMS, SIS, and assessment systems into cohesive journeys that align with accreditation outcomes while preserving faculty autonomy.',
    icon: GraduationCap,
    outcomes: [
      'Outcome blueprints mapped to institutional rubrics',
      'Automated remediation plans triggered by performance thresholds',
      'Faculty co-pilot that recommends content refresh cycles',
    ],
  },
  {
    name: 'Bootcamps and Upskilling Providers',
    description:
      'Launch cohorts faster with template-driven curricula, pacing intelligence, and job placement workflows. Quasera keeps learners motivated with skill milestones tied directly to hiring manager requirements.',
    icon: BadgeCheck,
    outcomes: [
      'Placement-readiness signals shared with employer networks',
      'Structured project feedback loops with AI drafting assistance',
      'Portfolio artifact tracking across every cohort',
    ],
  },
  {
    name: 'Corporate Academies',
    description:
      'Reskill teams with tailored learning paths that integrate into your HRIS and productivity stack. Managers receive actionable insights on capability gaps while learners get just-in-time scenarios tied to strategic initiatives.',
    icon: Building,
    outcomes: [
      'Skills matrices synced to HRIS for automatic badge issuance',
      'Contextual nudges inside Slack, Teams, and email',
      'Executive dashboards with ROI and productivity correlation',
    ],
  },
  {
    name: 'Research and Innovation Labs',
    description:
      'Coordinate complex lab apprenticeships, compliance training, and cross-disciplinary projects. Quasera safeguards knowledge transfer with structured mentorship programming and archival content libraries.',
    icon: FlaskConical,
    outcomes: [
      'Mentor pairing algorithms that factor availability and specialization',
      'Instrumentation for lab safety and compliance milestones',
      'Living documentation space with versioned research protocols',
    ],
  },
];

const lifecycle = [
  {
    title: 'Discovery and Alignment',
    description:
      'We begin by auditing your existing learning assets, operations, and compliance requirements. Our team collaborates with faculty, instructional designers, and operations leads to translate institutional goals into measurable outcomes.',
  },
  {
    title: 'Journey Design',
    description:
      'Using the Orbythic methodology, we orchestrate a modular structure of missions, quests, and mastery checks. Each component is tagged with competency metadata, enabling Quasera to adapt the experience in real time.',
  },
  {
    title: 'Launch and Iterate',
    description:
      'After rigorous testing, we launch cohorts with live telemetry dashboards and preconfigured alerts. Weekly operations reviews ensure that we capture qualitative feedback, deliver enhancements, and keep outcomes compounding.',
  },
];

const differentiators = [
  {
    title: 'Unified Learner Model',
    description:
      'Quasera stitches together behavioural, performance, and engagement data to maintain a unified learner profile. This persistent model makes it possible to personalize experiences without creating compliance headaches.',
    icon: Brain,
  },
  {
    title: 'Operational Command Center',
    description:
      'Program directors gain a real-time view into program health, instructor bandwidth, and learner risk indicators. Decisions that once required disjointed spreadsheets now appear in interactive dashboards with drill-down analytics.',
    icon: LayoutDashboard,
  },
  {
    title: 'Flexible Governance',
    description:
      'Granular permissions, audit logs, and environment isolation empower large institutions to innovate safely. Whether you manage continuing education or regulated training, governance rules stay enforceable.',
    icon: ClipboardList,
  },
  {
    title: 'Collaborative Ecosystem',
    description:
      'Mentors, peer reviewers, and partner organizations collaborate inside the same platform. Structured workflows, content approvals, and embedded messaging keep every stakeholder aligned.',
    icon: Users,
  },
];

const metrics = [
  { value: '38%', label: 'Faster completion velocity', description: 'Average reduction in time-to-mastery for target competencies across pilot institutions.' },
  { value: '4.6/5', label: 'Learner satisfaction', description: 'Composite satisfaction score across onboarding, live sessions, and project experiences.' },
  { value: '2.8x', label: 'Increase in content reuse', description: 'Reuse of approved learning assets across programs through Quasera libraries.' },
];

export default function SolutionsPage() {
  return (
    <div className="bg-cosmic-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Solutions"
              title="Activate confident learning experiences for every audience"
              subtitle="Orbythic partners with program leaders to architect adaptive journeys that deliver measurable outcomes, whether you are educating first-year students, reskilling entire workforces, or scaling research operations globally."
            />
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(10,14,39,0.55)] transition-transform duration-500 hover:-translate-y-1 hover:border-nebula-purple/40"
              >
                <div>
                  <audience.icon className="h-10 w-10 text-nebula-purple" aria-hidden />
                  <h3 className="mt-6 text-2xl font-semibold text-starlight">
                    {audience.name}
                  </h3>
                  <p className="mt-4 text-starlight/70">
                    {audience.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-starlight/65">
                    {audience.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
                >
                  Discuss this use case
                </Link>
              </article>
            ))}
          </StaggerReveal>

          <ScrollReveal className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-5">
                <h3 className="text-2xl font-semibold text-starlight">
                  Proven implementation lifecycle
                </h3>
                <p className="text-lg text-starlight/70">
                  We blend design sprints, data migrations, and change management into a seamless onboarding rhythm. By centralizing insight gathering, your team captures momentum early and builds internal advocacy quickly.
                </p>
                <p className="text-starlight/65">
                  Each stage is supported by Orbythic specialists, tailored workshops, and documentation libraries so that your internal teams can operate Quasera independently after launch.
                </p>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 gap-6 md:grid-cols-3">
                {lifecycle.map((stage) => (
                  <div
                    key={stage.title}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wide text-starlight/50">
                      {stage.title}
                    </span>
                    <p className="mt-4 text-sm text-starlight/70">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-nebula-purple/40"
              >
                <item.icon className="h-10 w-10 text-nebula-purple" aria-hidden />
                <h3 className="mt-6 text-xl font-semibold text-starlight">
                  {item.title}
                </h3>
                <p className="mt-4 text-starlight/70">
                  {item.description}
                </p>
              </article>
            ))}
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <StatHighlight
                key={metric.label}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </StaggerReveal>

          <ScrollReveal className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-starlight">
                Let&apos;s architect your learning ecosystem
              </h3>
              <p className="text-starlight/70">
                Share your program goals and we will assemble a tailored blueprint, including outcome forecasts, integration plans, and a clear launch timeline.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Book a strategy session
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
              >
                Review pricing options
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
  );
}
