import { AboutUs, GenericContainer } from '@/components';

const About = () => {
  return (
    <GenericContainer
      title='Acerca de PillCare'
      color='white'
      colortitle='blue'
      href='/home'>
      <AboutUs />
    </GenericContainer>
  );
};

export default About;
