import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Calendar, ChevronRight, Clock, Tag } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getPageMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = getPageMetadata('blog');

const featuredPost = {
  title: 'Building Adaptive Learning Systems: Lessons from 40 Deployments',
  excerpt: 'After partnering with universities, bootcamps, and corporate academies to launch Quasera-powered programs, we distilled the most impactful design patterns for orchestrating adaptive learning at scale.',
  slug: 'adaptive-learning-systems-lessons',
  category: 'Product Insights',
  date: '2024-12-15',
  readTime: '8 min read',
  author: 'Malik Chen',
  authorRole: 'Chief Product Officer',
};

const blogPosts = [
  {
    title: 'How Learner Intelligence Graphs Transform Personalization',
    excerpt: 'Traditional learning platforms track completion rates. Quasera models how each learner absorbs concepts, pinpoints misconceptions, and prioritizes the next optimal skill to practice.',
    slug: 'learner-intelligence-graphs',
    category: 'Engineering',
    date: '2024-11-28',
    readTime: '6 min read',
    author: 'Engineering Team',
  },
  {
    title: 'The Pedagogy Behind Scenario-Based Assessments',
    excerpt: 'We partnered with instructional scientists to design an assessment engine that generates adaptive scenarios aligned to accreditation standards while keeping learners engaged.',
    slug: 'scenario-based-assessments',
    category: 'Learning Science',
    date: '2024-11-12',
    readTime: '7 min read',
    author: 'Dr. Priya Rao',
  },
  {
    title: 'Operationalizing AI in Higher Education: A Framework',
    excerpt: 'Higher education institutions face unique challenges when integrating AI. This framework helps program directors evaluate, pilot, and scale adaptive learning technology.',
    slug: 'operationalizing-ai-framework',
    category: 'Ed-Tech Insights',
    date: '2024-10-25',
    readTime: '9 min read',
    author: 'Leena Darzi',
  },
  {
    title: 'Measuring Learning Outcomes: Beyond Completion Rates',
    excerpt: 'Completion rates tell part of the story. We explore how to measure mastery velocity, retention, and application of skills in authentic contexts.',
    slug: 'measuring-learning-outcomes',
    category: 'Learning Science',
    date: '2024-10-10',
    readTime: '5 min read',
    author: 'Dr. Priya Rao',
  },
  {
    title: 'Privacy-First Analytics for Educational Platforms',
    excerpt: 'Balancing powerful learner insights with privacy compliance is critical. Here is how we architected Quasera to deliver analytics without compromising learner trust.',
    slug: 'privacy-first-analytics',
    category: 'Engineering',
    date: '2024-09-18',
    readTime: '6 min read',
    author: 'Engineering Team',
  },
  {
    title: 'The Future of Workforce Readiness Programs',
    excerpt: 'As the skills gap widens, bootcamps and corporate academies must deliver measurable outcomes faster. Adaptive learning is becoming the standard.',
    slug: 'future-workforce-readiness',
    category: 'Ed-Tech Insights',
    date: '2024-09-02',
    readTime: '7 min read',
    author: 'Malik Chen',
  },
];

const categories = [
  'All Posts',
  'Product Insights',
  'Engineering',
  'Learning Science',
  'Ed-Tech Insights',
];

export default function BlogPage() {
  return (
    <div className="bg-cosmic-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Insights on adaptive learning, AI, and education technology"
          subtitle="Stay updated with the latest in educational technology, AI learning insights, and Orbythic product updates. Written by our team of engineers, learning scientists, and product leaders."
        />

        <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 md:p-14 transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_40px_120px_rgba(99,102,241,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-nebula-purple/5 to-stellar-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3 text-sm text-starlight/60">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-nebula-purple/10 px-3 py-1 text-nebula-purple">
                <Tag className="h-3.5 w-3.5" />
                {featuredPost.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {featuredPost.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {featuredPost.readTime}
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-starlight md:text-4xl">
              {featuredPost.title}
            </h2>
            <p className="mt-4 text-lg text-starlight/70 md:text-xl">
              {featuredPost.excerpt}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-nebula-purple to-stellar-blue" />
                <div>
                  <p className="text-sm font-semibold text-starlight">{featuredPost.author}</p>
                  <p className="text-xs text-starlight/60">{featuredPost.authorRole}</p>
                </div>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Read Article
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>

        <section>
          <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-starlight/80 transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/[0.06] hover:text-starlight focus:border-nebula-purple/40 focus:text-starlight"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-nebula-purple/40 hover:shadow-[0_30px_80px_rgba(10,14,39,0.55)]"
              >
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-starlight/60">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-nebula-purple/10 px-2.5 py-1 text-nebula-purple">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-starlight group-hover:text-gradient transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-starlight/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="border-t border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-starlight/60" />
                      <span className="text-xs text-starlight/60">{post.readTime}</span>
                    </div>
                    <span className="text-xs font-medium text-starlight/70">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-12 text-center">
          <h3 className="text-2xl font-semibold text-starlight">Subscribe for updates</h3>
          <p className="text-starlight/70">
            Get the latest insights on adaptive learning, AI in education, and product updates delivered to your inbox.
          </p>
          <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-starlight placeholder-starlight/40 focus:border-nebula-purple/40 focus:outline-none focus:ring-2 focus:ring-nebula-purple/20"
            />
            <button
              type="submit"
              className="rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
