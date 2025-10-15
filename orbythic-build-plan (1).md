# Orbythic Website Build Plan

## Project Overview

### Primary Goal
Build a high-performance, SEO-dominated company website for Orbythic that achieves Google sitelinks within 3-6 months, positioning it as the definitive search result for ed-tech queries while showcasing advanced technical capabilities for potential employers.

### Core Requirements
- **Google sitelinks appearance within 6 months**
- Cosmic-themed design with space-inspired animations
- Performance score 95+ on Lighthouse
- SEO-optimized for "ed-tech startup" and "Quasera" keywords
- Mobile-first responsive design
- WCAG 2.1 AA compliant
- Zero build errors, zero console warnings
- Git commit standards without self-referencing
- **Professional standards: No emojis anywhere in codebase, commits, or documentation**

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Modules for complex animations
- **Animations**: Framer Motion + GSAP for scroll triggers
- **Database**: Supabase (for waitlist/contact forms)
- **CMS**: MDX for blog/docs
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics 4
- **SEO**: Next-SEO + structured data
- **Monitoring**: Google Search Console (primary), Ahrefs/SEMrush

---

## Phase 0: Google Sitelinks Strategy (Pre-Development Planning)

### Understanding Google Sitelinks Requirements

**What Google Looks For**:
1. **Brand Authority**: Strong, unique brand name that users search for
2. **Site Structure**: Clear hierarchy with distinct, valuable sections
3. **User Signals**: High CTR, low bounce rate, multiple page visits
4. **Technical Excellence**: Fast, mobile-friendly, error-free
5. **Search Volume**: Regular branded searches (500+ monthly minimum)

### Pre-Launch Preparation

**Domain Strategy**:
- Secure orbythic.com (exact match domain)
- Set up SSL immediately (HTTPS required)
- Configure www redirect to non-www (or vice versa)
- Set up Google Search Console before launch

**Content Strategy for 8 Sitelink Pages**:
1. **Homepage** - Company overview, clear navigation
2. **Quasera** - Product deep-dive (most important after home)
3. **Solutions** - User segments and use cases
4. **Pricing** - Clear tiers and comparison
5. **Documentation** - Comprehensive help center
6. **Blog** - Thought leadership and updates
7. **About** - Company story and mission
8. **Contact** - Multiple contact methods

**Each Page Must Score**:
- Unique value proposition
- 1000+ words of original content
- Clear, action-oriented title tag
- Compelling meta description
- Fast load time (<2 seconds)
- Internal links to related pages

### Competitive Analysis

**Study Successful Sitelinks** (OpenAI, Vercel, Stripe):
- Navigation structure patterns
- Content depth and quality
- Internal linking strategies
- Schema markup implementation
- URL structure and naming
- Meta tag patterns

---

## Phase 1: Foundation Setup (Week 1)

### 1.1 Project Initialization
```
Directory Structure:
/src
  /app
    /(marketing)
      /page.tsx
      /quasera/page.tsx
      /solutions/page.tsx
      /pricing/page.tsx
      /blog/page.tsx
      /docs/page.tsx
      /careers/page.tsx
      /contact/page.tsx
      /legal/page.tsx
    /api
      /waitlist/route.ts
      /contact/route.ts
  /components
    /ui
    /sections
    /animations
  /lib
    /utils
    /constants
    /hooks
  /styles
    /globals.css
    /cosmic.module.css
  /content
    /blog
    /docs
```

### 1.2 Configuration Files for SEO Dominance
- **next.config.js**: Image optimization, redirects, security headers
- **tailwind.config.js**: Custom cosmic color palette, animation utilities
- **tsconfig.json**: Strict mode enabled, path aliases configured
- **.env.local**: API keys, database URLs (never commit)

**robots.txt (Optimized for Sitelinks)**:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Main pages priority for crawling
Allow: /quasera
Allow: /solutions
Allow: /pricing
Allow: /docs
Allow: /blog
Allow: /about
Allow: /contact

Sitemap: https://orbythic.com/sitemap.xml
```

**sitemap.xml Structure**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://orbythic.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://orbythic.com/quasera</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://orbythic.com/solutions</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://orbythic.com/pricing</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://orbythic.com/docs</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://orbythic.com/blog</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

**Next.js SEO Config**:
```javascript
// Default SEO configuration
const defaultSEO = {
  titleTemplate: '%s | Orbythic',
  defaultTitle: 'Orbythic - Transform Education with AI',
  description: 'Discover Quasera by Orbythic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbythic.com/',
    siteName: 'Orbythic',
  },
  twitter: {
    handle: '@orbythic',
    site: '@orbythic',
    cardType: 'summary_large_image',
  },
}
```

### 1.3 SEO Foundation for Google Sitelinks
**Primary Goal: Achieve Google Sitelinks within 3-6 months**

**Structured Data Implementation**:
```json
Organization Schema:
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Orbythic",
  "url": "https://orbythic.com",
  "logo": "https://orbythic.com/logo.png",
  "sameAs": [
    "https://twitter.com/orbythic",
    "https://linkedin.com/company/orbythic",
    "https://github.com/orbythic"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://orbythic.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

WebSite Schema with SearchBox:
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Orbythic",
  "url": "https://orbythic.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://orbythic.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

SoftwareApplication Schema for Quasera:
{
  "@type": "SoftwareApplication",
  "name": "Quasera",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**Sitelinks Optimization Strategy**:
- Clear URL structure: /quasera, /solutions, /pricing, /docs
- Unique meta titles under 60 chars for each page
- Distinct meta descriptions under 160 chars
- Internal linking from homepage to all major sections
- Breadcrumb navigation on all pages
- XML sitemap with priority scores (Homepage=1.0, Main pages=0.8)
- Submit sitemap to Google Search Console immediately

### 1.4 Git Setup
```
Commit Message Format:
feat: add cosmic hero animation
fix: resolve hydration mismatch in solutions page
perf: optimize GSAP bundle size
docs: update README with deployment steps

Branch Strategy:
main (production)
develop (staging)
feature/[feature-name]

CRITICAL Git Rules:
1. All commits must appear as original developer work
2. Never mention AI, Claude, ChatGPT, Copilot, or any assistance tools
3. Never use auto-generated commit messages
4. NO EMOJIS in commit messages, branch names, or PR titles
5. Review each commit message before pushing
6. If using any tools locally, add them to .gitignore
```

**Pre-commit Hook Setup (optional but recommended):**
```bash
# .git/hooks/pre-commit
# Prevents accidental AI references and emojis in commits
grep -i "claude\|chatgpt\|ai\|generated\|copilot\|automated" "$1" && {
  echo "ERROR: Commit message contains forbidden references"
  exit 1
}
# Block emoji usage
grep -E "[😀-🙏🌀-🗿🚀-🛿☀-⛿✀-➿]" "$1" && {
  echo "ERROR: Commit message contains emojis"
  exit 1
}
```

---

## Phase 2: Design System (Week 1-2)

### 2.1 Cosmic Theme Variables
```
Color Palette:
--cosmic-deep: #0a0e27 (deep space background)
--nebula-purple: #6366f1 (primary actions)
--stellar-blue: #3b82f6 (secondary)
--aurora-green: #10b981 (success states)
--starlight: #fafafa (text on dark)
--cosmic-gradient: linear purple to blue with stars

Typography:
--font-display: Inter or SF Pro Display
--font-body: Inter or system fonts
--font-mono: JetBrains Mono for code
```

### 2.2 Component Library
- Button (with cosmic glow hover effect)
- Card (glassmorphism with subtle animation)
- Navigation (sticky with backdrop blur)
- Footer (constellation pattern background)
- Form elements (floating labels, cosmic focus states)

### 2.3 Animation Patterns
- **Entrance**: Fade up with parallax stars
- **Scroll**: Elements emerge from cosmic fog
- **Hover**: Subtle glow and scale
- **Loading**: Orbiting planets spinner
- **Transitions**: Smooth page transitions with cosmic wipe

---

## Phase 3: Core Pages Development (Week 2-3)

### Google Sitelinks Architecture

**Navigation Hierarchy for Sitelinks**:
```
Orbythic (Homepage)
├── Quasera (Product showcase)
├── Solutions (User segments)
├── Pricing (Plans and tiers)
├── Documentation (Help center)
├── Blog (Thought leadership)
├── About (Company story)
└── Contact (Get in touch)
```

**Each Page Must Have**:
- Unique, keyword-rich H1 tag
- Minimum 500 words of unique content
- 3+ internal links to other pages
- Schema markup specific to page type
- Load time under 2 seconds
- Mobile-responsive design
- Clear CTA above the fold

### 3.1 Homepage
**Title Tag**: "Orbythic - Transform Education with AI-Powered Learning"
**Meta Description**: "Discover Quasera by Orbythic, the next-generation educational platform that adapts to how students learn. Join 10,000+ learners worldwide."

**Hero Section**:
- Animated star field background (Canvas/WebGL)
- Floating text with typewriter effect
- "Transforming Education Across the Cosmos" tagline
- CTA: "Join the Waitlist" with particle explosion on hover
- Search bar prominently displayed (for SearchAction schema)

**Critical for Sitelinks**:
- Navigation menu with all 8 main sections visible
- Footer with complete sitemap
- High click-through rate to sub-pages
- Low bounce rate (target <40%)

### 3.2 Quasera Product Page
**Title Tag**: "Quasera - Adaptive Learning Platform by Orbythic"
**Meta Description**: "Quasera uses AI to personalize education for every student. Features include adaptive assessments, real-time progress tracking, and collaborative tools."

- Interactive feature showcase with orbit navigation
- Benefits grid with constellation connections
- Technical architecture diagram (shows expertise)
- Roadmap timeline styled as space journey
- Demo video embed with custom player
- **Internal links**: Link to Solutions, Pricing, Documentation

### 3.3 Solutions Page
**Tab Implementation**:
- Students: Study tools, collaboration features
- Study Teams: Group dynamics, shared progress
- Bootcamps: Curriculum integration, tracking
- Research Labs: Data analytics, custom modules

Each tab animates in with stagger effect, includes relevant icons, use cases, and CTAs.

### 3.4 Pricing Page
- Three-tier cards with hover lift effect
- Feature comparison table with tooltips
- "Coming Soon" overlay if not ready
- ROI calculator (interactive)
- FAQ accordion at bottom

---

## Phase 4: Content & Dynamic Features (Week 3-4)

### 4.1 Blog System
- MDX setup for rich content
- Categories: Engineering, Product Updates, Ed-Tech Insights
- Reading time, author info, share buttons
- Related posts algorithm
- RSS feed generation
- Search functionality with Algolia or custom

### 4.2 Documentation
- Sidebar navigation with search
- Code syntax highlighting (Prism.js)
- Copy code buttons
- Version selector (for future)
- Keyboard shortcuts modal
- Interactive API playground (if applicable)

### 4.3 Database Integration
**Waitlist System**:
- Email validation and duplicate check
- Welcome email automation
- Position in queue display
- Admin dashboard for viewing signups

**Contact Form**:
- Rate limiting (max 3 per hour per IP)
- Spam protection (honeypot + reCAPTCHA v3)
- Auto-response system
- Slack/Discord notification integration

---

## Phase 5: Performance & SEO Optimization (Week 4)

### 5.1 Core Web Vitals
- LCP under 2.5s: Optimize hero image, preload fonts
- FID under 100ms: Code split, lazy load below fold
- CLS under 0.1: Reserve space for images, stable layouts
- Use Partytown for third-party scripts

### 5.2 Bundle Optimization
- Dynamic imports for heavy components
- Tree shake unused CSS/JS
- Optimize images with next/image
- Implement ISR for blog posts
- Edge runtime for API routes

### 5.3 Google Search Console Optimization for Sitelinks

**Immediate Actions Post-Launch**:
1. Verify domain ownership in Search Console
2. Submit XML sitemap with correct priority values
3. Request indexing for all main pages
4. Set preferred domain (www or non-www)
5. Monitor Coverage report daily

**Sitelinks Eligibility Checklist**:
- Brand name "Orbythic" in title tag of homepage
- Site architecture depth of exactly 2-3 levels
- Clear, descriptive anchor text for internal links
- Minimum 8 high-quality pages with substantial content
- Fast loading times (all pages under 3s)
- Mobile usability score 100% in Search Console
- No crawl errors or 404s
- Consistent NAP (Name, Address, Phone) across web

**Advanced Sitelinks Tactics**:
```
Internal Link Structure:
Homepage → All 8 main sections (header nav)
Each main section → 3+ related pages
Blog posts → Link to product pages
Documentation → Link to solutions

Anchor Text Strategy:
"Quasera Platform" not "click here"
"Pricing Plans" not "learn more"
"Student Solutions" not "this page"
```

**Search Appearance Optimization**:
- Implement breadcrumb structured data on all pages
- Use Table of Contents with jump links on long pages
- Add FAQ schema to relevant pages
- Include HowTo schema for documentation
- Event schema for webinars/launches

**Monthly SEO Tasks**:
- Update sitemap with new content
- Check for crawl errors
- Monitor click-through rates
- A/B test meta descriptions
- Track branded search volume
- Build high-quality backlinks from edu domains

---

## Phase 6: Animation Polish (Week 4-5)

### 6.1 GSAP Implementation
- ScrollTrigger for section reveals
- Timeline animations for complex sequences
- Performance: Use will-change sparingly
- Reduce motion for accessibility preference

### 6.2 Micro-interactions
- Button magnetic effect near cursor
- Link underline animations
- Form field cosmic glow on focus
- Card tilt on hover (React Tilt)
- Smooth scroll with easing

### 6.3 Page Transitions
- Framer Motion layout animations
- Preserve scroll position
- Loading progress bar
- Exit animations before route change

---

## Phase 7: Testing & Quality Assurance (Week 5)

### 7.1 Testing Strategy
- Unit tests for utilities (Vitest)
- Integration tests for forms (Playwright)
- Visual regression tests (Percy)
- Accessibility audit (axe-core)
- Cross-browser testing (BrowserStack)

### 7.2 Performance Monitoring
- Lighthouse CI in GitHub Actions
- Bundle size tracking
- Real user monitoring (RUM)
- Error tracking with Sentry
- Analytics funnel optimization

### 7.3 SEO Validation
- Google Search Console setup
- Structured data testing tool
- Mobile-friendly test
- Core Web Vitals monitoring
- Backlink opportunities identified

---

## Phase 8: Launch Preparation (Week 6)

### 8.1 Pre-launch Checklist
- All forms tested with edge cases
- 404 page designed and functional
- Legal pages reviewed and complete
- Social media meta tags verified
- Analytics goals configured
- SSL certificate active
- Security headers implemented
- Rate limiting on all endpoints

### 8.2 Content Review
- Spell check all content
- Consistent tone and messaging
- CTAs clear and compelling
- No placeholder text remaining
- All links functional
- Images optimized and CDN cached
- **No emojis in any user-facing text**
- **Professional, clean copy throughout**
- **Error messages use clear language, not cute phrases**

### 8.3 Deployment Configuration
- Environment variables secured
- Preview deployments for PRs
- Production branch protected
- Monitoring alerts configured
- Backup strategy in place
- DNS configured correctly

---

## Phase 9: Post-Launch SEO & Brand Building (Ongoing)

### 9.1 Week 1-2 Post Launch (Sitelinks Foundation)
- Submit to Google Search Console immediately
- Request indexing for all 8 main pages
- Monitor 404s and fix broken links
- Set up Google Business Profile (even for online-only business)
- Create consistent social media profiles
- Submit to startup directories (ProductHunt, BetaList, StartupBase)

### 9.2 Month 1 (Building Authority)
**Content Strategy for Sitelinks**:
- Publish 4 high-quality blog posts (2000+ words each)
- Create "Orbythic" branded search volume:
  - "Orbythic Quasera"
  - "Orbythic pricing"
  - "Orbythic login"
  - "Orbythic documentation"
- Build 10+ high-quality backlinks:
  - Guest posts on ed-tech blogs
  - University partnerships/mentions
  - Dev.to and Medium articles
  - GitHub repository with 50+ stars

**Brand Signal Optimization**:
- Consistent NAP across all platforms
- Wikipedia page (if eligible)
- Crunchbase profile
- LinkedIn company page with regular updates
- Google Knowledge Panel eligibility

### 9.3 Month 2-3 (Sitelinks Qualification)
**Metrics to Achieve**:
- 1000+ branded searches per month
- Domain Authority 20+ (Moz)
- 8+ pages with <30% bounce rate
- Average session duration >2 minutes
- 50+ referring domains
- Site-wide CTR >2% in Search Console

**User Engagement Signals**:
- Implement on-site search (critical for SearchAction)
- Add user reviews/testimonials schema
- Create interactive tools (ROI calculator, quiz)
- Build email list with 500+ subscribers
- Active blog comments section

### 9.4 Month 3-6 (Sitelinks Appearance)
**Expected Timeline**:
- Month 1-2: Pages indexed, brand recognition starts
- Month 3-4: Mini-sitelinks may appear (2 links)
- Month 5-6: Full sitelinks (6-8 links) for brand searches

**Monitoring & Optimization**:
- Track "site:orbythic.com" searches
- Monitor Search Console for sitelinks data
- Test different meta descriptions for CTR
- Ensure zero downtime (use uptime monitoring)
- Keep content fresh with weekly updates

---

## Success Metrics

### SEO & Sitelinks KPIs (Primary Goal)
- **Month 3**: Mini-sitelinks (2 links) appearing for "Orbythic" search
- **Month 6**: Full sitelinks (6-8 links) in Google search results
- **Branded search volume**: 1000+ searches/month for "Orbythic"
- **Domain Authority**: 20+ within 6 months
- **Search Console Coverage**: 100% valid pages, zero errors
- **SERP Features**: Sitelinks, SearchBox, Knowledge Panel
- **Position 1** for "Orbythic" and "Quasera" searches

### Technical KPIs
- Lighthouse score: 95+
- First Contentful Paint: <1.8s
- Time to Interactive: <3.8s
- Search Console impressions: Growing 20% monthly
- Zero console errors in production
- **All 8 main pages in Google index within 48 hours**
- **Rich results eligible**: Organization, WebSite, SoftwareApplication

### Business KPIs
- Waitlist signups: 100+ in first month
- Blog traffic: 1000+ monthly visitors
- Contact form submissions: 10+ qualified leads
- Time on site: >2 minutes average
- Bounce rate: <40%
- **Pages per session**: >3 (indicates good internal navigation)
- **Direct traffic**: 30%+ (brand recognition)

### Developer Portfolio KPIs
- GitHub stars on repo
- Technical blog posts shared
- Recruiters reaching out via contact form
- Code quality demonstrating senior-level skills
- Architecture decisions showing scalability thinking
- **Google search for your name shows Orbythic as top result**

---

## Risk Mitigation

### Common Pitfalls to Avoid
- Over-engineering animations causing performance issues
- SEO penalties from thin content or keyword stuffing
- Complex build causing deployment failures
- Accessibility violations limiting audience
- Security vulnerabilities in form handling

### Contingency Plans
- Fallback to static HTML if JS fails
- Progressive enhancement for animations
- CDN fallbacks for critical resources
- Database connection pooling limits
- Rate limiting on all public endpoints

---

## Notes for Implementation

### Git Commit Standards
- Use conventional commits format
- **CRITICAL: Never reference AI tools, Claude, Copilot, or any AI assistance in commits**
- **Never use phrases like "AI-generated", "Claude suggested", "automated by", etc.**
- **Write commits as if you personally wrote every line of code**
- Keep commits atomic and descriptive
- Sign commits with GPG key
- Squash commits before merging to main

**Forbidden Commit Examples:**
- Bad: "Add hero section (generated by Claude)"
- Bad: "Fix animation bug suggested by AI"
- Bad: "Implement Claude's optimization"
- Bad: "AI-assisted refactor of utils"
- Bad: "feat: add awesome feature 🚀"
- Bad: "fix: squash bug 🐛"

**Correct Commit Examples:**
- Good: "feat: implement cosmic hero animation with GSAP"
- Good: "fix: resolve hydration mismatch in solutions tab"
- Good: "perf: optimize bundle size with dynamic imports"
- Good: "refactor: extract reusable animation hooks"
- Good: "docs: update API documentation"

### Code Quality Gates
- Pre-commit hooks for formatting
- **Pre-commit hook to block any AI/Claude/generated references**
- **Pre-commit hook to block emojis in commits**
- TypeScript strict mode no errors
- Zero ESLint warnings
- 100% build success rate
- No any types unless absolutely necessary
- **All code appears as original developer work**
- **GitHub history must show professional solo developer activity**
- **NO EMOJIS in:**
  - Code comments
  - Variable names
  - Documentation
  - UI text/copy
  - Error messages
  - Console logs
  - README files
  - Configuration files

### Documentation Requirements
- README with clear setup instructions (no emojis)
- API documentation if applicable (professional tone, no emojis)
- Component storybook (optional but impressive)
- Architecture decision records
- Deployment runbook
- **Professional writing standards:**
  - No emojis anywhere
  - Clear, technical language
  - Consistent formatting
  - No casual internet slang
  - Formal variable naming conventions

---

## Timeline Summary

**Total Duration**: 6 weeks to production-ready

- Week 1: Foundation and setup
- Week 2: Design system and core components
- Week 3: Main pages development
- Week 4: Content systems and optimization
- Week 5: Testing and polish
- Week 6: Launch preparation

**Post-Launch**: Continuous iteration based on metrics

This build plan prioritizes a professional appearance while being achievable for a solo developer. The cosmic theme provides unique branding while the technical implementation demonstrates senior-level engineering skills suitable for job applications.