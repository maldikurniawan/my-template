import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { TbCheck } from "react-icons/tb";
import { ButtonRipple } from "..";

interface CheckboxProps {
    id?: string;
    checked: boolean;
    onChange?: () => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | string;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string | null;
    disabled?: boolean | null;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    checked = false,
    onChange = () => { },
    size = "md",
    color = "lightGreen",
    disabled = false,
    label
}) => {
    const { colortheme } = useContext(ThemeContext);

    // Color
    const checkboxColor =
        color === null
            ? colortheme
            : {
                lightGreen: colortheme,
                lightGray: "#BEBEBE",
                lightPurple: "#9B30FF",
                lightYellow: "#FFFF00",
                lightRed: "#FF0000",
                lightBlue: "#0000FF",
            }[color] || color;

    // Size
    const checkSize =
        size === null
            ? 16
            : {
                xs: 12,
                sm: 14,
                md: 16,
                lg: 18,
                xl: 20,
            }[size] || 16;

    const text =
        size === null
            ? 14
            : {
                xs: 10,
                sm: 12,
                md: 14,
                lg: 16,
                xl: 18,
            }[size] || 14;

    return (
        <div className="flex items-center gap-x-1.5">
            <ButtonRipple
                className="relative rounded flex items-center justify-center transition-[background] hover:bg-white/10"
                color={checkboxColor ? `${checkboxColor}50` : `#989C9D50`}
                onClick={onChange} // onChange toggles the checked state
                disabled={disabled ?? false} // Handle null with a fallback to false
            >
                {checked && (
                    <TbCheck
                        size={text}
                        style={{
                            marginLeft: -text / 2,
                            marginTop: -text / 2,
                        }}
                        className={`absolute text-white z-0 top-1/2 left-1/2 inset-0 pointer-events-none`}
                    />
                )}
                <input
                    id={id}
                    style={{
                        width: checkSize,
                        height: checkSize,
                        background: checked
                            ? checkboxColor
                                ? checkboxColor
                                : colortheme
                            : "transparent",
                    }}
                    className={`appearance-none outline-none pointer-events-none rounded ${checked ? "shadow" : "border-2 border-[#e0e6ed] dark:border-[#253b5c]"
                        } ${disabled ? "opacity-50" : ""}`}
                    readOnly
                    checked={checked}
                    type="checkbox"
                />
            </ButtonRipple>
            {label && (
                <label
                    htmlFor={id}
                    className={`cursor-pointer font-semibold ${disabled
                        ? "pointer-events-none text-white/30"
                        : "text-primary"
                        }`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
