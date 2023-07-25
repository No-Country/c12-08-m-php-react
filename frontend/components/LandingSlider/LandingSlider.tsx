import slider1 from '@/public/img/slider1.jpg';
import slider2 from '@/public/img/slider2.jpg';
import slider3 from '@/public/img/slider3.jpg';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

const SLIDES_DATA = [
  {
    src: slider1,
    title: 'Un recordario para ti y la gente que quieres...',
    alt: 'Woman taking a pill',
    desc: 'Mantén el control: Una herramienta de recordatorio de medicamentos para ti y tus seres queridos',
  },
  {
    src: slider2,
    title: 'Accede a tu cuenta y mantén tu medicación bajo control.',
    alt: 'Doctor',
    desc: 'Organiza tu rutina de medicación: Crea planes personalizados con horarios y tareas para un seguimiento efectivo',
  },
  {
    src: slider3,
    title: 'Iniciar sesión para un mejor manejo de tus medicamentos.',
    alt: 'Adult couple',
    desc: 'Visualiza tu calendario de medicación: Accede a un calendario intuitivo que muestra tus actividades y tareas programadas',
  },
];

const LandingSlider = () => {
  // const [sliderRef, instanceRef] = useKeenSlider(
  //   {
  //     slideChanged() {
  //       console.log('slide changed');
  //     },
  //   },
  //   [
  //     // add plugins here
  //   ]
  // );
  return (
    <div className='w-10/12'>
      <div className='keen-slider bg-red-800'>
        {SLIDES_DATA.map(slide => (
          <div className='keen-slider__slide flex justify-between'>
            <div className='flex-1'>
              <p>{slide.title}</p>
              <p>{slide.desc}</p>
            </div>
            <div className='h-20 flex-1'>
              <Image width={100} height={100} src={slide.src} alt={slide.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingSlider;
