import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';
import MermaidCodeBlock from '@/components/blog/MermaidCodeBlock';
import '../blog.css';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Orbythic Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%)]" />
      <article className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-20 shadow-[0_35px_80px_rgba(8,7,33,0.6)] backdrop-blur-sm sm:px-9 lg:px-14">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/[0.15] via-white/[0.04] to-transparent" />
          <div className="absolute -left-40 top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(129,140,248,0.25),transparent_60%)] blur-3xl" />
          <div className="absolute -right-32 bottom-4 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.22),transparent_65%)] blur-3xl" />
        </div>

        <div className="relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-starlight/70 transition-all duration-300 hover:border-nebula-purple/40 hover:text-nebula-purple"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>

          <header className="mt-10 space-y-6 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-nebula-purple/30 bg-nebula-purple/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-nebula-purple/90">
              {post.category}
            </div>

            <h1 className="text-4xl font-semibold leading-snug text-starlight md:text-5xl md:leading-tight">
              {post.title}
            </h1>

            <p className="max-w-2xl text-lg text-starlight/75 md:text-xl">
              {post.excerpt}
            </p>

            <div className="grid gap-3 text-sm text-starlight/70 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_12px_25px_rgba(8,7,33,0.45)]">
                <User className="h-4 w-4 text-nebula-purple/80" />
                <div>
                  <span className="font-medium text-starlight">{post.author}</span>
                  {post.authorRole && (
                    <span className="block text-xs text-starlight/60">{post.authorRole}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_12px_25px_rgba(8,7,33,0.45)]">
                <Calendar className="h-4 w-4 text-nebula-purple/80" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_12px_25px_rgba(8,7,33,0.45)]">
                <Clock className="h-4 w-4 text-nebula-purple/80" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-lg mt-12 max-w-none tracking-wide prose-blockquote:text-starlight prose-code:text-slate-200 prose-headings:font-semibold prose-headings:text-starlight prose-lead:text-starlight/85 prose-li:marker:text-nebula-purple/80 prose-ol:marker:text-starlight/60 prose-p:text-starlight/85 prose-strong:text-starlight prose-table:text-starlight">
            <MDXRemote
              source={post.content}
              components={{
                pre: MermaidCodeBlock,
              }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          <footer className="mt-16 border-t border-white/10 pt-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-10 shadow-[0_20px_50px_rgba(8,7,33,0.45)] backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-starlight">About the Author</h3>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[radial-gradient(circle,_rgba(99,102,241,0.28),rgba(99,102,241,0.05))]">
                  <User className="h-7 w-7 text-nebula-purple" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-starlight">{post.author}</p>
                  {post.authorRole && (
                    <p className="text-sm text-starlight/60">{post.authorRole}</p>
                  )}
                  {post.author === 'Shifat Islam Santo' && (
                    <p className="text-sm text-starlight/70">
                      Shifat is the founder and CEO of Orbythic, building Quasera to transform how
                      students learn with AI-powered personalized support. As a student developer, he
                      brings firsthand experience of the challenges students face and is passionate
                      about creating technology that genuinely enhances education.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-starlight transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-purple/40 hover:bg-white/[0.08]"
              >
                <ArrowLeft className="h-4 w-4" />
                More Articles
              </Link>
              <Link
                href="/pricing"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cosmic-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
              >
                Join Early Access
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
