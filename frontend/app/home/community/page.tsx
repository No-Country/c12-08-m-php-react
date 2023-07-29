import { GenericContainer, LottieAnimation } from '@/components';
import animationData from '@/public/assets/animation_lkkp3cm3.json';

const Comunity = () => {
  return (
    <GenericContainer title='Comunidad' color='white' colortitle='black' href='/home'>
      <div className='flex flex-col items-center justify-center mx-10 relative'>
        <span className='font-semibold text-center text-xl absolute top-80 sm:top-16 z-10'>
          ¡Ups! Parece que estamos construyendo una comunidad genial para ti. ¡Vuelve
          pronto para unirte y ser parte de nuestra comunidad!
        </span>
      </div>
      <LottieAnimation animationData={animationData} />
    </GenericContainer>
  );
};

export default Comunity;
