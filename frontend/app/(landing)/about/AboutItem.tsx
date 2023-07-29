interface AboutItemProps {
  question: string;
  answer: string;
}

const AboutItem = ({ question, answer }: AboutItemProps) => {
  return (
    <article className='flex flex-col gap-4'>
      <h2 className='pl-3 sm:pl-0 text-xl font-semibold'>{question}</h2>
      <p className='pl-3 sm:pl-0'>{answer}</p>
    </article>
  );
};

export default AboutItem;
