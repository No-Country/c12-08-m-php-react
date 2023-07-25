interface TextareaProps {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
}

const Textarea = ({ handleChange, name, label }: TextareaProps) => {
  return (
    <div className='relative w-full min-w-[200px]'>
      <textarea
        className='peer h-full min-h-[100px] w-full resize-none border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-black focus:border-lightGreen focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
        placeholder=' '
        name={name}
        onChange={handleChange}></textarea>
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-lightGreen after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lightGreen peer-focus:after:scale-x-100 peer-focus:after:border-lightGreen peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};

export default Textarea;
