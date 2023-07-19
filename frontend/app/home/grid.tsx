import { PropsWithChildren } from 'react';

const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-full max-md:flex-col md:py-7 md:px-10 md:gap-8 lg:px-24'>
      {children}
    </div>
  );
};

export default Grid;
