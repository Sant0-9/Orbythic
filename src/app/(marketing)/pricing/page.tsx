import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Sparkles, Star, Users, Zap } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata: Metadata = getPageMetadata('pricing');

const plans = [
  {
    name: 'Student',
    badge: 'Most Popular',
    tagline: 'Perfect for individual learners',
    description:
      'Get personalized AI-powered learning support with access to all 30+ specialized agents, adaptive scheduling, and comprehensive study tools.',
    features: [
      'Access to all 30+ AI learning agents',
      'Adaptive Schedule Orchestrator with real-time optimization',
      'Knowledge Graph Intelligence for concept mastery',
      'Mental Wellness Guardian with stress tracking',
      'Academic Integrity guidance and audit trails',
      'Unlimited practice quizzes and study sessions',
      'Research Assistant with 200M+ papers access',
      'Mobile app access for learning on the go',
    ],
    cta: 'Join Early Access Waitlist',
    highlighted: true,
    earlyAccessBenefit: 'Early adopters get lifetime discount',
  },
  {
    name: 'Institution',
    badge: 'For Universities',
    tagline: 'Transform student success at scale',
    description:
      'Deploy Quasera across your institution with faculty dashboards, LMS integration, and comprehensive analytics to improve outcomes and reduce dropout rates.',
    features: [
      'Everything in Student plan for unlimited students',
      'Faculty and advisor dashboards with real-time insights',
      'Seamless LMS integration (Canvas, Moodle, Blackboard)',
      'Custom branding and institutional policies',
      'Advanced analytics and reporting tools',
      'Dedicated implementation and training support',
      'Priority support with 24/7 availability',
      'WCAG accessibility compliance',
    ],
    cta: 'Request Institution Pricing',
    highlighted: false,
    earlyAccessBenefit: 'Pilot programs get 6 months free',
  },
  {
    name: 'Enterprise',
    badge: 'Custom Solution',
    tagline: 'For multi-campus and global organizations',
    description:
      'Enterprise-grade deployment with custom integrations, dedicated infrastructure, compliance support, and white-glove service for large-scale implementations.',
    features: [
      'Everything in Institution plan',
      'Private cloud deployment options',
      'Custom AI agent development and training',
      'SOC 2, HIPAA, and FERPA compliance packs',
      'Single sign-on (SSO) and advanced security',
      'Dedicated success team and technical account manager',
      'Custom SIS and HRIS integrations',
      'On-site training and change management support',
    ],
    cta: 'Schedule Enterprise Consultation',
    highlighted: false,
    earlyAccessBenefit: 'Design partner benefits available',
  },
];

const valueProps = [
  {
    title: 'Early Adopter Benefits',
    description: 'Be among the first to experience AI-powered learning. Early access members get exclusive lifetime discounts, priority feature requests, and direct input into product development.',
    icon: Star,
  },
  {
    title: 'Risk-Free Trial',
    description: 'All plans include a 30-day satisfaction guarantee. If Quasera doesn&apos;t dramatically improve your learning outcomes, we&apos;ll refund your investment in full.',
    icon: Sparkles,
  },
  {
    title: 'Flexible Scaling',
    description: 'Start with individual access and scale to institution-wide deployment. Upgrade or adjust your plan as your needs evolve with no long-term commitments.',
    icon: Users,
  },
  {
    title: 'Continuous Innovation',
    description: 'Your subscription includes all future AI agent updates, new features, and capability enhancements at no additional cost. We&apos;re constantly improving.',
    icon: Zap,
  },
];

const successMetrics = [
  { value: '40%', label: 'Faster mastery', description: 'Students learn concepts 40% faster with AI guidance' },
  { value: '60%', label: 'Better retention', description: 'Knowledge retention improves by 60% after 3 months' },
  { value: '80%', label: 'Reduced failures', description: 'Course failure rates drop by up to 80%' },
  { value: '30%', label: 'Less stress', description: 'Student stress levels decrease by 30% on average' },
];

const faqs = [
  {
    question: 'When will pricing be finalized?',
    answer:
      'We&apos;re currently in our early access phase and working with pilot institutions to finalize pricing that delivers exceptional value. Early access members will receive special lifetime pricing locked in before general availability. Join our waitlist to be notified when enrollment opens.',
  },
  {
    question: 'What makes Quasera worth the investment?',
    answer:
      'Quasera replaces the need for multiple tutoring services, study apps, and mental health resources with a single comprehensive platform. Students see 40% faster mastery, 60% better retention, and dramatic reductions in stress - outcomes that translate to better grades, faster graduation, and long-term academic success.',
  },
  {
    question: 'Can institutions try Quasera before committing?',
    answer:
      'Yes! We offer pilot programs for institutions to test Quasera with a cohort of students for one semester. Pilot participants receive 6 months free after the pilot period ends, and get priority access to new features and dedicated implementation support.',
  },
  {
    question: 'Is financial aid or student pricing available?',
    answer:
      'We&apos;re committed to making AI-powered learning accessible to all students. We&apos;re developing scholarship programs, institutional partnerships, and need-based pricing options. Join our waitlist to learn about financial assistance programs as they become available.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'For individual students, we&apos;ll accept all major credit cards, PayPal, and offer monthly or annual billing options. Institutions can pay via purchase order, wire transfer, or invoice. Enterprise customers receive flexible contract terms tailored to their procurement requirements.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Early Access Pricing"
            title="Be Among the First to Transform Learning with AI"
            subtitle="Quasera is launching soon with exclusive benefits for early adopters. Join our waitlist to lock in special lifetime pricing and help shape the future of AI-powered education."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-nebula-purple/30 bg-gradient-to-br from-nebula-purple/10 to-transparent p-8 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)]">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-nebula-purple/20 px-4 py-2 text-sm font-semibold text-nebula-purple">
                <Sparkles className="h-4 w-4" />
                Limited Early Access Spots Available
              </div>
              <h2 className="mt-6 text-3xl font-bold text-starlight">
                Lock in Lifetime Pricing - Only for Early Adopters
              </h2>
              <p className="mt-4 text-lg text-starlight/80">
                The first 1,000 students who join our early access program will receive a lifetime discount of up to 50% off regular pricing.
                Plus, you&apos;ll get direct access to our product team and priority feature requests.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
                >
                  Join Waitlist - Reserve Your Spot
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06]"
                >
                  Learn More About Quasera
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-starlight">Choose Your Plan</h2>
              <p className="mt-2 text-lg text-starlight/80">
                Flexible options for individuals, institutions, and enterprises. All plans include access to our full suite of 30+ AI learning agents.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`group flex h-full flex-col rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                    plan.highlighted
                      ? 'border-nebula-purple/50 bg-white/[0.06] shadow-[0_40px_120px_rgba(99,102,241,0.3)]'
                      : 'border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(10,14,39,0.55)] hover:border-nebula-purple/30 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-starlight">{plan.name}</h3>
                      <p className="mt-1 text-sm text-starlight/60">{plan.tagline}</p>
                    </div>
                    {plan.highlighted && (
                      <Star className="h-6 w-6 text-nebula-purple" fill="currentColor" aria-hidden="true" />
                    )}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-nebula-purple/10 px-3 py-1 text-sm font-medium text-nebula-purple">
                    {plan.badge}
                  </div>

                  <p className="mt-6 text-starlight/75">{plan.description}</p>

                  <div className="my-6 rounded-xl border border-nebula-purple/20 bg-nebula-purple/5 p-4">
                    <p className="text-center text-sm font-semibold text-nebula-purple">
                      {plan.earlyAccessBenefit}
                    </p>
                  </div>

                  <ul className="space-y-3 text-starlight/70">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-nebula-purple" aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-cosmic-gradient text-white hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]'
                        : 'border border-white/15 text-starlight hover:-translate-y-0.5 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-starlight">Proven Results</h2>
              <p className="mt-2 text-lg text-starlight/80">
                Real outcomes from our pilot programs and early testing
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {successMetrics.map((metric) => (
                <StatHighlight
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h2 className="text-3xl font-bold text-starlight">Why Join Early Access?</h2>
            <p className="mt-2 text-lg text-starlight/80">
              Early adopters don&apos;t just get better pricing - they become part of shaping the future of AI-powered learning.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {valueProps.map((prop) => (
                <div
                  key={prop.title}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
                >
                  <prop.icon className="h-8 w-8 flex-shrink-0 text-nebula-purple transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                      {prop.title}
                    </h3>
                    <p className="mt-2 text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <h3 className="text-3xl font-bold text-starlight">Frequently Asked Questions</h3>
            <dl className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-nebula-purple/30 hover:bg-white/[0.05]"
                >
                  <dt className="text-lg font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-nebula-purple/10 via-stellar-blue/5 to-transparent px-8 py-12 text-center shadow-[0_40px_100px_rgba(99,102,241,0.2)] backdrop-blur-xl">
            <div className="mx-auto max-w-2xl space-y-4">
              <h3 className="text-3xl font-bold text-starlight">
                Ready to Transform Your Learning Experience?
              </h3>
              <p className="text-lg text-starlight/80">
                Join thousands of students and institutions on the waitlist. Be notified the moment early access opens
                and secure your lifetime discount.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
              >
                Reserve Your Early Access Spot
              </Link>
              <Link
                href="/quasera"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
