import { ThemeContext } from "@/context/ThemeContext";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useContext } from "react";
import { TbX } from "react-icons/tb";

interface AlertProps {
    variant?: "solid" | "outline" | "tonal";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | string;
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    density?: "tight" | "normal" | "loose";
    icon?: ReactNode;
    closable?: boolean;
    show?: boolean;
    setShow?: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

const Alert = ({
    variant = "solid",
    color = "primary",
    rounded = "md",
    density = "normal",
    icon = null,
    closable = false,
    show = true,
    setShow = () => { },
    children = null,
}: AlertProps) => {

    const { colortheme } = useContext(ThemeContext);

    // Default color mappings
    const alertColors: Record<string, string> = {
        primary: colortheme,
        secondary: "#805DCA",
        success: "#00AB55",
        danger: "#E7515A",
        warning: "#E2A03F",
        info: "#2196F3",
    };

    const alertColor = alertColors[color] || color;

    const alertRounded = {
        none: "rounded-none",
        sm: "rounded-sm",
        rounded: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
    }[rounded] || "rounded-md";

    const alertDensity = {
        tight: "py-2",
        normal: "py-3",
        loose: "py-4",
    }[density] || "py-3";

    let alertStyle: React.CSSProperties = {};
    if (variant === "tonal") {
        alertStyle = {
            backgroundColor: `${alertColor}30`,
            color: alertColor,
        };
    } else if (variant === "outline") {
        alertStyle = {
            backgroundColor: "transparent",
            color: alertColor,
            border: `1px solid ${alertColor}`,
        };
    } else {
        alertStyle = {
            backgroundColor: alertColor,
            color: "white",
        };
    }

    return show ? (
        <div
            style={alertStyle}
            className={`px-4 w-full flex gap-3 items-center text-sm overflow-hidden ${alertDensity} ${alertRounded}`}
        >
            <div className="flex items-center gap-3">
                {icon} {children}
            </div>
            {closable && (
                <div onClick={() => setShow(false)} className="ml-auto cursor-pointer">
                    <TbX />
                </div>
            )}
        </div>
    ) : null;
};

export default Alert;