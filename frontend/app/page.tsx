import LandingNavbar from '@/components/LandingNavbar/LandingNavbar';
import LandingShowcase from '@/components/LandingShowcase/LandingShowcase';

export default function Landing() {
  return (
    <>
      <header>
        <LandingNavbar />
        <LandingShowcase />
      </header>
    </>
  );
}
