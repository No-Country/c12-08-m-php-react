import { LandingNavbar } from '@/components';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <LandingNavbar />
      </header>
      <main>{children}</main>
    </>
  );
}
