# Orbythic

Transform education with AI-powered adaptive learning. Orbythic builds Quasera, an adaptive operating system for learning that scales personalized education across universities, bootcamps, and corporate academies.

## Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 with custom cosmic theme
- **Animations**: Framer Motion + GSAP
- **Database**: Supabase
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update .env.local with your Supabase credentials

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Key Features

- Cosmic-themed design with space-inspired animations
- SEO-optimized for Google sitelinks
- Comprehensive structured data (Organization, Website, SoftwareApplication)
- Dynamic sitemap and robots.txt generation
- Rate-limited API routes for contact and waitlist
- Pre-commit hooks to maintain professional standards
- Custom 404 page
- Blog system with MDX support
- Accessibility-first design

## Project Structure

- `/src/app` - Next.js App Router pages and API routes
- `/src/components` - React components (UI and sections)
- `/src/content` - MDX blog posts
- `/src/lib` - Utilities, hooks, and constants
- `/src/styles` - Global styles and CSS modules

## Documentation

See [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) for complete implementation details, deployment checklist, and architecture overview.

## License

Proprietary - All rights reserved
