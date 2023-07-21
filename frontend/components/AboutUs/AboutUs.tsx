const AboutUs = () => {
  return (
    <div className='border border-black'>
      <div className='mt-5 mr-10 ml-5 border border-black font-poppins'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl mb-4 font-medium'>
          Bienvenido/a a PillCare, una plataforma diseñada para facilitar el seguimiento y
          recordatorio de medicamentos de manera eficiente y conveniente. En PillCare,
          nuestro objetivo es ayudar a las personas a mantener un control adecuado de su
          tratamiento médico y mejorar su calidad de vida.
        </p>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl mb-4 font-medium'>
          Nuestro enfoque se basa en la simplicidad y la efectividad, brindando una
          solución práctica para gestionar tus medicamentos.
        </p>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl mb-4 font-medium'>
          No importa si tienes una rutina de medicación compleja o simplemente necesitas
          recordatorios ocasionales, PillCare está aquí para apoyarte. Nos enorgullece
          ofrecer una experiencia personalizada, adaptable a tus necesidades y
          preferencias específicas.
        </p>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl mb-14 font-medium'>
          Únete a nuestra comunidad y descubre cómo PillCare puede ayudarte a mantener un
          seguimiento efectivo de tus medicamentos, evitando olvidos y mejorando tu
          bienestar general. ¡Nos encantaría tener a bordo!
        </p>
        {/* Utilizamos clases de tamaño de texto para hacer el span responsive */}
        <span className='text-sm md:text-base lg:text-lg xl:text-xl font-bold'>
          ¡Gracias por elegir PillCare para gestionar tus medicamentos! Estamos
          emocionados de ser parte de tu camino hacia una mejor salud y bienestar.
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
