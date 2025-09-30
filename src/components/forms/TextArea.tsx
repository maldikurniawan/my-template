import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";

interface TextAreaProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    placeholder?: string;
    variant?: "basic" | "outline" | "underlined" | "filled" | string;
    size?: "sm" | "md" | "lg" | "xl" | string;
    color?: "primary" | "base" | "success" | "warning" | "danger" | "info" | string;
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;
    density?: "tight" | "normal" | "loose" | string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    note?: React.ReactNode;
    error?: React.ReactNode;
    rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
    id = "",
    name = "",
    label = "",
    value = "",
    onChange,
    onBlur,
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
    append,
    note,
    error,
    rows = 2,
}) => {
    const { colortheme, theme } = useContext(ThemeContext);

    const variants = ["outline", "underlined", "filled"];
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

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
            top: isFocus || value ? 0 : 14,
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "",
        };
    } else if (variant === "filled") {
        labelStyle = {
            fontSize: isFocus || value ? textFieldSize - 4 : textFieldSize,
            left: 14,
            top: isFocus || value ? 10 : 14,
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "",
        };
    } else if (variant === "underlined") {
        labelStyle = {
            fontSize: isFocus || value ? textFieldSize - 4 : textFieldSize,
            left: 0,
            top: isFocus || value ? 10 : 14,
            transform: "translateY(-50%)",
            color: isFocus || value ? textFieldColor : "",
        };
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const resizeTextArea = () => {
        if (!textAreaRef.current) return;
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    };

    useEffect(resizeTextArea, [value]);

    return (
        <div className="w-full">
            {/*Label Basic */}
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
                        className="flex items-start p-[10px] leading-none"
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
                    {/*Label Variant */}
                    {variants.includes(variant) && label && (
                        <span
                            style={{ ...labelStyle }}
                            className={`absolute pointer-events-none transition-[top,font,padding,margin] leading-none whitespace-nowrap ${(isFocus && variant === "outline") ||
                                (variant === "outline" && value)
                                ? "bg-white dark:bg-black backdrop-blur px-1 -ml-1"
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
                            className="flex items-start p-[10px] leading-none bg-gray-100 dark:bg-[#253B5C50]"
                        >
                            {prefix}
                        </div>
                    )}

                    <textarea
                        ref={textAreaRef}
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
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        style={{
                            fontSize: textFieldSize,
                            ...inputStyle,
                        }}
                        className={`bg-transparent flex-1 appearance-none outline-none w-full h-full leading-none placeholder:transition-all resize-none overflow-hidden box-border ${isFocus ? "placeholder:pl-1" : "pl-0"
                            } ${variants.includes(variant) && !isFocus
                                ? "placeholder:opacity-0"
                                : "placeholder:opacity-50"
                            }`}
                        placeholder={placeholder}
                        rows={rows}
                    />

                    {suffix && (
                        <div
                            style={{
                                fontSize: textFieldSize,
                            }}
                            className="flex items-start p-[10px] leading-none"
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
                        className="flex items-start p-[10px] leading-none"
                    >
                        {append}
                    </div>
                )}
            </div>

            {/*Error */}
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

            {/*Note */}
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

export default TextArea;
