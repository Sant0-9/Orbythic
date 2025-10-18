'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Quasera', href: '/quasera' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
          ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/orbythic-logo.png"
                alt="Orbythic"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-nebula-purple/40"
                priority
              />
            </div>
            <span className={cn(
              'text-xl font-bold tracking-tight transition-colors duration-300',
              isHomePage && !isScrolled
                ? 'text-white'
                : 'text-starlight group-hover:text-nebula-purple'
            )}>
              Orbythic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-nebula-purple'
                      : isHomePage && !isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-starlight/80 hover:text-starlight'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-cosmic-gradient text-white text-sm font-semibold rounded-lg shadow-lg shadow-nebula-purple/20 transition-all duration-300 hover:shadow-xl hover:shadow-nebula-purple/30 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden transition-colors duration-200',
              isHomePage && !isScrolled ? 'text-white' : 'text-starlight'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 p-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-nebula-purple bg-white/5'
                        : 'text-starlight/80 hover:text-starlight hover:bg-white/5'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="block mt-4 px-3 py-2 bg-cosmic-gradient text-white rounded-lg font-semibold text-sm text-center"
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
