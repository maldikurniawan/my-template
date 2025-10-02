import type { ReactNode } from "react";
import React from "react";

interface CardProps {
    children: ReactNode;
    icon?: ReactNode;
    title?: string;
    onClick?: () => void;
    bgColor?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    icon,
    title,
    onClick,
    bgColor,
}) => {

    const backgroundClass = bgColor || "bg-white dark:bg-black";

    return (
        <div
            onClick={onClick}
            className={`relative ${backgroundClass} rounded-md w-full shadow p-4 ${onClick ? "cursor-pointer" : ""
                }`}
        >
            <div className="flex items-center gap-2 font-bold text-black dark:text-[#506690] relative">
                {icon && <div className="text-2xl">{icon}</div>}
                {title && <div className="text-lg">{title}</div>}
            </div>
            <div className="relative text-gray-500">{children}</div>
        </div>
    );
};

export default Card;
