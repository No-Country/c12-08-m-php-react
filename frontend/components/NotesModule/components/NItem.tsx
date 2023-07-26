import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { title } from 'process';

interface Props {
  id: number;
  description: string;
  title: string;
  small?: boolean;
}

const NItem = ({ id, title, description, small }: Props) => {
  const router = useRouter();

  const handlerEditNote = () => {
    router.push(`/home/notes/edit/${id}`);
  };

  const handlerDeleteNote = () => {
    console.log(`Eliminar nota: ${id}`);
  };

  return (
    <div
      className={`relative min-w-[150px] min-h-[200px] flex flex-col justify-center items-center
                bg-yellow w-full  border border-slate-500 shadow-md 
                  text-xs md:text-sm ${
                    small
                      ? 'h-full text-sm p-2 py-4 overflow-hidden flex-nowrap text-ellipsis'
                      : 'p-5 max-h-[150px]'
                  }`}>
      <p className='font-bold w-full mb-2 text-left'>{title}</p>
      <p className='h-full mx-2'>{description}</p>
      <Image
        src='/svg/plan-edit.svg'
        width={20}
        height={20}
        alt='note'
        className={` absolute bottom-4 right-4 cursor-pointer ${small && 'hidden'} `}
        onClick={handlerEditNote}
      />
      <Image
        src='/svg/btn-delete.svg'
        width={20}
        height={20}
        alt='note'
        className={`absolute top-4 right-4 cursor-pointer ${small && 'hidden'}`}
        onClick={handlerDeleteNote}
      />
    </div>
  );
};

export default NItem;
