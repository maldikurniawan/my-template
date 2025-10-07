import type { ReactNode } from "react";
import CounterItem from "./CounterItem";

interface Counter {
    value: number;
    label: string;
    icon?: ReactNode;
}

interface CounterGroupProps {
    items: Counter[];
    rounded?: boolean;
}

const CounterGroup = ({ items, rounded = false }: CounterGroupProps) => {
    return (
        <div className="grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
            {items.map((item, idx) => (
                <CounterItem
                    key={idx}
                    value={item.value}
                    label={item.label}
                    icon={item.icon}
                    rounded={rounded}
                />
            ))}
        </div>
    );
};

export default CounterGroup;
