import type { ReactNode } from "react";
import CountUp from "react-countup";

interface CounterItemProps {
    value: number;
    duration?: number;
    label: string;
    icon?: ReactNode;
    rounded?: boolean;
}

const CounterItem = ({
    value,
    duration = 7,
    label,
    icon,
    rounded = false,
}: CounterItemProps) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className={`w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] 
        ${rounded ? "rounded-full" : "rounded"} 
        border border-white-light dark:border-[#1b2e4b] 
        flex justify-center flex-col`}
            >
                <CountUp
                    start={0}
                    end={value}
                    duration={duration}
                    className="text-primary text-xl sm:text-3xl text-center"
                />
            </div>
            <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">
                {icon && <div className="mb-2 text-primary flex justify-center">{icon}</div>}
                {label}
            </h4>
        </div>
    );
};

export default CounterItem;
