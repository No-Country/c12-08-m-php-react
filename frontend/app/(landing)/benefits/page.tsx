import LandingTitle from '@/components/LandingTitle/LandingTitle';
import benefitsImage from '@/public/img/benefitsImage.jpg';
import Image from 'next/image';
import BenefitsItem from './BenefitsItem';
import BenefitsItemsContainer from './BenefitsItemsContainer';
import BenefitsList from './BenefitsList';

const benefits = [
  {
    item: 'Recordatorios precisos',
    description: 'Ya no tendrás que preocuparte por olvidar una dosis importante.',
  },
  {
    item: 'Organización sencilla',
    description:
      'La aplicación te permite agregar y administrar fácilmente tus medicamentos, incluyendo información sobre dosis y horarios.',
  },
  {
    item: 'Personalización flexible',
    description:
      'Puedes personalizar tus recordatorios, horarios y configuraciones para que se ajusten a tu rutina y preferencias individuales.',
  },
  {
    item: 'Seguimiento del progreso',
    description:
      'PillCare te permite llevar un registro de tus medicamentos. Obtén una visión general de tu cumplimiento y sigue tu progreso médico.',
  },
  {
    item: 'Interfaz intuitiva',
    description:
      'Nuestra interfaz de usuario es intuitiva y amigable, es fácil de navegar y encontrar lo que necesitas.',
  },
  {
    item: 'Privacidad y seguridad',
    description:
      'Tu privacidad es nuestra prioridad. Garantizamos la seguridad de tus datos y protege tu información personal.',
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
      </BenefitsItemsContainer>
      <Image
        className='object-cover hidden sm:inline rounded-3xl'
        src={benefitsImage}
        width={350}
        height={950}
        alt='Imagen de doctor beneficios'
      />
    </>
  );
};

export default Benefits;
