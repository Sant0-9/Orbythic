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
    <div className="bg-black">
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-nebula-purple transition-colors hover:text-nebula-purple/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-nebula-purple/10 px-3 py-1 text-xs font-medium text-nebula-purple">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-starlight md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-xl text-starlight/70">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-starlight/60">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <div>
                <span className="font-medium text-starlight">{post.author}</span>
                {post.authorRole && (
                  <span className="text-starlight/60"> • {post.authorRole}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:text-starlight prose-p:text-starlight/80 prose-a:text-nebula-purple prose-a:no-underline hover:prose-a:text-nebula-purple/80 prose-strong:text-starlight prose-code:text-stellar-blue prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-white/10 prose-table:text-starlight prose-th:border-white/10 prose-td:border-white/10 prose-blockquote:border-nebula-purple/40 prose-blockquote:text-starlight/90">
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

        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-bold text-starlight">About the Author</h3>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nebula-purple/10">
                <User className="h-6 w-6 text-nebula-purple" />
              </div>
              <div>
                <p className="font-semibold text-starlight">{post.author}</p>
                {post.authorRole && (
                  <p className="text-sm text-starlight/60">{post.authorRole}</p>
                )}
                {post.author === 'Shifat Islam Santo' && (
                  <p className="mt-2 text-sm text-starlight/70">
                    Shifat is the founder and CEO of Orbythic, building Quasera to transform
                    how students learn with AI-powered personalized support. As a student developer,
                    he brings firsthand experience of the challenges students face and is passionate
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
      </article>
    </div>
  );
}
