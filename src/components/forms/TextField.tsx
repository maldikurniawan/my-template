/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// npm install cleave.js@^1.6.0
import { ThemeContext } from '@/context/ThemeContext';
import Cleave from 'cleave.js/react';
import type { ReactNode } from 'react';
import { useContext, useState } from "react";
import { TbX } from "react-icons/tb";

interface TextFieldProps {
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    value?: any;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    placeholder?: string;
    variant?: "basic" | "outline" | "underlined" | "filled" | string;
    size?: "sm" | "md" | "lg" | "xl" | string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | string;
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;
    density?: "tight" | "normal" | "loose" | string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    prepend?: ReactNode;
    append?: ReactNode;
    note?: ReactNode;
    error?: ReactNode;
    cleaveOptions?: Record<string, any>;
    clearable?: boolean;
    autoComplete?: any;
}

const TextField: React.FC<TextFieldProps> = ({
    id,
    name,
    type = "text",
    label = "",
    value,
    setValue,
    onChange,
    onBlur,
    onClick,
    disabled = false,
    readOnly = false,
    required = false,
    placeholder = "",
    variant = "basic",
    size = "md",
    color = "primary",
    rounded = "md",
    density = "normal",
    prefix,
    suffix,
    prepend,
    autoComplete,
    append,
    note,
    error,
    cleaveOptions,
    clearable = false,
}) => {

    const variants = ["outline", "underlined", "filled"];
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    const { colortheme, theme } = useContext(ThemeContext);

    // Color
    const textFieldColor =
        {
            primary: colortheme,
            secondary: "#805DCA",
            success: "#00AB55",
            danger: "#E7515A",
            warning: "#E2A03F",
            info: "#2196F3",
        }[color] || color;

    // Size
    const textFieldSize =
        {
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18,
        }[size] || 14;

    // Rounded
    const textFieldRounded =
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
    const textFieldDensity =
        {
            tight: 8,
            normal: 10,
            loose: 12,
        }[density] || 10;

    // Container Style Variant
    let containerStyle = {};
    if (variant === "outline") {
        containerStyle = {
            borderColor: error
                ? "#E7515A"
                : disabled
                    ? "#6A728230"
                    : isFocus
                        ? textFieldColor
                        : isHover
                            ? theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED"
                            : theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED",
            borderWidth: 1,
            borderStyle: "solid",
            outline: error
                ? `2px solid #6A7282`
                : isFocus
                    ? `2px solid ${textFieldColor}`
                    : "none",
            outlineOffset: -2,
            borderRadius: textFieldRounded,
        };
    } else if (variant === "filled") {
        containerStyle = {
            borderColor: error
                ? "#E7515A"
                : disabled
                    ? "#6A728230"
                    : isFocus
                        ? textFieldColor
                        : isHover
                            ? theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED"
                            : theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderTopLeftRadius: textFieldRounded,
            borderTopRightRadius: textFieldRounded,
            backgroundColor:
                theme === "dark"
                    ? "#253B5C50"
                    : "#F3F4F6",
        };
    } else if (variant === "underlined") {
        containerStyle = {
            borderColor: error
                ? "#E7515A"
                : disabled
                    ? "#6A728230"
                    : isFocus
                        ? textFieldColor
                        : isHover
                            ? theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED"
                            : theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
        };
    } else {
        containerStyle = {
            borderColor: error
                ? "#E7515A"
                : disabled
                    ? "#6A728230"
                    : isFocus
                        ? textFieldColor
                        : isHover
                            ? theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED"
                            : theme === "dark"
                                ? "#253B5C"
                                : "#E0E6ED",
            borderWidth: 1,
            borderStyle: "solid",
            outline: "none",
            borderRadius: textFieldRounded,
        };
    }

    // Input Style Variant
    let inputStyle = {};
    if (variant === "outline") {
        inputStyle = {
            padding: `${textFieldDensity}px 14px`,
        };
    } else if (variant === "filled") {
        inputStyle = {
            padding: `${textFieldDensity + 6}px 14px ${textFieldDensity - 6}px`,
        };
    } else if (variant === "underlined") {
        inputStyle = {
            padding: `${textFieldDensity + 6}px 0px ${textFieldDensity - 6}px`,
        };
    } else {
        inputStyle = {
            padding: `${textFieldDensity}px 14px`,
        };
    }

    // Label Style Variant
    let labelStyle = {};
    if (variant === "outline") {
        labelStyle = {
            fontSize: isFocus || value ? textFieldSize - 2 : textFieldSize,
            left: 14,
            top: isFocus || value ? 0 : "50%",
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "#6A7282",
        };
    } else if (variant === "filled") {
        labelStyle = {
            fontSize: isFocus || value ? textFieldSize - 4 : textFieldSize,
            left: 14,
            top: isFocus || value ? 10 : "50%",
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "",
        };
    } else if (variant === "underlined") {
        labelStyle = {
            fontSize: isFocus || value ? textFieldSize - 4 : textFieldSize,
            left: 0,
            top: isFocus || value ? 10 : "50%",
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "",
        };
    }

    return (
        <div className="w-full">
            {/* Label Basic */}
            {!variants.includes(variant) && (
                <label
                    htmlFor={id}
                    style={{
                        fontSize: textFieldSize,
                    }}
                    className={`mb-1 ${required && "required"}`}
                >
                    {label}
                </label>
            )}

            {/* Input */}
            <div className="flex">
                {prepend && (
                    <div
                        style={{
                            fontSize: textFieldSize,
                        }}
                        className="flex items-center pr-2"
                    >
                        {prepend}
                    </div>
                )}

                <div
                    style={{
                        ...containerStyle,
                    }}
                    className={`relative flex flex-1 ${isFocus ? "shadow" : ""}`}
                >
                    {/* Label Variant */}
                    {variants.includes(variant) && label && (
                        <span
                            style={{ ...labelStyle }}
                            className={`absolute pointer-events-none transition-[top,font,padding,margin] leading-none whitespace-nowrap ${(isFocus && variant === "outline") ||
                                (variant === "outline" && value)
                                ? "bg-white dark:bg-black backdrop-blur rounded px-1 -ml-1"
                                : ""
                                }`}
                        >
                            {label}
                        </span>
                    )}

                    {prefix && (
                        <div
                            style={{
                                fontSize: textFieldSize,
                                borderRadius: textFieldRounded,
                            }}
                            className="flex items-center px-2 bg-gray-100 dark:bg-[#253B5C50]"
                        >
                            {prefix}
                        </div>
                    )}

                    {cleaveOptions ? (
                        <Cleave
                            id={id}
                            name={name}
                            disabled={disabled}
                            readOnly={readOnly}
                            value={value}
                            onChange={onChange}
                            onFocus={() => setIsFocus(true)}
                            onBlur={(e) => {
                                setIsFocus(false);
                                onBlur && onBlur(e);
                            }}
                            onClick={onClick}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            style={{
                                fontSize: textFieldSize,
                                ...inputStyle,
                            }}
                            className={`bg-transparent flex-1 appearance-none outline-none w-full h-full leading-none placeholder:transition-all ${isFocus ? "placeholder:pl-1" : "pl-0"
                                } ${variants.includes(variant) && !isFocus
                                    ? "placeholder:opacity-0"
                                    : "placeholder:opacity-50"
                                }`}
                            placeholder={placeholder}
                            type={type}
                            options={cleaveOptions}
                        />
                    ) : (
                        <input
                            id={id}
                            name={name}
                            disabled={disabled}
                            readOnly={readOnly}
                            value={value}
                            onChange={onChange}
                            onFocus={() => setIsFocus(true)}
                            onBlur={(e) => {
                                setIsFocus(false);
                                onBlur && onBlur(e);
                            }}
                            onClick={onClick}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            style={{
                                fontSize: textFieldSize,
                                ...inputStyle,
                            }}
                            className={`bg-transparent flex-1 appearance-none outline-none w-full h-full leading-none placeholder:transition-all ${isFocus ? "placeholder:pl-1" : "pl-0"
                                } ${variants.includes(variant) && !isFocus
                                    ? "placeholder:opacity-0"
                                    : "placeholder:opacity-50"
                                }`}
                            placeholder={placeholder}
                            type={type}
                            autoComplete={autoComplete}
                        />
                    )}

                    {/* Clearable */}
                    {clearable && setValue && value && (
                        <div
                            style={{
                                fontSize: textFieldSize,
                            }}
                            className="flex items-center px-2"
                        >
                            <button
                                onClick={() => setValue("")}
                                className="focus:outline-none"
                            >
                                <TbX size={textFieldSize + 2} className="cursor-pointer" />
                            </button>
                        </div>
                    )}

                    {suffix && (
                        <div
                            style={{
                                fontSize: textFieldSize,
                            }}
                            className="flex items-center px-2"
                        >
                            {suffix}
                        </div>
                    )}
                </div>

                {append && (
                    <div
                        style={{
                            fontSize: textFieldSize,
                        }}
                        className="flex items-center pl-2"
                    >
                        {append}
                    </div>
                )}
            </div>

            {/* Error */}
            {error && (
                <div
                    style={{
                        fontSize: textFieldSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1 text-[#E7515A]"
                >
                    {error}
                </div>
            )}

            {/* Note */}
            {note && (
                <div
                    style={{
                        fontSize: textFieldSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1"
                >
                    {note}
                </div>
            )}
        </div>
    );
};

export default TextField;
