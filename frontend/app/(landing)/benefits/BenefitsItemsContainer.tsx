import React from 'react';

interface BenefitsItemsContainerProps {
  children: React.ReactNode;
}

const BenefitsItemsContainer = ({ children }: BenefitsItemsContainerProps) => {
  return <div className='flex flex-col gap-4 py-8 pr-8'>{children}</div>;
};

export default BenefitsItemsContainer;
