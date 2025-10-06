import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

const NotFoundPage = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="flex justify-center items-center min-h-screen">
            <img src={theme === "dark" ? "/assets/images/not_found_dark.png" : "/assets/images/not_found_light.png"} className="w-60" alt="NotFound" />
        </div>
    )
}

export default NotFoundPage