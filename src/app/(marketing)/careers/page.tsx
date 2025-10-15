import Link from 'next/link';
import type { Metadata } from 'next';
import { Briefcase, Globe2, Heart, Lightbulb, MapPin, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Careers - Join Orbythic',
  description: 'Join Orbythic and help transform education with AI-powered adaptive learning. Explore opportunities in engineering, product, learning science, and more.',
};

const values = [
  {
    title: 'Impact-Driven',
    description: 'Every feature we build directly improves outcomes for learners and educators.',
    icon: Heart,
  },
  {
    title: 'Learning Culture',
    description: 'We invest in each other through mentorship, workshops, and continuous skill development.',
    icon: Lightbulb,
  },
  {
    title: 'Remote-First',
    description: 'Work from anywhere with flexible hours and async communication practices.',
    icon: Globe2,
  },
  {
    title: 'Collaborative',
    description: 'Cross-functional teams solve problems together with transparency and mutual respect.',
    icon: Users,
  },
];

const openPositions = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build the adaptive learning platform that powers institutions worldwide. Work with Next.js, TypeScript, and modern AI infrastructure.',
  },
  {
    title: 'Learning Science Researcher',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design evidence-based learning experiences and conduct research on adaptive pedagogy with partner institutions.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Craft intuitive interfaces for learners, instructors, and administrators. Drive user research and accessibility initiatives.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-cosmic-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Careers"
          title="Build the future of education with us"
          subtitle="Join a team of engineers, educators, and designers creating adaptive learning systems that unlock human potential. We are growing thoughtfully and looking for mission-driven collaborators."
        />

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-nebula-purple/40"
            >
              <value.icon className="h-10 w-10 text-nebula-purple" />
              <h3 className="mt-6 text-xl font-semibold text-starlight">{value.title}</h3>
              <p className="mt-4 text-starlight/70">{value.description}</p>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-starlight">Open positions</h2>
          <p className="mt-3 text-starlight/70">
            We are hiring across engineering, product, design, and customer success. All roles are remote-first with competitive compensation and equity.
          </p>
          <div className="mt-10 space-y-6">
            {openPositions.map((position) => (
              <article
                key={position.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-nebula-purple/40 hover:shadow-[0_30px_80px_rgba(10,14,39,0.55)]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-starlight">{position.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-starlight/60">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-nebula-purple/10 px-3 py-1 text-nebula-purple">
                        <Briefcase className="h-3.5 w-3.5" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {position.location}
                      </span>
                      <span>{position.type}</span>
                    </div>
                    <p className="mt-4 text-starlight/70">{position.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
                  >
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-starlight">Benefits and perks</h3>
              <ul className="space-y-3 text-starlight/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Competitive salary with equity ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Comprehensive health, dental, and vision insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Unlimited PTO with minimum vacation policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Home office stipend and coworking budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Annual learning and development budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-nebula-purple/80" />
                  <span>Parental leave and family support programs</span>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-starlight">Our hiring process</h3>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-starlight">1. Application Review</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    We review all applications within 5 business days and respond to every candidate.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-starlight">2. Initial Conversation</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    30-minute video call to discuss your background, interests, and alignment with our mission.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-starlight">3. Technical or Work Sample</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Role-specific evaluation that reflects real work you would do at Orbythic.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-starlight">4. Team Interviews</h4>
                  <p className="mt-2 text-sm text-starlight/70">
                    Meet potential teammates and leadership to discuss collaboration and culture fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center">
          <h3 className="text-2xl font-semibold text-starlight">Do not see the right role?</h3>
          <p className="text-starlight/70">
            We are always looking for exceptional people who are passionate about transforming education. Send us your story and we will keep you in mind for future opportunities.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
