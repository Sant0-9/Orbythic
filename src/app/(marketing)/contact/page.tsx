import type { Metadata } from 'next';
import { Mail, MessageSquare, GitBranch, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getPageMetadata } from '@/lib/utils/seo';
import Link from 'next/link';

export const metadata: Metadata = getPageMetadata('contact');

const contactMethods = [
  {
    title: 'Email',
    description: 'For inquiries about Quasera, partnerships, or collaboration opportunities',
    detail: 'hello@orbythic.com',
    href: 'mailto:hello@orbythic.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    description: 'Follow development progress and contribute to open-source components',
    detail: 'github.com/orbythic',
    href: 'https://github.com/Sant0-9',
    icon: GitBranch,
  },
  {
    title: 'LinkedIn',
    description: 'Connect with Shifat Islam Santo, Founder & CEO',
    detail: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/shifat-islam-santo',
    icon: Users,
  },
];

export default function ContactPage() {
  return (
    <div className="relative bg-black">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Let&apos;s Build the Future of Learning Together"
            subtitle="Quasera is in active development. Whether you&apos;re interested in early access, want to collaborate, or just have questions about the vision, I&apos;d love to hear from you."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-starlight">Send Me a Message</h2>
              <p className="mt-4 text-starlight/70">
                I&apos;m Shifat Islam Santo, the founder and solo developer behind Quasera.
                I personally read and respond to every message. Share your thoughts, questions,
                or ideas about AI-powered learning.
              </p>

              <div className="mt-10">
                <a
                  href="mailto:hello@orbythic.com"
                  className="inline-flex items-center gap-3 rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.4)]"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-lg font-semibold text-starlight">What to Include</h3>
                <ul className="mt-4 space-y-2 text-starlight/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-nebula-purple" />
                    <span>Your name and how you heard about Quasera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-nebula-purple" />
                    <span>What aspect of AI-powered learning interests you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-nebula-purple" />
                    <span>Any specific questions or feedback you have</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-nebula-purple" />
                    <span>If you&apos;re interested in early access or beta testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <aside className="space-y-6">
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-starlight">Connect</h3>
                <div className="mt-6 space-y-4">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nebula-purple/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
                    >
                      <div className="flex items-start gap-3">
                        <method.icon className="h-6 w-6 shrink-0 text-nebula-purple transition-transform duration-300 group-hover:scale-110" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-starlight">{method.title}</h4>
                          <p className="mt-1 text-sm text-starlight/60">{method.description}</p>
                          <p className="mt-2 truncate text-sm font-medium text-nebula-purple">{method.detail}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-nebula-purple" />
                  <h3 className="text-xl font-semibold text-starlight">Response Time</h3>
                </div>
                <p className="mt-4 text-sm text-starlight/70">
                  As a solo founder actively developing Quasera, I aim to respond to all messages within
                  2-3 business days. During busy development sprints, it might take a bit longer—thanks
                  for your patience!
                </p>
              </div>
            </ScrollReveal>
          </aside>
        </div>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-nebula-purple/10 to-transparent p-10 backdrop-blur-sm">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-starlight">Join the Early Access Waitlist</h2>
              <p className="mt-4 text-lg text-starlight/70">
                Want to be among the first to experience Quasera when it launches?
                Join the waitlist to get exclusive updates, beta access opportunities,
                and a chance to shape the platform&apos;s development.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.4)]"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-8 py-4 text-lg font-semibold text-starlight transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/40 hover:bg-white/[0.05]"
                >
                  Read the Blog
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-starlight">Frequently Asked Questions</h2>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-starlight">When will Quasera be available?</h3>
                  <p className="mt-2 text-starlight/70">
                    Quasera is currently in active development. I&apos;m building the core platform architecture
                    and AI agent systems. Join the waitlist to be notified when early access becomes available.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-starlight">Can I contribute to development?</h3>
                  <p className="mt-2 text-starlight/70">
                    Absolutely! I&apos;m building Quasera in the open and welcome contributions, feedback, and
                    collaboration. Reach out via email or GitHub if you&apos;re interested in contributing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-starlight">Is Quasera free for students?</h3>
                  <p className="mt-2 text-starlight/70">
                    I&apos;m committed to making Quasera accessible to all students. Pricing details are still being
                    finalized, but there will be a free tier for individual students. Check the{' '}
                    <Link href="/pricing" className="text-nebula-purple hover:underline">pricing page</Link> for
                    current plans.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-starlight">Who is building Quasera?</h3>
                  <p className="mt-2 text-starlight/70">
                    I&apos;m Shifat Islam Santo, a student developer passionate about transforming education with AI.
                    I&apos;m currently the sole founder and developer of Quasera, building it from the ground up based
                    on my own experiences as a student struggling with fragmented learning tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
