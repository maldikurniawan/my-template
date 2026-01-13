import { ThemeContext } from "@/context/ThemeContext";
import type { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode } from "react";
import { useContext } from "react";
import useRipple from "use-ripple-hook";

type ButtonRippleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "primary" | "success" | "warning" | "danger" | "info" | string;
    duration?: number;
    cancelAutomatically?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: CSSProperties;
    stopPropagation?: boolean;
}

const ButtonRipple = ({
    color = "",
    duration = 500,
    cancelAutomatically = false,
    disabled = false,
    children = null,
    onClick = () => { },
    className = "",
    style = {},
    stopPropagation = false,
    ...rest
}: ButtonRippleProps) => {

    const { colortheme, theme } = useContext(ThemeContext);

    // Color
    const btnColors: Record<string, string> = {
        primary: colortheme,
        secondary: "#805DCA",
        success: "#00AB55",
        danger: "#E7515A",
        warning: "#E2A03F",
        info: "#2196F3",
    };

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const btnColor = btnColors[color] || color;

    const [ripple, event] = useRipple({
        duration,
        color: btnColor || isDark ? "#FFFFFF50" : "#00000030",
        cancelAutomatically,
        timingFunction: "cubic-bezier(.42,.36,.28,.88)",
        disabled,
    });

    return (
        <button
            type="button"
            {...rest}
            className={className}
            style={style}
            disabled={disabled}
            ref={ripple}
            onMouseDown={event}
            onClick={(e) => {
                if (stopPropagation) e.stopPropagation();
                onClick?.(e);
            }}
        >
            {children}
        </button>
    );
};

export default ButtonRipple;
