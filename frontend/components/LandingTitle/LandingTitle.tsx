const LandingTitle = ({ text }: { text: string }) => {
  return (
    <h1 className='font-semibold text-3xl text-green ml-2 sm:ml-0 text-center sm:text-start'>
      {text}
    </h1>
  );
};

export default LandingTitle;
