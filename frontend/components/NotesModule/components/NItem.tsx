import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
  description: string;
  small?: boolean;
}

const NItem = ({ id, description, small }: Props) => {
  const router = useRouter();

  const handlerEditNote = () => {
    router.push(`/home/notes/edit/${id}`);
  };

  const handlerDeleteNote = () => {
    console.log(`Eliminar nota: ${id}`);
  };

  return (
    <div
      className={`relative min-w-[150px] min-h-[200px] flex flex-col justify-center 
                bg-yellow w-full text-center border border-slate-500 shadow-md 
                   text-sm ${
                     small
                       ? '  h-full text-sm p-2 py-4 overflow-hidden flex-nowrap text-ellipsis'
                       : ' p-5 min-h-[150px]'
                   }`}>
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
      <p>{description}</p>
    </div>
  );
};

export default NItem;
