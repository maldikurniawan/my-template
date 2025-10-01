import { useContext, useState } from "react";
import { ChromePicker } from "react-color";
import { Popover } from "..";
import { ThemeContext } from "@/context/ThemeContext";

interface ColorPickerProps {
    id?: string;
    label?: string;
    required?: boolean;
    placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end";
    rounded?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    density?: "tight" | "normal" | "loose";
    size?: "sm" | "md" | "lg" | "xl";
    note?: React.ReactNode;
    error?: React.ReactNode;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    id,
    label,
    required = false,
    placement = "bottom-start",
    rounded = "md",
    density = "normal",
    size = "md",
    note,
    error,
    value = "#FFFFFF",
    setValue,
}) => {
    const [isHover, setIsHover] = useState(false);

    const { theme } = useContext(ThemeContext);

    const getContrast = (hexcolor: string): string => {
        const r = parseInt(hexcolor.substring(1, 3), 16);
        const g = parseInt(hexcolor.substring(3, 5), 16);
        const b = parseInt(hexcolor.substring(5, 7), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "#4D5355" : "#BABCBA";
    };

    // Size
    const colorPickerSize =
        {
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18,
        }[size] || 14;

    // Rounded
    const colorPickerRounded =
        {
            none: 0,
            sm: 2,
            base: 4,
            md: 6,
            lg: 8,
            xl: 12,
            "2xl": 16,
            "3xl": 20,
            "4xl": 24,
        }[rounded] || rounded;

    // Density
    const colorPickerDensity =
        {
            tight: 8,
            normal: 10,
            loose: 12,
        }[density] || 10;

    const style = {
        fontSize: colorPickerSize,
        borderRadius: colorPickerRounded,
        borderWidth: 1,
        borderStyle: "solid",
        outline: "none",
        borderColor: error
            ? "#E7515A"
            : isHover
                ? theme === "dark"
                    ? "#253B5C"
                    : "#E0E6ED"
                : theme === "dark"
                    ? "#253B5C"
                    : "#E0E6ED",
    };

    return (
        <div className="w-full">
            {/* Label Basic */}
            <label
                htmlFor={id}
                style={{
                    fontSize: colorPickerSize,
                }}
                className={`mb-1 ${required && "required"}`}
            >
                {label}
            </label>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <Popover
                    full
                    placement={placement}
                    button={
                        <div
                            style={{ ...style }}
                            className="outline-none w-full h-full leading-none bg-transparent flex items-center gap-2 overflow-hidden"
                        >
                            <div
                                style={{
                                    backgroundColor: value,
                                    padding: `${colorPickerDensity}px 14px`,
                                    color: getContrast(value),
                                }}
                                className="w-full h-full"
                            >
                                {value === "" ? "Pick a color" : value}
                            </div>
                        </div>
                    }
                >
                    <ChromePicker
                        className="!font-sans font-bold !bg-white"
                        color={value}
                        onChange={(value: any) => setValue(value.hex)}
                    />
                </Popover>
            </div>

            {/* Error */}
            {error && (
                <div
                    style={{
                        fontSize: colorPickerSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1 text-danger"
                >
                    {error}
                </div>
            )}

            {/* Note */}
            {note && (
                <div
                    style={{
                        fontSize: colorPickerSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1"
                >
                    {note}
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
