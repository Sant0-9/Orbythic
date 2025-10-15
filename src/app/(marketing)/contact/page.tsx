import type { Metadata } from 'next';
import { Clock, Mail, MessageCircle, PhoneCall } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatHighlight from '@/components/ui/StatHighlight';
import ContactForm from '@/components/sections/ContactForm';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('contact');

const contactChannels = [
  {
    title: 'Talk with sales',
    description: 'Schedule a roadmap session to understand pricing, implementation, and success planning.',
    detail: 'sales@orbythic.com',
    icon: Mail,
  },
  {
    title: 'Partner with us',
    description: 'Join research pilots, co-author thought leadership, or explore grant-backed initiatives.',
    detail: 'partnerships@orbythic.com',
    icon: MessageCircle,
  },
  {
    title: 'Support for customers',
    description: 'Submit product questions or request enhancements. Customers receive an answer within 12 hours.',
    detail: 'support@orbythic.com',
    icon: PhoneCall,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Start a conversation with Orbythic"
            subtitle="Share your goals and we will mobilize the right experts to respond. We typically reply within one business day."
          />

          <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
              <h3 className="text-2xl font-semibold text-starlight">Tell us about your programs</h3>
              <p className="mt-4 max-w-2xl text-starlight/70">
                The more context you provide, the faster we can tailor a roadmap. We review every submission carefully and connect you with team members who understand your domain.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-xl font-semibold text-starlight">Reach the right team</h3>
                <div className="mt-6 space-y-5">
                  {contactChannels.map((channel) => (
                    <div key={channel.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <channel.icon className="h-6 w-6 text-nebula-purple" aria-hidden />
                        <div>
                          <h4 className="text-base font-semibold text-starlight">{channel.title}</h4>
                          <p className="text-sm text-starlight/60">{channel.description}</p>
                          <p className="mt-2 text-sm font-medium text-starlight">{channel.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-nebula-purple" aria-hidden />
                  <h3 className="text-xl font-semibold text-starlight">Response hours</h3>
                </div>
                <p className="mt-3 text-sm text-starlight/65">
                  We respond Monday through Friday, 8:00 AM to 6:00 PM Pacific Time. Urgent customer issues are monitored around the clock.
                </p>
                <p className="mt-4 text-sm text-starlight/65">
                  Need immediate assistance? Current customers can open a priority ticket inside the Quasera portal or call the dedicated support line referenced in your onboarding materials.
                </p>
              </div>
            </aside>
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatHighlight value="24h" label="Average first response time" description="Across all inbound requests during the last quarter." />
            <StatHighlight value="97%" label="Customer satisfaction" description="Based on follow-up surveys after support interactions." />
            <StatHighlight value="35" label="Countries represented in our community" description="We serve teams across higher-ed, workforce development, and research labs worldwide." />
          </section>

          <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center">
            <h3 className="text-2xl font-semibold text-starlight">Prefer to meet live?</h3>
            <p className="text-starlight/70">
              We host 30-minute discovery calls to explore your objectives, timelines, and success criteria. Every call ends with tangible next steps.
            </p>
            <a
              href="https://cal.com/orbythic/demo"
              className="inline-flex items-center justify-center rounded-xl bg-cosmic-gradient px-6 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
            >
              Book a live walkthrough
            </a>
          </section>
      </div>
    </div>
  );
}
