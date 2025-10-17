import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole?: string;
  published: boolean;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        category: data.category || '',
        date: data.date || '',
        readTime: data.readTime || '',
        author: data.author || '',
        authorRole: data.authorRole,
        published: data.published ?? true,
        content,
      };
    })
    .filter(post => post.published)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      date: data.date || '',
      readTime: data.readTime || '',
      author: data.author || '',
      authorRole: data.authorRole,
      published: data.published ?? true,
      content,
    };
  } catch {
    return null;
  }
}
