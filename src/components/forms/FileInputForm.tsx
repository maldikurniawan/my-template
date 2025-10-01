import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";

interface FileInputFormProps {
    accept?: any;
    disabled?: boolean;
    maxFiles?: number;
    minSize?: number;
    maxSize?: number;
    multiple?: boolean;
    value?: File[];
    setValue?: Function;
    id?: string;
    name?: string;
    density?: "tight" | "normal" | "loose";
    rounded?: "none" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    size?: "sm" | "md" | "lg" | "xl";
    label?: string;
    required?: boolean;
    error?: string;
    note?: string;
}

const FileInputForm = ({
    accept,
    disabled = false,
    maxFiles,
    minSize,
    maxSize,
    multiple = false,
    value = [],
    setValue = () => { },
    id,
    name,
    density = "normal",
    rounded = "md",
    size = "md",
    label,
    required = false,
    error,
    note,
}: FileInputFormProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [errorRejection, setErrorRejection] = useState<string | null>(null);

    const { theme } = useContext(ThemeContext);

    const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (fileRejections.length > 0) {
            setErrorRejection(fileRejections[0].errors[0].message);
            setValue([]);
            return;
        }
        setErrorRejection(null);
        setValue(acceptedFiles);
    };

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        accept,
        disabled,
        maxFiles,
        minSize,
        maxSize,
        multiple,
        noClick: true,
    });

    // Size
    const fileInputSize =
        {
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18,
        }[size] || 14;

    // Rounded
    const fileInputRounded =
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
    const fileInputDensity =
        {
            tight: 8,
            normal: 10,
            loose: 12,
        }[density] || 10;

    let containerStyle = {
        borderColor: error
            ? "#E7515A"
            : disabled
                ? "#6A728230"
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
        borderRadius: fileInputRounded,
        fontSize: fileInputSize,
    };

    let buttonStyle = {
        backgroundColor: error
            ? "#E7515A"
            : disabled
                ? "#6A728230"
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
                    fontSize: fileInputSize,
                }}
                className={`mb-1 ${required && "required"}`}
            >
                {label}
            </label>

            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                {...getRootProps({
                    className: `relative w-full overflow-hidden border border-black dark:border-white ${disabled ? "" : "cursor-pointer"
                        }`,
                    style: {
                        ...containerStyle,
                        opacity: disabled ? 0.5 : 1,
                    },
                })}
            >
                <input id={id} name={name} {...getInputProps()} />
                <div onClick={open} className="absolute w-full h-full top-0 left-0 z-0"></div>

                <div className="flex">
                    <div
                        style={{
                            padding: `${fileInputDensity}px 14px`,
                            ...buttonStyle,
                        }}
                        className="text-black dark:text-white flex items-center font-bold justify-center whitespace-nowrap transition"
                    >
                        Upload File
                    </div>
                    <div className="px-4 py-2 flex items-center">
                        {value && value.length > 0 ? (
                            value.map((file, index) => {
                                if (index === value.length - 1) return file.name;
                                return `${file.name}, `;
                            })
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="text-sm">No file selected</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Error */}
            {(error || errorRejection) && (
                <div
                    style={{
                        fontSize: fileInputSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1 text-lightRed"
                >
                    {error || errorRejection}
                </div>
            )}

            {/* Note */}
            {note && (
                <div
                    style={{
                        fontSize: fileInputSize - 3,
                    }}
                    className="leading-none tracking-wide mt-1"
                >
                    {note}
                </div>
            )}
        </div>
    );
};

export default FileInputForm;
