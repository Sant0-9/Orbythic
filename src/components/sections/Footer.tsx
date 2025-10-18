import Link from 'next/link';
import Image from 'next/image';

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

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/orbythic-logo.png"
                alt="Orbythic"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="mt-4 text-sm text-starlight/70 leading-relaxed">
              AI-powered learning platform transforming education through intelligent, adaptive technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-starlight">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 transition-colors duration-200 hover:text-starlight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-starlight">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 transition-colors duration-200 hover:text-starlight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-starlight">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 transition-colors duration-200 hover:text-starlight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-starlight">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-starlight/70 transition-colors duration-200 hover:text-starlight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-starlight/60">
            &copy; {new Date().getFullYear()} Orbythic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
