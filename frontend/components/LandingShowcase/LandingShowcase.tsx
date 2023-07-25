import landingImage from '@/public/img/landingImage.png';
import effectLanding from '@/public/svg/effectLanding.svg';
import Image from 'next/image';
import Link from 'next/link';

const LandingShowcase = () => {
  return (
    <section className='w-full min-h-screen items-center bg-gray relative'>
      <div className='flex items-center justify-end'>
        <div>
          <Image
            src={landingImage}
            alt='LandingImage'
            width={800}
            height={920}
            className='z-0'
          />
        </div>
        <div className='max-w flex flex-col items-center'>
          <h1 className='font-poppins font-semibold lg:text-5xl md:text-4xl sm:text-xl text-center z-20 text-base'>
            Tu recordatorio inteligente para una vida más saludable y sin olvidos.
          </h1>
          <p className='font-poppins font-regular text-xl text-center mt-3 z-20'>
            Mantén el control: Una herramienta de recordatorio de medicamentos para ti y
            tus seres queridos.
          </p>
          <Link
            href='/register'
            className='btn-secondary text-center mt-3 p-2 w-48 h-16 z-20 font-semibold text-xl'>
            Comienza ahora
          </Link>
        </div>
        <div className='absolute bottom-0 left-0 w-full text-center z-20'>
          <span className='font-medium text-md'>¿Ya tienes una cuenta? </span>
          <Link href='/login'>
            <span className='text-blue underline font-semibold text-md'>
              Ingresa aquí
            </span>
          </Link>
        </div>
        <div className='absolute bottom-0 left-0 w-full z-10'>
          <Image src={effectLanding} alt='LandingImage' layout='responsive' />
        </div>
      </div>
    </section>
  );
};

export default LandingShowcase;
