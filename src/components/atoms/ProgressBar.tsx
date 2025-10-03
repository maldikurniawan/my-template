import React from "react"

interface ProgressBarProps {
    value: number
    variant?: "basic" | "gradient" | "striped" | "animated"
    color?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number
    showLabel?: boolean
    label?: string
}

const sizeMap = {
    xs: "h-1",
    sm: "h-2.5",
    md: "h-4",
    lg: "h-5",
    xl: "h-6",
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    variant = "basic",
    color = "bg-primary",
    size = "md",
    showLabel = false,
    label,
}) => {
    // Tentukan height
    const heightClass = typeof size === "string" ? sizeMap[size] : `h-[${size}px]`

    // Base styles
    let barClass = `${color} ${heightClass} rounded-full`
    let style: React.CSSProperties = { width: `${value}%` }

    if (variant === "striped" || variant === "animated") {
        style.backgroundImage =
            "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)"
        style.backgroundSize = "1rem 1rem"
    }

    if (variant === "animated") {
        barClass += " animated-progress"
    }

    return (
        <div className={`w-full ${heightClass} bg-[#ebedf2] dark:bg-dark/40 rounded-full`}>
            <div
                className={`${barClass} flex items-center justify-center text-xs text-white`}
                style={style}
            >
                {showLabel && (label || `${value}%`)}
            </div>
        </div>
    )
}

export default ProgressBar
