import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}