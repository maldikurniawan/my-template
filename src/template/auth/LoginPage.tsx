import { Button, DotGrid, TextField, Tooltip } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { PiLaptop, PiMoon, PiSun } from "react-icons/pi";
import { TbEye, TbEyeOff, TbLoader2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(ThemeContext);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const isDark =
        isDark ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username harus diisi"),
            password: Yup.string().required("Password harus diisi"),
        }),
        onSubmit: (values) => {
            setLoading(true);
            setTimeout(() => {
                if (values.username === "admin" && values.password === "admin") {
                    navigate("/");
                } else {
                    alert("Username or Password is wrong!");
                }
                setLoading(false);
            }, 1000);
        },
    });

    return (
        <div className="relative overflow-hidden">
            <DotGrid
                dotSize={30}
                gap={3}
                baseColor={isDark ? "#060818" : "#fafafa"}
                activeColor={isDark ? "#4361EE" : "#4361EE"}
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
            <div className="relative w-screen h-screen overflow-hidden flex font-light">
                <div className="flex w-full items-center justify-center p-10">
                    <div className="w-full md:w-96 h-fit p-10 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-md shadow-lg border border-[#E0E6ED] dark:border-[#253B5C30]">
                        <Link to={"/"} className="flex items-center mb-4">
                            <img
                                src={`${isDark ? "assets/images/logo_text_dark.png" : "assets/images/logo_text_light.png"} `}
                                alt="Logo"
                                className="w-[150px] rounded-full"
                            />
                        </Link>
                        <form onSubmit={formik.handleSubmit} className="space-y-4 text-primary">
                            <TextField
                                label="Username"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && formik.errors.username}
                            />
                            <div className="relative">
                                <TextField
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type={isShow ? "text" : "password"}
                                    placeholder="Password"
                                    suffix={
                                        <div
                                            className="cursor-pointer"
                                            onClick={() => setIsShow(!isShow)}
                                        >
                                            {isShow ? <TbEyeOff size={24} className="text-primary" /> : <TbEye size={24} className="text-primary" />}
                                        </div>
                                    }
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && formik.errors.password}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full mt-4"
                                disabled={loading}
                            >
                                {loading ? (
                                    <TbLoader2 size={20} className="animate-spin mx-auto" />
                                ) : (
                                    "Login"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="fixed bottom-10 right-10 text-black dark:text-white">
                    {theme === "light" && (
                        <Tooltip fill placement="left-start" tooltip="Dark Mode" spacing={20} >
                            <Button
                                type="button"
                                size={"40"}
                                rounded="full"
                                variant="text"
                                className="p-1.5"
                                onClick={() => setTheme("dark")}
                            >
                                <PiSun className="w-7 h-7" />
                            </Button>
                        </Tooltip>
                    )}
                    {isDark && (
                        <Tooltip fill placement="left-start" tooltip="System" spacing={20} >
                            <Button
                                type="button"
                                size={"40"}
                                rounded="full"
                                variant="text"
                                className="p-1.5"
                                onClick={() => setTheme("system")}
                            >
                                <PiMoon className="w-7 h-7" />
                            </Button>
                        </Tooltip>
                    )}
                    {theme === "system" && (
                        <Tooltip fill placement="left-start" tooltip="Light Mode" spacing={20} >
                            <Button
                                type="button"
                                size={"40"}
                                rounded="full"
                                variant="text"
                                className="p-1.5"
                                onClick={() => setTheme("light")}
                            >
                                <PiLaptop className="w-7 h-7" />
                            </Button>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginPage