import Link from 'next/link';
import Image from 'next/image';
import { Mail, GitBranch, ExternalLink } from 'lucide-react';

const footerNavigation = {
  product: [
    { name: 'Quasera', href: '/quasera' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-nebula-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <Image
                src="/orbythic-logo.png"
                alt="Orbythic"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-nebula-purple/50"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-starlight group-hover:text-gradient transition-all duration-300">
                  Orbythic
                </span>
                <span className="text-xs text-nebula-purple/80 font-medium tracking-wide">
                  AI LEARNING PLATFORM
                </span>
              </div>
            </Link>
            
            <p className="mt-6 text-sm leading-relaxed text-starlight/70 max-w-md">
              Building Quasera, an AI-powered academic operating system that transforms how students learn through intelligent agents, adaptive scheduling, and personalized support.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="mailto:hello@orbythic.com"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-starlight/80 backdrop-blur transition-all duration-300 hover:border-nebula-purple/40 hover:bg-white/10 hover:text-starlight"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
              <a
                href="https://github.com/Sant0-9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-starlight/80 backdrop-blur transition-all duration-300 hover:border-stellar-blue/40 hover:bg-white/10 hover:text-starlight"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h3 className="text-sm font-bold text-starlight mb-4">Product</h3>
              <ul className="space-y-3">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-starlight/70 transition-colors duration-300 hover:text-starlight"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-starlight mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-starlight/70 transition-colors duration-300 hover:text-starlight"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-nebula-purple/10 via-transparent to-stellar-blue/10 p-6 backdrop-blur">
              <h3 className="text-sm font-bold text-starlight">Early Access</h3>
              <p className="mt-2 text-xs text-starlight/70 leading-relaxed">
                Join the waitlist to be among the first to experience Quasera when it launches.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-nebula-purple to-stellar-blue px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-nebula-purple/25 transition-all duration-300 hover:shadow-xl hover:shadow-nebula-purple/40 hover:-translate-y-0.5"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-starlight/50">
              &copy; {new Date().getFullYear()} Orbythic. Built with passion by{' '}
              <span className="text-nebula-purple">Shifat Islam Santo</span>.
            </p>
            <div className="flex items-center gap-1 text-xs text-starlight/50">
              <span>In active development</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-aurora-green animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-nebula-purple/20 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-stellar-blue/20 to-transparent" />
      </div>
    </footer>
  );
}
