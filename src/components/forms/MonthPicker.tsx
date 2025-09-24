import { ThemeContext } from "@/context/ThemeContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react";
import moment from "moment";
import { useContext, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Button, TextField } from "..";

// Define the types for the props
interface MonthPickerProps {
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    variant?: "basic" | "outline" | "underlined" | "filled" | string;
    size?: "sm" | "md" | "lg" | "xl";
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | string;
    density?: "tight" | "normal" | "loose" | string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    note?: React.ReactNode;
    error?: React.ReactNode;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    onChange?: any;
    required?: boolean;
    clearable?: boolean;
    placement?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
    position?: "relative" | "fixed" | "absolute" | "sticky";
}

const MonthPicker: React.FC<MonthPickerProps> = ({
    id,
    name,
    label,
    disabled = false,
    placeholder,
    variant = "basic",
    size = "md",
    color = "lightGreen",
    rounded = "none",
    density = "normal",
    prefix,
    suffix,
    prepend,
    append,
    note,
    error,
    value = new Date(),
    setValue,
    onChange,
    required = false,
    clearable = false,
    placement = "bottom-start",
    position = "relative",
}) => {
    const { colortheme } = useContext(ThemeContext);
    const [open, setOpen] = useState<boolean>(false);
    const ref = useRef<any>(null);
    useOnClickOutside(ref, () => setOpen(false));
    const monthList = moment.months();
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const colorMonthPickers: Record<string, string> = {
        lightGreen: colortheme,
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightYellow: "#FFFF00",
        lightRed: "#FF0000",
        lightBlue: "#0000FF",
    };

    const colorMonthPicker = colorMonthPickers[color] || color;

    const { refs, floatingStyles } = useFloating({
        placement: placement,
        whileElementsMounted: autoUpdate,
        middleware: [offset(), flip(), shift()],
    });

    return (
        <div ref={ref} className="relative">
            <div ref={refs.setReference}>
                <TextField
                    id={id}
                    name={name}
                    label={label}
                    disabled={disabled}
                    placeholder={placeholder}
                    variant={variant}
                    size={size}
                    color={colorMonthPicker}
                    rounded={rounded}
                    density={density}
                    prefix={prefix}
                    suffix={suffix}
                    prepend={prepend}
                    append={append}
                    note={note}
                    error={error}
                    clearable={clearable}
                    value={value ? moment(value).format("MMMM YYYY") : ""}
                    onClick={() => {
                        setOpen(!open);
                        if (value) {
                            setYear(Number(moment(value).format("YYYY")));
                        } else {
                            setYear(new Date().getFullYear());
                        }
                    }}
                    setValue={setValue}
                    readOnly
                    required={required}
                />
            </div>

            {open && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={`bg-[#1a1a1a] w-fit border border-[#333] z-10 p-4 ${position}`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <Button
                            onClick={() => {
                                setYear(year - 1);
                            }}
                            variant="text"
                            color={colorMonthPicker}
                            size="40"
                            className="p-3"
                        >
                            <TbChevronLeft />
                        </Button>
                        <div>{year}</div>
                        <Button
                            onClick={() => {
                                setYear(year + 1);
                            }}
                            variant="text"
                            color={colorMonthPicker}
                            size="40"
                            className="p-3"
                        >
                            <TbChevronRight />
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {monthList.map((month, index) => (
                            <div className="flex items-center justify-center" key={index}>
                                <div
                                    onClick={() => {
                                        onChange && onChange(new Date(year, index, 1));
                                        setOpen(false);
                                    }}
                                    style={{
                                        backgroundColor:
                                            moment(value).format("MMMM") === month &&
                                                moment(value).format("YYYY") === year.toString()
                                                ? colorMonthPicker
                                                : "",
                                        color:
                                            moment(value).format("MMMM") === month &&
                                                moment(value).format("YYYY") === year.toString()
                                                ? "black"
                                                : "",
                                    }}
                                    className="text-sm m-0 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10"
                                >
                                    {month.substring(0, 3)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MonthPicker;
