// This component will be used to model the structure of the dashboard.
'use client';

interface Props {
  children?: React.ReactNode;
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  rows: 1 | 2 | 3;
  hidden?: boolean;
}

const DashboardModule = ({ children, cols, rows, hidden }: Props) => {
  return (
    <div
      className={`border border-black max-md:row-span-5
      col-span-${cols.toString()} 
      row-span-${rows.toString()} 
      ${hidden ? 'max-md:hidden' : ''}`}>
      {children}
    </div>
  );
};

export default DashboardModule;
