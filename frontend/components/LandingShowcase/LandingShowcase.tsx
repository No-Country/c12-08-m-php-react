import landingImage from '@/public/img/landingImage.png';
import effectLanding from '@/public/svg/effectLanding.svg';
import Image from 'next/image';
import Link from 'next/link';

const LandingShowcase = () => {
  return (
    <section className='w-full min-h-screen items-center bg-customGray relative'>
      <div className='justify-start h-full'>
        <div>
          <Image
            src={landingImage}
            alt='LandingImage'
            className='z-0 w-100 min-h-max absolute sm:relative buttom-0 sm:bottom-10'
          />
        </div>
        <div className='lg:w-1/2 flex flex-col items-center absolute bottom-40 md:bottom-40 sm:bottom-44 xs:bottom-44 lg:top-40 right-0 mr-3'>
          <h1 className='font-poppins font-bold sm:font-semibold text-center z-20 text-2xl lg:text-6xl sm:text-5xl'>
            Tu recordatorio inteligente para una vida más saludable y sin olvidos.
          </h1>
          <p className='font-poppins font-regular text-md sm:text-2xl text-center mt-3 z-20'>
            Mantén el control: Una herramienta de recordatorio de medicamentos para ti y
            tus seres queridos.
          </p>
          <Link
            href='/register'
            className='btn-secondary text-center mt-8 p-4 sm:p-6 w-auto h-auto z-20 font-semibold text-2xl sm:text-3xl'>
            Comienza ahora
          </Link>
        </div>
        <div className='absolute bottom-10 left-0 w-full text-center z-20'>
          <span className='font-medium text-xl sm:text-lg'>¿Ya tienes una cuenta? </span>
          <Link href='/login'>
            <span className='text-blue underline font-semibold text-xl sm:text-lg'>
              Ingresa aquí
            </span>
          </Link>
        </div>
        <div className='absolute bottom-0 left-0 w-full z-10'>
          <Image src={effectLanding} alt='LandingImage' className='w-full h-2/6' />
        </div>
      </div>
    </section>
  );
};

export default LandingShowcase;
