interface InputNumberProps {
  label: string;
  name: string;
  type?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber = ({
  label,
  name,
  type = 'text',
  min,
  max,
  disabled = false,
  handleChange,
}: InputNumberProps) => {
  return (
    <div className='relative h-11 w-full min-w-[200px]'>
      <input
        className='peer  h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-black focus:border-lightGreen focus:outline-0 disabled:border-dotted disabled:outline-none disabled:bg-blue-gray-50'
        placeholder=' '
        type={type}
        name={name}
        id={label}
        onChange={handleChange}
        required
        disabled={disabled}
        autoComplete='off'
        min={min}
        max={max}
        step={1}
      />
      <label className="peer-disabled:text-[rgba(0,0,0,0.38)] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-lightGreen after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lightGreen peer-focus:after:scale-x-100 peer-focus:after:border-lightGreen peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};

export default InputNumber;
