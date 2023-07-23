interface AboutItemProps {
  question: string;
  answer: string;
}

const AboutItem = ({ question, answer }: AboutItemProps) => {
  return (
    <article className='flex flex-col gap-4'>
      <h2 className=' text-xl font-semibold'>{question}</h2>
      <p className=''>{answer}</p>
    </article>
  );
};

export default AboutItem;
