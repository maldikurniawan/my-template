import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BeatLoader } from "react-spinners";

interface LoadingProps {
    size?: number;
    loading?: boolean;
    color?: "lightGreen" | "lightGray" | "lightPurple" | "lightYellow" | "lightRed" | "lightBlue" | string;
}

const Loading = ({ size = 20, loading = false, color = "lightGreen" }: LoadingProps) => {
    const { colortheme } = useContext(ThemeContext);

    const loadColors: Record<string, string> = {
        lightGreen: colortheme,
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightYellow: "#FFFF00",
        lightBlue: "#0000FF",
        lightRed: "#FF0000",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
