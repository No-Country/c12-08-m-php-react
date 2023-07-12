import {
    add,
    endOfWeek,
    format,
    startOfWeek,
    sub,
} from "date-fns";
import Cell from "./Cell";
import Image from 'next/image';
import arrowLeft from '/public/svg/arrowL.svg'
import arrowRight from '/public/svg/arrowR.svg'

const weeks = ["L", "M", "M", "J", "V", "S", "D"];

type Props = {
    value?: Date;
    onChange: (date: Date) => void;
};

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
    const currentWeekStartDate = startOfWeek(value, { weekStartsOn: 1 });
    const currentWeekEndDate = endOfWeek(value, { weekStartsOn: 1 });

    const prevWeek = () => onChange(sub(currentWeekStartDate, { weeks: 1 }));
    const nextWeek = () => onChange(add(currentWeekEndDate, { days: 1 }));

    const handleClickDate = (index: number) => {
        const date = add(currentWeekStartDate, { days: index });
        onChange(date);
    };

    return (
        <div className="flex">
            <div className="flex mt-[80px] mr-1">
                <Image
                    src={arrowLeft}
                    alt="Logo"
                    width={25}
                    height={25}
                    onClick={prevWeek}
                />
            </div>
            <div className="w-[400px]">
                <div className="grid grid-cols-7 items-center justify-center text-center">
                    <Cell className="col-span-7">{format(currentWeekStartDate, "LLLL yyyy")}</Cell>
                    {weeks.map((week) => (
                        <Cell className="text-xs font-bold uppercase">{week}</Cell>
                    ))}

                    {Array.from({ length: 7 }).map((_, index) => (
                        <Cell
                            key={index}
                            isActive={format(add(currentWeekStartDate, { days: index }), "yyyy-MM-dd") === format(value, "yyyy-MM-dd")}
                            onClick={() => handleClickDate(index)}
                        >
                            {format(add(currentWeekStartDate, { days: index }), "dd")}
                        </Cell>
                    ))}
                </div>
            </div>
            <div className="flex mt-[80px] ml-1">
                <Image
                    src={arrowRight}
                    alt="Logo"
                    width={25}
                    height={25}
                    onClick={nextWeek}
                />
            </div>
        </div>
    );
};

export default Calendar;
