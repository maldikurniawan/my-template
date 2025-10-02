import { ThemeContext } from "@/context/ThemeContext";
import { Transition, TransitionChild } from "@headlessui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { ButtonRipple } from "..";

interface ModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    width: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto" | string;
    height: "auto" | "full" | string;
    btnClose?: boolean;
    persistent?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    show,
    setShow,
    width,
    height,
    btnClose = true,
    persistent = false,
    children,
}) => {
    const { colortheme } = useContext(ThemeContext);
    const [animateWiggle, setAnimateWiggle] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const onBackDropClick = () => {
        if (!persistent) {
            setShow(false);
        } else {
            setAnimateWiggle(true);
        }
    };

    useEffect(() => {
        if (animateWiggle) {
            const content = contentRef.current;
            if (content) {
                content.classList.add("animate-wiggle");
                setTimeout(() => {
                    content.classList.remove("animate-wiggle");
                    setAnimateWiggle(false);
                }, 200);
            }
        }
    }, [animateWiggle]);

    const modalWidth =
        {
            xs: "320px",
            sm: "480px",
            md: "640px",
            lg: "800px",
            xl: "960px",
            full: "100%",
        }[width] || width;

    const modalHeight =
        {
            full: "100%",
        }[height] || height;

    return (
        <Transition
            as="div"
            show={show}
            className="fixed inset-0 z-50 p-5 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Backdrop */}
            <TransitionChild
                as="div"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="w-full h-full absolute bg-black/75 -z-10 transition-opacity duration-300"
                onClick={onBackDropClick}
            />

            {/* Content */}
            <TransitionChild
                as="div"
                ref={contentRef}
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="transition-[opacity,transform] duration-300 relative"
                style={{
                    maxWidth: modalWidth,
                    width: width === "auto" ? "auto" : "100%",
                    height: modalHeight,
                }}
            >
                {/* Button Close */}
                {btnClose && (
                    <div className="absolute -top-2 -right-2 hover:-top-1.5 transition-[top,right] duration-100">
                        <ButtonRipple
                            onClick={() => setShow(false)}
                            className={`bg-white dark:bg-black border border-[#E0E6ED] dark:border-[#253B5C] w-8 h-8 text-black dark:text-white flex items-center justify-center rounded-md ${colortheme === "default" ? "shadow-lg" : colortheme
                                }`}
                        >
                            <FiX />
                        </ButtonRipple>
                    </div>
                )}
                <div
                    className={`max-h-[90vh] h-full w-full rounded-md bg-white dark:bg-black border border-[#E0E6ED] dark:border-[#253B5C] overflow-y-auto custom-scroll ${colortheme === "default" ? "shadow-lg" : colortheme
                        }`}
                >
                    {children}
                </div>
            </TransitionChild>
        </Transition >
    );
};

export default Modal;