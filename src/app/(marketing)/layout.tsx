import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import StarfieldBackground from '@/components/backgrounds/starfield/RootStarfield';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <StarfieldBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}