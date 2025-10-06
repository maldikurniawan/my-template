import { Button, LetterGlitch } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="relative overflow-hidden">
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
            />
            <div className="flex flex-col justify-center items-center min-h-screen text-center p-6 backdrop-blur-[1px]">
                <div className="relative bg-white dark:bg-black rounded-full shadow p-4 mb-6">
                    <img
                        src={
                            theme === "dark"
                                ? "/assets/images/not_found_dark.png"
                                : "/assets/images/not_found_light.png"
                        }
                        className="w-[300px]"
                        alt="Not Found"
                    />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-black dark:text-[#506690]">404 - Page Not Found</h1>
                <p className="text-black dark:text-[#506690] mb-6">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Button>
                    <Link
                        to="/"
                    >
                        Go Back
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
