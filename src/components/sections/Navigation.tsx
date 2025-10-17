'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navigation = [
  { name: 'Quasera', href: '/quasera' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cosmic-deep/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/orbythic-logo.png"
              alt="Orbythic"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md bg-white/5 p-1 ring-1 ring-white/10 transition duration-300 group-hover:ring-nebula-purple/40"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-starlight group-hover:text-gradient transition-colors duration-300">
              Orbythic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-starlight/80 hover:text-starlight hover:text-gradient transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button
              type="button"
              aria-label="Search Orbythic"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-starlight/70 backdrop-blur transition duration-300 hover:border-nebula-purple/40 hover:text-starlight"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="bg-cosmic-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-nebula-purple/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              aria-label="Search Orbythic"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-starlight/70 backdrop-blur transition duration-300 hover:border-nebula-purple/40 hover:text-starlight"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-starlight hover:text-nebula-purple transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cosmic-deep/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-starlight/80 hover:text-starlight hover:bg-white/5 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 bg-cosmic-gradient text-white rounded-md font-semibold text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
