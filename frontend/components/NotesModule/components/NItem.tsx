import { deleteNote } from '@/services/note/noteServices';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

  const handlerDeleteNote = async () => {
    // TODO: Alertas?
    console.log(`Eliminar nota: ${id}`);
    try {
      const response = await deleteNote(id);
      console.log(response);
      if (response.message === 'Note deleted') {
        console.log('refrescar notas');
        router.push('/home/notes');
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center
                bg-yellow w-full shadow-md shadow-gray-600 
                  text-xs md:text-sm ${
                    small
                      ? 'h-4/5 w-full text-sm border-none m-0 p-0 rounded-2xl'
                      : 'p-5 pr-2 min-w-[150px] min-h-[200px] max-h-[150px]  '
                  }`}>
      <p className={`font-bold w-full mb-2 text-left ${small && 'hidden'}`}>{title}</p>
      <p className={small ? '' : ' h-full mx-2 mb-5 overflow-y-auto'}>{description}</p>
      <Image
        src='/svg/plan-edit.svg'
        width={20}
        height={20}
        alt='note'
        className={` absolute bottom-4 right-4 cursor-pointer ${small && 'hidden'} `}
        onClick={handlerEditNote}
      />
      <Link href={`/home/notes`} replace onClick={handlerDeleteNote}>
        <Image
          src='/svg/btn-delete.svg'
          width={20}
          height={20}
          alt='note'
          className={`absolute top-4 right-4 cursor-pointer ${small && 'hidden'}`}
        />
      </Link>
    </div>
  );
};

export default NItem;
