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
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-nebula-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/orbythic-logo.png"
                alt="Orbythic"
                width={40}
                height={40}
                className="relative h-10 w-10 rounded-xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-nebula-purple/50 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'text-xl font-bold tracking-tight transition-all duration-300',
                isHomePage && !isScrolled
                  ? 'text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]'
                  : 'text-starlight group-hover:text-gradient'
              )}>
                Orbythic
              </span>
              <span className="text-[10px] text-nebula-purple/80 font-medium tracking-wide">
                AI LEARNING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'text-nebula-purple'
                      : isHomePage && !isScrolled
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-starlight/80 hover:text-starlight hover:bg-white/5'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-nebula-purple rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/pricing"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-nebula-purple via-stellar-blue to-nebula-purple bg-[length:200%_100%] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-nebula-purple/25 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-nebula-purple/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Join Waitlist</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-xl transition-all duration-300',
              isHomePage && !isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-starlight hover:bg-white/5'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl p-4 shadow-2xl">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-nebula-purple/10 text-nebula-purple'
                        : 'text-starlight/80 hover:text-starlight hover:bg-white/5'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/pricing"
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-nebula-purple to-stellar-blue text-white text-center rounded-xl font-semibold text-sm shadow-lg shadow-nebula-purple/25"
                onClick={() => setIsOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
