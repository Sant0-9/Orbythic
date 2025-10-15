import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const footerNavigation = {
  product: [
    { name: 'Quasera', href: '/quasera' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Documentation', href: '/docs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Help Center', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Best Practices', href: '/docs/best-practices' },
    { name: 'Community', href: '/community' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Security', href: '/legal/security' },
    { name: 'Accessibility', href: '/legal/accessibility' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/orbythic' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/orbythic' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/orbythic' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cosmic-deep-900/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/orbythic-logo.png"
                alt="Orbythic"
                width={160}
                height={40}
                className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <p className="mt-4 text-sm text-starlight/70">
              Transform education with AI-powered adaptive learning. Built for institutions that value outcomes, accessibility, and human-centered design.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-starlight/60 hover:text-nebula-purple transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-starlight">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 hover:text-starlight transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-starlight">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 hover:text-starlight transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-starlight">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 hover:text-starlight transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-starlight">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 hover:text-starlight transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-starlight/60">
              &copy; {new Date().getFullYear()} Orbythic. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-starlight/60">
              <span>Built with Next.js, Tailwind CSS, and Framer Motion</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-nebula-purple rounded-full animate-twinkle" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-stellar-blue rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-aurora-green rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  );
}
