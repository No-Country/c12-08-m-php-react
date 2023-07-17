import Navbar from '@/components/LandingNavbar/LandingNavbar';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
