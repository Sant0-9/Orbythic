import Link from 'next/link';
import type { Metadata } from 'next';
import { Cpu, Layers, LineChart, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { getPageMetadata, generateStructuredData } from '@/lib/utils/seo';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const metadata: Metadata = getPageMetadata('quasera');

const aiCapabilities = [
  {
    title: 'Learner Intelligence Graph',
    description:
      'Continuously models how each learner absorbs concepts, pinpoints misconceptions, and prioritizes the next optimal concept to practice.',
    points: [
      'Real-time comprehension signals across text, video, and labs',
      'Dynamic reinforcement plans tuned to mastery thresholds',
      'Longitudinal insights across cohorts, campuses, and programs',
    ],
    icon: Cpu,
  },
  {
    title: 'Scenario-Based Assessment Engine',
    description:
      'Generates adaptive scenarios aligned to accreditation standards and industry frameworks to keep learners engaged while meeting required outcomes.',
    points: [
      'Automatic blueprinting with Bloom and Webb depth alignment',
      'Multi-branch assessments that respond to learner decisions',
      'Instructor dashboards with suggested interventions',
    ],
    icon: Workflow,
  },
  {
    title: 'Cohort Operations Studio',
    description:
      'Gives program directors unified visibility into pacing, risk indicators, and content performance across every group in a single command center.',
    points: [
      'Predictive risk scores surfaced 4 weeks ahead of attrition events',
      'Context-rich nudges synced to Slack, Teams, and email',
      'Content intelligence that reveals what to revise next',
    ],
    icon: LineChart,
  },
];

const trustSignals = [
  {
    title: 'Security First',
    description: 'SOC 2 Type II controls, encryption in transit and at rest, SSO via SAML/OIDC, and role-based authorization for every workspace.',
    icon: ShieldCheck,
  },
  {
    title: 'Enterprise-Ready Integrations',
    description: 'Seamless interoperability with Canvas, Moodle, Blackboard, HubSpot, Salesforce, and custom SIS via secure APIs.',
    icon: Layers,
  },
  {
    title: 'Pedagogy + AI Research',
    description: 'Co-built with instructional designers and PhDs to balance measurable learning outcomes with authentic human guidance.',
    icon: Sparkles,
  },
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
              eyebrow="Adaptive Learning Operating System"
              title={<span className="text-gradient">Quasera</span>}
              subtitle="Purpose-built to give education leaders complete command over learning journeys, outcomes, and engagement at scale."
            />
          </ScrollReveal>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <StaggerReveal className="lg:col-span-3 space-y-10">
              {aiCapabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(10,14,39,0.55)] transition-transform duration-500 hover:-translate-y-1 hover:border-nebula-purple/40"
                >
                  <div className="flex items-center gap-4">
                    <capability.icon className="h-10 w-10 text-nebula-purple" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold text-starlight">{capability.title}</h3>
                  </div>
                  <p className="mt-4 text-lg text-starlight/75">
                    {capability.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-starlight/65">
                    {capability.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggerReveal>

            <aside className="lg:col-span-2 flex flex-col justify-between gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-starlight">Operational Clarity from Day Zero</h3>
                <p className="text-starlight/70">
                  Quasera connects previously siloed learner telemetry, content analytics, and engagement signals into a unified command center. Leadership teams see exactly where to intervene and which experiences to amplify.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <StatHighlight value="41%" label="Lift in mastery speed" description="Average acceleration in concept mastery after six weeks on Quasera." />
                <StatHighlight value="3.2x" label="Increase in peer collaboration" description="Measured through cross-cohort project participation and feedback exchanges." />
              </div>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
                >
                  Schedule a Systems Demo
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 text-lg font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
                >
                  Explore Implementation Plans
                </Link>
              </div>
            </aside>
          </div>

          <StaggerReveal className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <article
                key={signal.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40"
              >
                <signal.icon className="h-10 w-10 text-nebula-purple" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-starlight">
                  {signal.title}
                </h3>
                <p className="mt-4 text-starlight/70">
                  {signal.description}
                </p>
              </article>
            ))}
          </StaggerReveal>

          <ScrollReveal className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
            <SectionHeader
              align="left"
              eyebrow="Adaptive Learning Framework"
              title="From onboarding to accreditation, Quasera orchestrates every moment of the learner experience."
              subtitle="Automate critical workflows, keep faculty in the loop, and trust that every interaction is data-backed and accessible."
              className="max-w-3xl"
            />
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4 text-starlight/70">
                <p>
                  Every workspace begins with discovery sessions that translate your academic model into a responsive knowledge graph. Content, assessments, and mentor interactions are assembled into modular journeys that adapt in real time without sacrificing compliance.
                </p>
                <p>
                  Faculty dashboards surface the context behind each system recommendation. Instructors can approve, adjust, or override automated actions, ensuring that pedagogy remains human-guided while benefitting from continual AI optimization.
                </p>
                <p>
                  Analytics packs deconstruct outcomes with plain-language explanations, closing the loop between business objectives, learner satisfaction, and accreditation mandates.
                </p>
              </div>
              <div className="space-y-4 text-starlight/70">
                <p>
                  Implementation teams run migration diagnostics to import legacy content, align metadata, and validate learning objectives. Quasera ships with WCAG-compliant templates and supports accessible alt-text, captioning, and multi-modal delivery out of the box.
                </p>
                <p>
                  Program health signals can be synced with internal BI tools or exported to your data warehouse. For public reporting, Quasera assembles stakeholder-ready summaries with optional structured data feeds to drive search visibility.
                </p>
                <p>
                  When you go live, our customer team co-hosts retrospectives, iterating on the roadmap with your faculty and operations leads to keep outcomes compounding month after month.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-24 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center md:flex-row md:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-starlight">Ready to orchestrate learning with precision?</h3>
              <p className="text-starlight/70">
                Bring Quasera into your programs and give every learner a personalized, outcomes-driven path. No more disconnected tools or blind spots.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
            >
              Map Your Use Case
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
