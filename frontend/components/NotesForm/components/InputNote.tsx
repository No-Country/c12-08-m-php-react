interface Props {
  titleName: string;
  titleValue: string;
  titlePlaceholder?: string;
  descName: string;
  descValue: string;
  descPlaceholder?: string;
  handleChange: any;
}

const InputNote = ({
  titleName,
  titleValue,
  titlePlaceholder,
  descName,
  descValue,
  descPlaceholder,
  handleChange,
}: Props) => {
  return (
    <div>
      <div className='border-b-2 border-black mb-5 mx-2 md:w-1/4 '>
        <input
          name={titleName}
          value={titleValue}
          placeholder={titlePlaceholder}
          onChange={handleChange}
          className=' appearance-none bg-transparent border-none w-full 
        text-gray-700 mr-3 px-2 leading-tight focus:outline-none'
        />
      </div>
      <div className='bg-white rounded-xl p-5 w-full h-96 overflow-hidden '>
        <textarea
          name={descName}
          value={descValue}
          placeholder={descPlaceholder}
          onChange={handleChange}
          className='textarea-note focus:outline-none'></textarea>
      </div>
    </div>
  );
};

export default InputNote;
