import DesktopCell from './DesktopCell';

const week = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

const GridHeader = () => {
  return (
    <>
      {week.map((day, index) => (
        <DesktopCell key={index}>{day}</DesktopCell>
      ))}
    </>
  );
};

export default GridHeader;
