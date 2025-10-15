import Link from 'next/link';
import type { Metadata } from 'next';
import { Compass, Globe2, Lightbulb, ShieldCheck, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('about');

const values = [
  {
    title: 'Learning Without Limits',
    description:
      'We believe equitable access to transformative learning experiences should be table stakes, not a differentiator. Every product decision starts with the question: does this remove friction for learners and educators?',
    icon: Globe2,
  },
  {
    title: 'Integrity in Innovation',
    description:
      'AI is powerful when it amplifies human judgment. We design with transparency so faculty, learners, and administrators understand why a recommendation appears and how it advances outcomes.',
    icon: ShieldCheck,
  },
  {
    title: 'Curiosity in Orbit',
    description:
      'The Orbythic team is fueled by experimentation. We run discovery labs with partner institutions, test new pedagogical models, and continually fold insights back into the product.',
    icon: Lightbulb,
  },
  {
    title: 'Community Powered Growth',
    description:
      'Impact multiplies when mentors, researchers, and industry partners collaborate. We build spaces where stakeholders can share practices, content, and feedback loops openly.',
    icon: Users,
  },
];

const milestones = [
  {
    year: '2022',
    title: 'Research roots',
    description:
      'Orbythic began as an applied research initiative exploring adaptive tutoring systems for remote learners. Early prototypes showed meaningful gains in mastery and retention.',
  },
  {
    year: '2023',
    title: 'From prototype to platform',
    description:
      'We partnered with two universities and an enterprise academy to refine the Quasera learning model. The team expanded to include instructional designers, data scientists, and platform engineers.',
  },
  {
    year: '2024',
    title: 'Operational excellence',
    description:
      'Quasera launched publicly with a modular architecture, robust governance, and real-time analytics. Programs across North America began deploying adaptive pathways within weeks.',
  },
  {
    year: 'Today',
    title: 'Scaling impact globally',
    description:
      'We now partner with institutions across higher education, workforce development, and research organizations. Every engagement is co-designed to advance belonging, accessibility, and measurable outcomes.',
  },
];

const leadership = [
  {
    name: 'Leena Darzi',
    role: 'Founder & CEO',
    bio: 'Former ed-tech operator who scaled learning operations for distributed universities. Obsessed with orchestrating equitable access to high-impact learning.',
  },
  {
    name: 'Malik Chen',
    role: 'Chief Product Officer',
    bio: 'Product strategist with experience at adaptive assessment startups. Leads the roadmap for Quasera’s AI co-pilot and analytics suite.',
  },
  {
    name: 'Dr. Priya Rao',
    role: 'Head of Learning Science',
    bio: 'Instructional scientist specializing in mastery-based education and cognitive apprenticeship models. Partners with institutions to design measurable outcomes.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cosmic-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Orbythic"
          title="Engineering learning systems that unlock human potential"
          subtitle="We are a team of educators, engineers, and designers building Quasera—an adaptive operating system for learning that respects the craft of teaching while amplifying what is possible with AI."
          />

          <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <Compass className="h-10 w-10 text-nebula-purple" aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Mission</h3>
              <p className="mt-4 text-starlight/70">
                We exist to remove friction between intent and impact in education. Institutions deserve technology that adapts to their unique pedagogical models, not the other way around.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <Lightbulb className="h-10 w-10 text-nebula-purple" aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Vision</h3>
              <p className="mt-4 text-starlight/70">
                Orbythic envisions a world where learners access adaptive pathways that reflect their aspirations, context, and identity. Faculty remain central as mentors and architects of these journeys.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <ShieldCheck className="h-10 w-10 text-nebula-purple" aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold text-starlight">Our Commitment</h3>
              <p className="mt-4 text-starlight/70">
                Accessibility, privacy, and measurable outcomes guide our roadmap. We pair technical rigor with deep respect for the communities we serve.
              </p>
            </article>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <h3 className="text-2xl font-semibold text-starlight">Core values</h3>
            <p className="mt-4 max-w-3xl text-starlight/70">
              Values shape every decision we make, from how we design features to how we build partnerships. They give our team a shared language for evaluating trade-offs and staying mission-aligned as we grow.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-nebula-purple/40"
                >
                  <value.icon className="h-10 w-10 text-nebula-purple" aria-hidden />
                  <h4 className="mt-6 text-xl font-semibold text-starlight">{value.title}</h4>
                  <p className="mt-4 text-starlight/70">{value.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <h3 className="text-2xl font-semibold text-starlight">Milestones</h3>
            <p className="mt-4 max-w-3xl text-starlight/70">
              Our journey is shaped by close collaboration with educators and learners. Each milestone reflects a commitment to co-creating solutions rather than imposing technology for its own sake.
            </p>
            <div className="mt-10 space-y-8">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-starlight/50">
                    {milestone.year}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-starlight">{milestone.title}</h4>
                  <p className="mt-4 text-starlight/70">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatHighlight value="12+" label="Active research collaborations" description="Working with universities, accelerators, and non-profits to pilot new learning models." />
            <StatHighlight value="40" label="Programs launched in 2024" description="Across higher education, workforce development, and corporate academies." />
            <StatHighlight value="92%" label="Faculty approval rating" description="Educators who report improved visibility and focus since adopting Quasera." />
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <h3 className="text-2xl font-semibold text-starlight">Leadership circle</h3>
            <p className="mt-4 max-w-3xl text-starlight/70">
              Our leadership blends experience from ed-tech, learning science, and AI research. Together they guide Orbythic’s mission to fuse technology with human-centered learning.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {leadership.map((leader) => (
                <article
                  key={leader.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-starlight">{leader.name}</h4>
                    <span className="mt-1 block text-sm uppercase tracking-wide text-starlight/50">
                      {leader.role}
                    </span>
                    <p className="mt-4 text-starlight/70">{leader.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-starlight">Partner with Orbythic</h3>
              <p className="text-starlight/70">
                Whether you are a university dean, a bootcamp director, or leading workforce transformation, we are ready to co-create a roadmap that delivers measurable outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Connect with our team
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-starlight transition-colors duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.04]"
              >
                Explore insights
              </Link>
            </div>
          </section>
        </div>
      </div>
  );
}
