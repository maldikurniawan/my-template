import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { Card } from "..";

// Define prop types for CardStatistic component
interface CardStatisticProps {
    title: string;
    value: number;
    description: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | string;
    icon: React.ReactNode;
    iconRounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const CardStatistic: React.FC<CardStatisticProps> = ({
    title,
    value,
    description,
    color = "primary",
    icon,
    iconRounded = "md",
}) => {
    const { colortheme } = useContext(ThemeContext);

    // Color
    const cardColors: Record<string, string> = {
        primary: colortheme,
        secondary: "#805DCA",
        success: "#00AB55",
        danger: "#E7515A",
        warning: "#E2A03F",
        info: "#2196F3",
    };

    const cardColor = cardColors[color] || color;

    // Rounded
    const icRounded =
        {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        }[iconRounded] || "rounded-md";

    return (
        <Card bgColor="bg-transparent border border-[#E0E6ED] dark:border-[#253B5C]">
            <div className={`text-sm`}>
                <div className="flex items-center gap-4 mb-2">
                    <div
                        style={{
                            backgroundColor: `${cardColor}30`,
                        }}
                        className={`w-10 h-10 flex items-center justify-center ${icRounded}`}
                    >
                        <div
                            style={{
                                color: cardColor,
                            }}
                            className="text-xl"
                        >
                            {icon}
                        </div>
                    </div>
                    <div className="font-medium text-lg">{value}</div>
                </div>

                <div className="font-medium">{title}</div>
                <div className="text-xs">
                    {description}
                </div>
            </div>
        </Card>
    );
};

export default CardStatistic;