import LandingTitle from '@/components/LandingTitle/LandingTitle';
import benefitsImage from '@/public/img/benefitsImage.jpg';
import Image from 'next/image';

import BenefitsItem from './BenefitsItem';
import BenefitsItemsContainer from './BenefitsItemsContainer';
import BenefitsList from './BenefitsList';

const benefits = [
  {
    item: 'Recordatorios precisos',
    description:
      'PillCare te brinda recordatorios precisos para tomar tus medicamentos en el momento adecuado. Ya no tendrás que preocuparte por olvidar una dosis importante.',
  },
  {
    item: 'Organización sencilla',
    description:
      'Con PillCare, puedes mantener todos tus medicamentos organizados en un solo lugar. La aplicación te permite agregar y administrar fácilmente tus medicamentos, incluyendo información sobre dosis y horarios.',
  },
  {
    item: 'Personalización flexible',
    description:
      'Adaptamos PillCare a tus necesidades. Puedes personalizar tus recordatorios, horarios y configuraciones para que se ajusten a tu rutina y preferencias individuales.',
  },
  {
    item: 'Seguimiento del progreso',
    description:
      'La función de seguimiento de PillCare te permite llevar un registro de tus medicamentos tomados. Obtén una visión general de tu cumplimiento y sigue tu progreso a lo largo del tiempo.',
  },
  {
    item: 'Alertas y notificaciones',
    description:
      'PillCare te envía alertas y notificaciones para asegurarse de que nunca te pierdas un recordatorio importante. Estarás siempre al tanto de tus medicamentos.',
  },

  {
    item: 'Interfaz intuitiva',
    description:
      'Nuestra interfaz de usuario intuitiva y amigable te hace sentir cómodo/a al usar PillCare. Es fácil de navegar y encontrar lo que necesitas.',
  },
  {
    item: 'Privacidad y seguridad',
    description:
      'Tu privacidad es nuestra prioridad. PillCare garantiza la seguridad de tus datos y protege tu información personal.',
  },
];

const Benefits = () => {
  return (
    <>
      <BenefitsItemsContainer>
        <LandingTitle text='Beneficios' />
        <BenefitsList>
          {benefits.map((benefit, index) => (
            <BenefitsItem
              key={index}
              item={benefit.item}
              description={benefit.description}
              index={index + 1}
            />
          ))}
        </BenefitsList>
        <h3 className='h3-landing'>
          Únete a PillCare y descubre cómo podemos ayudarte a llevar un seguimiento
          efectivo de tus medicamentos. ¡Mejora tu adherencia al tratamiento y disfruta de
          una vida más saludable!
        </h3>
      </BenefitsItemsContainer>
      <Image
        className='object-cover'
        src={benefitsImage}
        width={500}
        height={950}
        alt='Imagen de doctor beneficios'
      />
    </>
  );
};

export default Benefits;
