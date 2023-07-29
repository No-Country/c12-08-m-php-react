interface BenefitsItemProps {
  item: string;
  description: string;
  index: number;
}

const BenefitsItem = ({ item, description, index }: BenefitsItemProps) => {
  return (
    <div className='flex items-center shadow-md py-4 h-auto'>
      <li className='text-6xl px-8'>{index}</li>
      <div className='flex flex-col gap-4'>
        <h2 className='font-medium text-xl'>{item}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BenefitsItem;
