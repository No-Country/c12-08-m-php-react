import landingImage from '@/public/img/landingImage.jpg';
import Image from 'next/image';
import Link from 'next/link';

const LandingShowcase = () => {
  return (
    <section className='w-full min-h-screen items-center justify-center'>
      <div className='flex items-center justify-end'>
        <div className='max-w flex flex-col'>
          <h1 className='font-poppins font-semibold lg:text-6xl md:text-4xl sm:text-xl text-center'>
            Un recordatorio para ti y la gente que quieres...
          </h1>
          <p className='font-poppins font-regular text-xl text-center mt-3'>
            Mantén el control: Una herramienta de recordatorio de medicamentos para ti y
            tus seres queridos
          </p>
          <Link href='/register' className='btn-secondary text-center mt-3 p-2 w-[200px]'>
            Comienza ahora
          </Link>
        </div>
        <div>
          <Image src={landingImage} alt='LandingImage' width={800} height={920} />
        </div>
      </div>
    </section>
  );
};

export default LandingShowcase;
