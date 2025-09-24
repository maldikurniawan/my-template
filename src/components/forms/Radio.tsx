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
    const { colortheme } = useContext(ThemeContext);

    // Color mapping
    const checkboxColors: Record<string, string> = {
        lightGreen: colortheme,
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightYellow: "#FFFF00",
        lightRed: "#FF0000",
        lightBlue: "#0000FF",
    };

    const checkboxColor = checkboxColors[color] || color;

    // Size mapping
    const radioSize: number = {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    }[size] || 16;

    const textSize: number = {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
    }[size] || 14;

    return (
        <RadioGroup
            className={`${inline ? "flex flex-wrap gap-x-3 gap-y-2" : ""}`}
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <RadioGroup.Option key={index} value={option.value}>
                    {({ checked }) => (
                        <div className="flex items-center gap-x-1">
                            <ButtonRipple
                                color={`${checkboxColor}50`}
                                className="p-2 rounded-full transition-[background] hover:bg-white/10"
                            >
                                <div
                                    style={{
                                        width: radioSize,
                                        height: radioSize,
                                        backgroundColor: checked ? "white" : "",
                                        border: checked
                                            ? `4px solid ${checkboxColor}`
                                            : "1px solid #6A6F70",
                                    }}
                                    className="rounded-full flex items-center justify-center"
                                />
                            </ButtonRipple>
                            <div
                                className="cursor-pointer"
                                style={{ fontSize: textSize }}
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
