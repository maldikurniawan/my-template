import { ButtonRipple } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { RadioGroup } from "@headlessui/react";
import type { FC } from "react";
import { useContext } from "react";

interface Option {
    label: string;
    value: boolean | string;
}

interface RadioProps {
    value?: boolean | string;
    onChange?: any;
    options: Option[];
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    inline?: boolean;
}

const Radio: FC<RadioProps> = ({
    value,
    onChange,
    options,
    size = "md",
    color = "lightGreen",
    inline = true
}) => {
    const { colortheme, theme } = useContext(ThemeContext);

    // Color mapping
    const radioColors: Record<string, string> = {
        lightGreen: colortheme,
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightYellow: "#FFFF00",
        lightRed: "#FF0000",
        lightBlue: "#0000FF",
    };

    const radioColor = radioColors[color] || color;

    // Size mapping
    const radioSize: number = {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    }[size] || 16;

    return (
        <RadioGroup
            className={`${inline ? "flex flex-wrap gap-x-3 gap-y-2 cursor-pointer" : ""}`}
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <RadioGroup.Option key={index} value={option.value}>
                    {({ checked }) => (
                        <div className="flex items-center gap-x-1.5">
                            <ButtonRipple
                                color={`${radioColor}50`}
                                className="rounded-full transition-[background] hover:bg-white/10"
                            >
                                <div
                                    style={{
                                        width: radioSize,
                                        height: radioSize,
                                        backgroundColor: checked ? "white" : "",
                                        border: checked
                                            ? `6px solid ${radioColor}`
                                            : theme === "dark"
                                                ? "2px solid #253b5c"
                                                : "2px solid #e0e6ed",
                                    }}
                                    className="rounded-full flex items-center justify-center cursor-pointer"
                                />
                            </ButtonRipple>
                            <div
                                className="cursor-pointer text-primary font-semibold"
                            >
                                {option.label}
                            </div>
                        </div>
                    )}
                </RadioGroup.Option>
            ))}
        </RadioGroup>
    );
};

export default Radio;
