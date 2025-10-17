import Link from 'next/link';
import type { Metadata } from 'next';
import { Calendar, Clock, User } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { getPageMetadata } from '@/lib/utils/seo';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = getPageMetadata('blog');

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Blog"
            title="Insights on AI-Powered Learning"
            subtitle="Follow our journey as we build Quasera and explore the intersection of artificial intelligence, education, and student success."
          />
        </ScrollReveal>

        {posts.length === 0 ? (
          <ScrollReveal>
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 p-8 md:p-12">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
                  <Calendar className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-starlight">Blog Coming Soon</h2>
                  <p className="mt-3 text-lg text-starlight/70">
                    We are currently focused on building Quasera and preparing for early access launch.
                  </p>
                  <p className="mt-2 text-starlight/60">
                    Our blog will launch alongside the platform, featuring insights on AI-powered learning,
                    product development updates, and the future of education technology.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_30px_80px_rgba(10,14,39,0.55)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/5 to-stellar-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-block rounded-full bg-nebula-purple/10 px-3 py-1 text-xs font-medium text-nebula-purple">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-starlight/60">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-starlight transition-colors duration-300 group-hover:text-nebula-purple">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-starlight/70">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-starlight/60" />
                        <div className="text-sm">
                          <p className="font-medium text-starlight">{post.author}</p>
                          {post.authorRole && (
                            <p className="text-xs text-starlight/60">{post.authorRole}</p>
                          )}
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-2 text-xs text-starlight/60">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-nebula-purple">
                      <span>Read article</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal>
          <section className="rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold text-starlight">Stay Updated</h3>
              <p className="mt-3 text-starlight/70">
                Be the first to know when we publish new articles about AI-powered learning,
                product updates, and early access opportunities.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  disabled
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight placeholder-starlight/40 opacity-50 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20"
                />
                <button
                  type="button"
                  disabled
                  className="rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white opacity-50 transition-all duration-300"
                >
                  Coming Soon
                </button>
              </div>
              <p className="mt-4 text-xs text-starlight/50">
                Newsletter subscription will be available at launch
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-starlight">Join the Journey</h3>
            <p className="mt-3 text-starlight/70">
              Learn more about Quasera and join our early access waitlist
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/quasera"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-starlight transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/40 hover:bg-white/[0.08]"
              >
                Explore Quasera
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Join Waitlist
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
