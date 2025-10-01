import { formatBytes } from "@/utils/bytesToSize";
import type { FC } from "react";
import { useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { TbChecks, TbX } from "react-icons/tb";

interface FileInputProps {
    height?: number;
    accept?: { [key: string]: string[] };
    disabled?: boolean;
    maxFiles?: number;
    minSize?: number;
    maxSize?: number;
    multiple?: boolean;
    value: File[];
    setValue: Function;
}

const FileInput: FC<FileInputProps> = ({
    height = 260,
    accept,
    disabled = false,
    maxFiles = Infinity,
    minSize,
    maxSize,
    multiple = false,
    value,
    setValue,
}: FileInputProps) => {
    const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

    const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (!multiple) {
            setValue(acceptedFiles);
            setRejectedFiles(fileRejections);
            return;
        }

        if (value.length + acceptedFiles.length > maxFiles) {
            alert(`You can only upload ${maxFiles} files`);
            return;
        }

        setValue((prev: any) => [...prev, ...acceptedFiles]);
        setRejectedFiles((prev) => [...prev, ...fileRejections]);
    };

    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
        onDrop,
        accept,
        disabled,
        maxFiles,
        minSize,
        maxSize,
        multiple,
        noClick: true,
    });

    return (
        <div
            {...getRootProps({
                className: `relative w-full border-2 border-dashed border-[#E0E6ED] dark:border-[#253B5C] text-center p-6 ${disabled ? "" : "cursor-pointer"
                    }`,
                style: {
                    minHeight: `${height}px`,
                    opacity: disabled ? 0.5 : 1,
                },
            })}
        >
            <input {...getInputProps()} />

            <div onClick={open} className="absolute w-full h-full top-0 left-0 z-0"></div>

            {value.length > 0 || rejectedFiles.length > 0 ? (
                <div className="absolute bottom-1 right-2 text-xs z-10 pointer-events-none">
                    {`${value.length} / ${value.length + rejectedFiles.length}`}
                </div>
            ) : null}

            <div className="flex flex-wrap w-full gap-4 justify-center sm:justify-start">
                {value.map((file, fileIdx) => (
                    <div
                        className="group/cardfile relative w-full sm:w-36 h-52 cursor-default overflow-clip bg-white flex flex-col shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]"
                        key={fileIdx}
                    >
                        <div className="absolute z-20 right-2 top-2 cursor-pointer text-danger transition-opacity opacity-0 group-hover/cardfile:opacity-100">
                            <TbX
                                onClick={() => {
                                    setValue(value.filter((_, itemIdx) => itemIdx !== fileIdx));
                                }}
                            />
                        </div>

                        <div className="relative flex-1 bg-[#E0E6ED50] dark:bg-black/90 flex items-center justify-center text-xs overflow-hidden">
                            <div className="absolute bottom-1 right-1 text-2xl drop-shadow-lg text-primary">
                                <TbChecks />
                            </div>

                            {file.type.includes("image") ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    No Preview
                                </div>
                            )}
                        </div>

                        <div className="bg-[#E0E6ED90] dark:bg-black/90 p-2 text-[10px] text-left h-16 border-t border-white">
                            <div className="line-clamp-3 leading-none mb-1">{file.name}</div>
                            <div>{formatBytes(file.size)}</div>
                        </div>
                    </div>
                ))}

                {rejectedFiles.map(({ file, errors }, fileIdx) => (
                    <div
                        className="group/cardfile relative w-full sm:w-36 h-52 cursor-default overflow-clip bg-white flex flex-col shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]"
                        key={fileIdx}
                    >
                        <div className="absolute z-20 right-2 top-2 cursor-pointer text-danger transition-opacity opacity-0 group-hover/cardfile:opacity-100">
                            <TbX
                                onClick={() => {
                                    setRejectedFiles(rejectedFiles.filter((_, idx) => idx !== fileIdx));
                                }}
                            />
                        </div>

                        <div className="relative flex-1 flex items-center justify-center text-xs overflow-hidden">
                            <div className="absolute bottom-1 right-1 text-2xl drop-shadow-lg text-danger">
                                <TbX />
                            </div>

                            {file.type.includes("image") ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    No preview
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            {errors.length > 0 && (
                                <div className="absolute z-10 bg-red-500 text-white text-[10px] p-2 w-full h-full text-left transition-opacity opacity-0 group-hover/cardfile:opacity-100">
                                    {errors.map((error, idx) => (
                                        <div key={idx}>{error.message}</div>
                                    ))}
                                </div>
                            )}
                            <div className="bg-white p-2 text-[10px] text-left h-16 border-t border-white relative">
                                <div className="line-clamp-3 leading-none mb-1">{file.name}</div>
                                <div>{formatBytes(file.size)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!value.length && !rejectedFiles.length && (
                <div className="w-full h-full flex items-center justify-center">
                    {isDragActive ? "Drop the files here ..." : "Drag 'n' drop some files here, or click to select files"}
                </div>
            )}
        </div>
    );
};

export default FileInput;
