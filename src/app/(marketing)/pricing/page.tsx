import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Shield, Star, Target } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('pricing');

const plans = [
  {
    name: 'Launch',
    price: 'Starting at $499/mo',
    cadence: 'Ideal for emerging programs and pilot cohorts',
    description:
      'Designed for institutions and teams validating new learning experiences. Includes foundational automation, adaptive content delivery, and success coaching.',
    features: [
      'Up to 500 active learners per month',
      'Adaptive mission builder with core templates',
      'Two live strategy workshops per quarter',
      'Insights dashboard with weekly summary reports',
      'Support response within 24 business hours',
    ],
    cta: 'Start a pilot',
    highlighted: false,
  },
  {
    name: 'Scale',
    price: 'Starting at $1,800/mo',
    cadence: 'Purpose-built for multi-program operations',
    description:
      'Everything in Launch plus advanced automation, expanded integrations, and collaborative tooling for program directors and instructional designers.',
    features: [
      'Up to 5,000 active learners per month',
      'Advanced scenario assessments and performance alerts',
      'Dedicated implementation manager and quarterly roadmap reviews',
      'Workflow automation across Slack, Teams, and email',
      'Custom data exports and embedded analytics',
    ],
    cta: 'Talk with our team',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    cadence: 'For global institutions and regulated industries',
    description:
      'Bring Quasera across campuses or business units with enterprise-grade governance, dedicated success pods, and bespoke integrations aligned to your security requirements.',
    features: [
      'Unlimited learners and workspaces',
      'Compliance packs for SOC 2, HIPAA, and FERPA requirements',
      'Private deployment options and dedicated infrastructure choices',
      'Joint success planning with executive and product teams',
      'On-site change management support when required',
    ],
    cta: 'Schedule an executive briefing',
    highlighted: false,
  },
];

const addOns = [
  {
    title: 'Instructional Design Sprints',
    description:
      'Partner with Orbythic specialists to modernize curriculum assets, convert static materials into adaptive experiences, and design assessment blueprints.',
  },
  {
    title: 'Analytics Enablement',
    description:
      'Accelerate data adoption with custom dashboards, stakeholder workshops, and executive reporting templates tailored to your organization.',
  },
  {
    title: 'Change Management Programs',
    description:
      'Drive adoption with cross-functional rollout plans, faculty training, communication kits, and feedback loops to keep momentum after launch.',
  },
];

const faqs = [
  {
    question: 'How do you determine pricing for each tier?',
    answer:
      'Pricing is based on active learner volume, the number of connected systems, and the level of operational support your team requires. We run a quick discovery session to model your usage and recommend the tier that offers the best value.',
  },
  {
    question: 'Can we migrate from another platform without downtime?',
    answer:
      'Yes. Our implementation team orchestrates phased migrations with sandbox validation, content QA, and learner communication plans to avoid disruption. We also provide data archiving and compliance documentation for existing systems.',
  },
  {
    question: 'What support is included with each plan?',
    answer:
      'Launch customers receive access to our support desk and monthly office hours. Scale adds a dedicated implementation manager, quarterly strategy reviews, and proactive monitoring. Enterprise customers partner with an embedded success pod covering architecture, product, and change management.',
  },
  {
    question: 'Do you offer discounts for non-profits or academic consortia?',
    answer:
      'We believe in equitable access to transformative learning. Talk with our team about volume-based pricing, grant partnerships, and flexible billing structures for mission-driven organizations.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cosmic-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Invest in adaptive learning that scales with your institution"
          subtitle="Every plan starts with a collaborative roadmap so you launch with confidence. Choose the level of automation, integrations, and strategic partnership that best fits your growth stage."
          />

          <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 ${
                  plan.highlighted ? 'shadow-[0_40px_120px_rgba(99,102,241,0.25)]' : 'shadow-[0_30px_80px_rgba(10,14,39,0.55)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-starlight">{plan.name}</h3>
                  {plan.highlighted ? <Star className="h-6 w-6 text-nebula-purple" aria-hidden /> : null}
                </div>
                <p className="mt-4 text-lg font-semibold text-starlight">{plan.price}</p>
                <p className="text-sm uppercase tracking-wide text-starlight/50">
                  {plan.cadence}
                </p>
                <p className="mt-6 text-starlight/70">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3 text-starlight/65">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-nebula-purple" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-10 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-cosmic-gradient text-white hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]'
                      : 'border border-white/15 text-starlight hover:border-nebula-purple/40 hover:bg-white/[0.05]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatHighlight value="14 days" label="Average time to pilot launch" description="Kick off your first adaptive cohort in weeks, not months, with guided onboarding." />
            <StatHighlight value="96%" label="Implementation satisfaction" description="Post-launch survey response across the last 40 deployments spanning higher-ed and workforce programs." />
            <StatHighlight value="45%" label="Operational efficiency gain" description="Reduction in manual tasks for operations teams measured over the first two quarters." />
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-starlight">Strategic partnership from day one</h3>
                <p className="text-starlight/70">
                  Our team embeds with yours to define a measurement framework, configure automations, and establish governance practices that scale. The result is a shared operating rhythm that keeps programs agile while safeguarding compliance.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <Shield className="h-6 w-6 text-nebula-purple" aria-hidden />
                    <div>
                      <h4 className="text-base font-semibold text-starlight">Enterprise-grade security</h4>
                      <p className="text-sm text-starlight/65">
                        Data residency options, granular access controls, and regular third-party audits give security teams confidence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <Target className="h-6 w-6 text-nebula-purple" aria-hidden />
                    <div>
                      <h4 className="text-base font-semibold text-starlight">Outcome-first roadmaps</h4>
                      <p className="text-sm text-starlight/65">
                        We anchor every milestone to tangible learner, faculty, and business outcomes so success stays observable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-starlight">Optional add-ons</h3>
                <p className="text-starlight/70">
                  Extend your Quasera deployment with project-based services led by senior specialists. Each engagement is scoped with transparent milestones and knowledge transfer to your internal team.
                </p>
                <ul className="space-y-4 text-starlight/65">
                  {addOns.map((addOn) => (
                    <li key={addOn.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <h4 className="text-lg font-semibold text-starlight">{addOn.title}</h4>
                      <p className="mt-2 text-sm">
                        {addOn.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <h3 className="text-2xl font-semibold text-starlight">Frequently asked questions</h3>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <dt className="text-lg font-semibold text-starlight">{faq.question}</dt>
                  <dd className="mt-3 text-starlight/65">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center">
            <h3 className="text-2xl font-semibold text-starlight">Ready to map pricing to your roadmap?</h3>
            <p className="text-starlight/70">
              Share your program goals, learner volume, and integration needs. We will assemble a tailored proposal within two business days, including implementation timeline and ROI projections.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Connect with sales
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
              >
                Explore technical docs
              </Link>
            </div>
          </section>
        </div>
      </div>
  );
}
