# Orbythic

**Transform Education with AI-Powered Adaptive Learning**

Orbythic builds Quasera, an adaptive operating system for learning that scales personalized education across universities, bootcamps, and corporate academies. Built with cutting-edge technology and designed for measurable outcomes.

![Orbythic Logo](public/orbythic-logo.png)

🌐 **Live Site**: [orbythic.com](https://orbythic.com)

---

## Features

### Core Platform
- **Adaptive Learning Engine** - AI-powered personalization that adapts to each learner's pace and style
- **Learner Intelligence Graph** - Continuous modeling of comprehension and skill mastery
- **Scenario-Based Assessments** - Dynamic, branching challenges that measure applied knowledge
- **Cohort Operations Studio** - Real-time analytics and predictive risk intelligence
- **Multi-Audience Solutions** - Built for students, educators, bootcamps, and research institutions

### Website Features
- **Cosmic Theme** - Space-inspired design with orbital animations and stellar gradients
- **GSAP ScrollTrigger** - Smooth scroll-based reveals and stagger animations
- **SEO Optimized** - Structured data, dynamic sitemap, comprehensive meta tags
- **Performance First** - Fast load times, optimized images, code splitting
- **Accessibility** - WCAG compliant, keyboard navigation, screen reader support
- **Blog System** - MDX-powered blog with rich content and syntax highlighting
- **Form Handling** - Waitlist and contact forms with rate limiting and validation

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 (CSS-first engine) |
| **Animations** | Framer Motion + GSAP ScrollTrigger |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Supabase Auth |
| **Analytics** | Vercel Analytics + Speed Insights |
| **Deployment** | Vercel (Edge Network) |
| **Font** | Inter + JetBrains Mono |

---

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/Orbythic.git
cd Orbythic
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
Orbythic/
├── public/                    # Static assets
│   ├── orbythic-logo.png     # Brand logo
│   └── sitemap.xml           # SEO sitemap
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (marketing)/      # Marketing pages
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── pricing/
│   │   │   ├── quasera/
│   │   │   └── solutions/
│   │   ├── api/              # API routes
│   │   │   ├── contact/
│   │   │   └── waitlist/
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   ├── animations/       # ScrollReveal, StaggerReveal
│   │   ├── sections/         # Hero, Navigation, Footer
│   │   └── ui/               # Reusable UI components
│   ├── content/
│   │   └── blog/             # MDX blog posts
│   ├── lib/
│   │   ├── constants/        # SEO, site config
│   │   ├── hooks/            # Custom React hooks
│   │   └── utils/            # Helper functions
│   └── styles/
│       ├── globals.css       # Global styles + Tailwind
│       └── cosmic.module.css # Cosmic animations
├── .env.example              # Environment template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS config
└── tsconfig.json             # TypeScript config
```

---

## Key Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with animated star field, key metrics |
| **Quasera** | `/quasera` | Product showcase with AI capabilities |
| **Solutions** | `/solutions` | Multi-audience solutions (students, bootcamps, etc.) |
| **Pricing** | `/pricing` | Tiered pricing with FAQ section |
| **About** | `/about` | Company mission, values, leadership |
| **Blog** | `/blog` | Educational content and updates |
| **Contact** | `/contact` | Contact form with validation |
| **Docs** | `/docs` | Documentation (placeholder) |

---

## API Routes

### POST `/api/waitlist`
Join the waitlist for early access.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "role": "student"
}
```

**Response:**
```json
{
  "message": "Successfully joined the waitlist!",
  "position": 42
}
```

### POST `/api/contact`
Submit a contact form request.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "organization": "University of Example",
  "interest": "partnership",
  "message": "I'd like to discuss..."
}
```

---

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended config
- **Pre-commit Hooks** - Prevents emojis and AI references
- **Git Hooks** - Enforces commit message standards

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy automatically on push to main

### Environment Variables (Production)

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_SITE_URL=https://orbythic.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## SEO

- **Dynamic Sitemap** - Auto-generated from routes
- **Structured Data** - Organization, Website, SoftwareApplication schemas
- **Meta Tags** - Optimized for social sharing (OpenGraph, Twitter Cards)
- **Performance** - Lighthouse score 95+
- **Mobile-First** - Responsive design across all devices

---

## Contributing

This is a proprietary project. Contact the team for collaboration opportunities.

---

## License

**Proprietary** - All rights reserved by Orbythic.

---

## Support

- **Website**: [orbythic.com](https://orbythic.com)
- **Email**: contact@orbythic.com
- **Documentation**: [orbythic.com/docs](https://orbythic.com/docs)

---

## Acknowledgments

Built with modern web technologies and a commitment to transforming education through adaptive learning. Designed for institutions that value outcomes, accessibility, and human-centered design.

---

**Orbythic** - Transform Education with AI-Powered Learning
