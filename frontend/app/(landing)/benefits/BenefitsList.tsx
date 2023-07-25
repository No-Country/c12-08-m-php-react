const BenefitsList = ({ children }: { children: React.ReactNode }) => {
  return <ol className=' flex flex-col gap-8'>{children}</ol>;
};

export default BenefitsList;
