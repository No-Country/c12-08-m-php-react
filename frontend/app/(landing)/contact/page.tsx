import LandingTitle from '@/components/LandingTitle/LandingTitle';
import contactImage from '@/public/img/contactImage.jpg';
import Image from 'next/image';
import ContacItemsContainer from './ContacItemsContainer';
import ContactForm from './ContactForm';
import ContactParagraph from './ContactParagraph';

const Contact = () => {
  return (
    <>
      <ContacItemsContainer>
        <LandingTitle text='Contact' />
        <ContactParagraph />
        <ContactForm />
      </ContacItemsContainer>
      <Image
        src={contactImage}
        width={500}
        height={950}
        alt='imagen de contacto'
        className='hidden sm:inline rounded-3xl ml-2'
      />
    </>
  );
};

export default Contact;
