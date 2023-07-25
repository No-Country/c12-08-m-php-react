interface Props {
  name: string;
  value: string;
  handleChange: any;
  placeholder?: string;
}

const InputNote = ({ name, value, handleChange, placeholder }: Props) => {
  return (
    <div className='bg-white rounded-xl p-5 w-full h-96 overflow-hidden '>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='textarea-note'></textarea>
    </div>
  );
};

export default InputNote;
