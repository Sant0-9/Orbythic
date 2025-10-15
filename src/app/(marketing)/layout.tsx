import Navigation from '@/components/sections/Navigation';

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
    </>
  );
}