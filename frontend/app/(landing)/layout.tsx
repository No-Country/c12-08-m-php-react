import { LandingNavbar } from '@/components';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <LandingNavbar />
      </header>
      <main className=' px-20 '>{children}</main>
    </>
  );
}
