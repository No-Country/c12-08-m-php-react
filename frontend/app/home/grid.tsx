import { PropsWithChildren } from 'react';

// THIS COMPONENT MUST BE IMPROVED FOR DESKTOP VIEW
const Grid = ({ children }: PropsWithChildren) => {
  return <div className='md:grid grid-cols-2'>{children}</div>;
};

export default Grid;
