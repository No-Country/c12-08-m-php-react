import aboutImage from '@/public/img/aboutImage.jpg';
import Image from 'next/image';
import Thanks from './Thanks';
import { AboutItem, AboutItemsContainer, Title } from './index';

const About = () => {
  return (
    <>
      <AboutItemsContainer>
        <Title>Acerca de PillCare</Title>
        <AboutItem
          question='¿Qué es PillCare y cuál es su propósito principal?'
          answer='Es una plataforma diseñada para facilitar el seguimiento y recordatorio de medicamentos de manera eficiente y conveniente. En PillCare, nuestro objetivo es ayudar a las personas a mantener un control adecuado de su tratamiento médico y mejorar su calidad de vida.'
        />
        <AboutItem
          question='¿Cuál es el enfoque de PillCare para ayudar a las personas?'
          answer='
          Nuestro enfoque se basa en la simplicidad y la efectividad, brindando una solución práctica para gestionar tus medicamentos.'
        />
        <AboutItem
          question='¿Cómo se adapta PillCare a las necesidades individuales de los usuarios con diferentes rutinas de medicación?'
          answer='No importa si tienes una rutina de medicación compleja o simplemente necesitas recordatorios ocasionales, PillCare está aquí para apoyarte. Nos enorgullece ofrecer una experiencia personalizada, adaptable a tus necesidades y preferencias específicas.'
        />
        <AboutItem
          question='¿Cuál es el beneficio principal de unirse a la comunidad de PillCare?'
          answer='Al unirte a nuestra comunidad, descubrirás cómo PillCare puede ayudarte a mantener un seguimiento efectivo de tus medicamentos, evitando olvidos y mejorando tu bienestar general. Nos encantaría tenerte a bordo para que experimentes una gestión más eficiente y conveniente de tu tratamiento médico.'
        />
        <Thanks />
      </AboutItemsContainer>
      <Image
        className='object-cover'
        src={aboutImage}
        width={500}
        height={950}
        alt='about image'
      />
    </>
  );
};

export default About;
