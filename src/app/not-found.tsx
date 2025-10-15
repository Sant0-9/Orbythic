import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl font-semibold text-starlight">
            This sector of the cosmos is unexplored
          </h2>
          <p className="text-xl text-starlight/70">
            The page you are looking for does not exist or has been moved to a different orbit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-cosmic-gradient text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(99,102,241,0.35)]"
          >
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/docs"
            className="inline-flex items-center space-x-2 text-starlight/80 hover:text-starlight border border-white/20 hover:border-nebula-purple/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5"
          >
            <Search className="h-5 w-5" />
            <span>Search Documentation</span>
          </Link>
        </div>

        <div className="pt-12">
          <p className="text-sm text-starlight/50">
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-nebula-purple hover:underline">
              contact our team
            </Link>
            .
          </p>
        </div>

        {/* Floating cosmic elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-nebula-purple rounded-full animate-twinkle" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-stellar-blue rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-aurora-green rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-nebula-purple rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
}
