import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BeatLoader } from "react-spinners";

interface LoadingProps {
    size?: number;
    loading?: boolean;
    color?: "primary" | "base" | "success" | "warning" | "danger" | "info" | string;
}

const Loading = ({ size = 20, loading = false, color = "primary" }: LoadingProps) => {
    const { colortheme } = useContext(ThemeContext);

    const loadColors: Record<string, string> = {
        primary: colortheme,
        secondary: "#805DCA",
        success: "#00AB55",
        danger: "#E7515A",
        warning: "#E2A03F",
        info: "#2196F3",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
