import React from 'react';

const ContacItemsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col gap-6'>{children}</div>;
};

export default ContacItemsContainer;
