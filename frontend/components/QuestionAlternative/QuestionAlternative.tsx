import Link from 'next/link';

interface QuestionAlternativeProps {
  question: string;
  callAction: string;
}

const QuestionAlternative = ({
  question,
  callAction,
}: QuestionAlternativeProps) => {
  return (
    <div className='flex gap-2 justify-center'>
      <span>{question}</span>
      <Link href='#'>
        <span className='text-blue font-medium'>{callAction}</span>
      </Link>
    </div>
  );
};

export default QuestionAlternative;
