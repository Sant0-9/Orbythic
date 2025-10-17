import Link from 'next/link';
import type { Metadata } from 'next';
import {
  BookOpen,
  Brain,
  Building2,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Network,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

export const metadata: Metadata = getPageMetadata('solutions');

const audiences = [
  {
    name: 'Individual Students',
    description:
      'Empower your learning journey with 30+ AI agents working 24/7 to personalize your study plan, track your progress, and ensure academic success while maintaining integrity and reducing stress.',
    icon: GraduationCap,
    outcomes: [
      'Personalized study schedules that adapt to your learning pace',
      'Real-time knowledge gap detection and targeted practice',
      'Mental wellness monitoring with stress reduction strategies',
      'Academic integrity guidance with complete learning transparency',
    ],
    cta: 'Start learning smarter',
  },
  {
    name: 'Universities and Colleges',
    description:
      'Deploy Quasera across your institution to maximize student success, reduce dropout rates, and provide faculty with actionable insights while maintaining academic standards and accessibility for all learners.',
    icon: Building2,
    outcomes: [
      '80% reduction in course failure rates with early intervention',
      'Real-time dashboards for faculty and academic advisors',
      'Seamless LMS integration with Canvas, Moodle, and Blackboard',
      'WCAG-compliant accessibility for diverse learning needs',
    ],
    cta: 'Schedule institutional demo',
  },
  {
    name: 'K-12 Schools',
    description:
      'Support younger learners with age-appropriate AI guidance, parental oversight tools, and comprehensive safety features that promote genuine understanding while building strong foundational skills.',
    icon: Users,
    outcomes: [
      'Age-appropriate Socratic guidance for deeper understanding',
      'Parent and teacher collaboration dashboards',
      'Safe, monitored AI interactions with complete audit trails',
      'Adaptive content that grows with student capabilities',
    ],
    cta: 'Explore K-12 solutions',
  },
  {
    name: 'Professional Development',
    description:
      'Accelerate workforce upskilling with AI-powered learning paths that integrate with your existing systems, track competency development, and demonstrate clear ROI for corporate training initiatives.',
    icon: Target,
    outcomes: [
      'Skills gap analysis with personalized learning roadmaps',
      'Integration with HRIS and learning management systems',
      'Certificate and badge issuance tied to competency mastery',
      'Analytics dashboards showing training ROI and impact',
    ],
    cta: 'Discuss corporate training',
  },
];

const coreCapabilities = [
  {
    title: 'Multi-Agent AI Orchestra',
    description:
      '30+ specialized AI agents work autonomously and collaboratively - from scheduling and content processing to mental wellness and career guidance - creating a comprehensive learning support system.',
    icon: Brain,
    highlights: [
      'Adaptive Schedule Orchestrator with 90%+ prediction accuracy',
      'Knowledge Graph Intelligence for concept mastery tracking',
      'Mental Wellness Guardian with burnout prediction',
      'Academic Integrity Guardian with 95%+ blocking rate',
    ],
  },
  {
    title: 'Evidence-Based Learning Science',
    description:
      'Every feature is grounded in cognitive science research, applying proven principles like spaced repetition, interleaving, and retrieval practice to maximize retention and long-term mastery.',
    icon: Sparkles,
    highlights: [
      'Personalized forgetting curves for optimal review timing',
      'Difficulty calibration that maintains optimal challenge',
      'Multi-modal learning with text, video, and interactive labs',
      'Retrieval practice integrated throughout the learning journey',
    ],
  },
  {
    title: 'Academic Integrity by Design',
    description:
      'Built-in safeguards ensure AI enhances learning without compromising academic honesty. Complete transparency and audit trails provide peace of mind for educators and institutions.',
    icon: Shield,
    highlights: [
      'Socratic guidance mode for authentic learning',
      'Immutable audit logs of all AI interactions',
      'Policy-aware responses configurable per course',
      'One-click learning evidence exports for instructors',
    ],
  },
  {
    title: 'Real-Time Adaptation Engine',
    description:
      'The system continuously monitors learning patterns and adjusts strategies in real-time, creating a self-evolving platform that becomes more effective as students engage with it.',
    icon: Zap,
    highlights: [
      'Dynamic difficulty adjustment based on performance',
      'Automatic intervention triggers for struggling learners',
      'Personalized content recommendations from 200M+ papers',
      'Context-aware hints calibrated to individual needs',
    ],
  },
];

const integrationFeatures = [
  {
    title: 'Seamless LMS Integration',
    description: 'Connect with Canvas, Moodle, Blackboard, and other major learning management systems with automatic grade sync and assignment import.',
    icon: LayoutDashboard,
  },
  {
    title: 'Research Assistant Pro',
    description: 'Access 200M+ academic papers with AI-powered literature reviews, citation management, and research workflow automation.',
    icon: BookOpen,
  },
  {
    title: 'Knowledge Graph Visualization',
    description: 'Interactive concept maps show learning progress, knowledge gaps, and prerequisite relationships for strategic study planning.',
    icon: Network,
  },
  {
    title: 'Wellness and Support',
    description: 'Comprehensive mental health monitoring with stress tracking, burnout prediction, and evidence-based intervention recommendations.',
    icon: Heart,
  },
];

const successMetrics = [
  { value: '40%', label: 'Faster concept mastery', description: 'Students achieve mastery 40% faster vs. traditional methods' },
  { value: '60%', label: 'Better retention', description: 'Knowledge retention after 3+ months increases by 60%' },
  { value: '80%', label: 'Course failure reduction', description: 'Early intervention reduces failure rates by up to 80%' },
  { value: '30%', label: 'Stress reduction', description: 'Student-reported stress levels decrease by an average of 30%' },
];

const implementationSteps = [
  {
    title: 'Discovery and Setup',
    description:
      'We begin with a comprehensive needs assessment, understanding your learning objectives, existing systems, and success metrics. Our team configures Quasera to align with your institutional goals and policies.',
  },
  {
    title: 'Integration and Migration',
    description:
      'Seamless integration with your LMS, SIS, and other existing tools. We migrate existing content, configure single sign-on, and ensure all systems communicate effectively with complete data security.',
  },
  {
    title: 'Training and Launch',
    description:
      'Comprehensive training for faculty, students, and administrators. We provide ongoing support, analytics reviews, and continuous optimization to ensure sustained success and maximum impact.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Solutions for Every Learner"
            title="Transform Education with AI-Powered Learning"
            subtitle="Quasera delivers personalized, adaptive learning experiences powered by 30+ specialized AI agents. Whether you're a student seeking academic success, an institution aiming to improve outcomes, or an organization upskilling your workforce, Quasera provides the intelligence and support needed to achieve measurable results."
          />
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-starlight">Who We Serve</h2>
            <p className="mt-2 text-lg text-starlight/80">
              From individual learners to large institutions, Quasera adapts to meet diverse educational needs while maintaining the highest standards of academic integrity and learning effectiveness.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2" delay={0.2}>
            {audiences.map((audience) => (
              <article
                key={audience.name}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm shadow-[0_30px_80px_rgba(10,14,39,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_40px_100px_rgba(148,163,255,0.3)]"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <audience.icon className="h-10 w-10 text-nebula-purple transition-all duration-500 group-hover:scale-110" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                      {audience.name}
                    </h3>
                  </div>
                  <p className="mt-6 text-starlight/75 transition-colors duration-300 group-hover:text-starlight/85">
                    {audience.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-starlight/65">
                    {audience.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3 transition-colors duration-300 group-hover:text-starlight/75">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80 transition-all duration-300 group-hover:scale-125 group-hover:bg-nebula-purple" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-starlight transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
                >
                  {audience.cta}
                </Link>
              </article>
            ))}
          </StaggerReveal>
        </div>

        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-starlight">Core Capabilities</h2>
            <p className="mt-2 text-lg text-starlight/80">
              Quasera combines cutting-edge AI technology with evidence-based learning science to create a comprehensive learning ecosystem that adapts to every student&apos;s unique needs.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {coreCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_rgba(148,163,255,0.3)]"
              >
                <capability.icon className="h-10 w-10 text-nebula-purple transition-all duration-500 group-hover:scale-110" aria-hidden="true" />
                <h3 className="mt-6 text-2xl font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                  {capability.title}
                </h3>
                <p className="mt-4 text-starlight/75 transition-colors duration-300 group-hover:text-starlight/85">
                  {capability.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {capability.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-starlight/65 transition-colors duration-300 group-hover:text-starlight/75">
                      <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-nebula-purple transition-all duration-300 group-hover:scale-125" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </StaggerReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-nebula-purple/10 to-transparent p-10 shadow-[0_40px_100px_rgba(99,102,241,0.15)]">
            <h2 className="text-3xl font-bold text-starlight">
              Additional Features and Integrations
            </h2>
            <p className="mt-4 text-lg text-starlight/80">
              Beyond core learning features, Quasera includes specialized modules for research, system integration, visualization, and comprehensive student support.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {integrationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-stellar-blue/40 hover:bg-black/60 hover:shadow-[0_20px_50px_rgba(96,165,250,0.2)]"
                >
                  <feature.icon className="h-8 w-8 text-stellar-blue transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-starlight transition-colors duration-300 group-hover:text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-starlight">Proven Results</h2>
            <p className="mt-2 text-lg text-starlight/80">
              Quasera delivers measurable improvements in learning outcomes, retention, and student wellbeing based on real-world deployments and evidence-based learning science.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" delay={0.15}>
            {successMetrics.map((metric) => (
              <StatHighlight
                key={metric.label}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </StaggerReveal>
        </div>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 backdrop-blur-xl shadow-[0_40px_100px_rgba(10,14,39,0.6)]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="space-y-5 lg:col-span-2">
                <h3 className="text-2xl font-semibold text-starlight">
                  Simple Implementation Process
                </h3>
                <p className="text-lg text-starlight/70">
                  We handle the complexity so you can focus on learning outcomes. From initial setup to ongoing optimization, our team ensures a smooth transition and sustained success.
                </p>
                <p className="text-starlight/65">
                  Each deployment is supported by dedicated specialists, comprehensive training, and detailed documentation to ensure your team can leverage Quasera&apos;s full capabilities from day one.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:col-span-3 md:grid-cols-3">
                {implementationSteps.map((stage, index) => (
                  <div
                    key={stage.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nebula-purple/20 text-sm font-bold text-nebula-purple transition-all duration-300 group-hover:scale-110 group-hover:bg-nebula-purple/30">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wide text-starlight/50">
                        Step {index + 1}
                      </span>
                    </div>
                    <h4 className="mt-2 font-semibold text-starlight transition-colors duration-300 group-hover:text-white">
                      {stage.title}
                    </h4>
                    <p className="mt-3 text-sm text-starlight/70 transition-colors duration-300 group-hover:text-starlight/80">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-gradient-to-br from-nebula-purple/10 via-stellar-blue/5 to-transparent px-8 py-12 shadow-[0_40px_100px_rgba(99,102,241,0.2)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h3 className="text-3xl font-bold text-starlight">
                Ready to Transform Your Learning Experience?
              </h3>
              <p className="text-lg text-starlight/80">
                Whether you&apos;re a student seeking better outcomes, an educator looking to enhance your courses, or an institution aiming to improve student success at scale, Quasera has the solution you need.
              </p>
            </div>
            <div className="flex min-w-fit flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.45)]"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-starlight transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(148,163,255,0.2)]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
