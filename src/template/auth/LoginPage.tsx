import { Button, LetterGlitch, TextField } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { TbEye, TbEyeOff, TbLoader2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

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
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
            />
            <div className="relative w-screen h-screen overflow-hidden flex font-light">
                <div className="flex w-full items-center justify-center p-10">
                    <div className="w-full md:w-96 h-fit p-10 bg-white/10 backdrop-blur-lg rounded-md shadow-lg border border-[#E0E6ED] dark:border-[#253B5C]">
                        <Link to={"/"} className="flex items-center mb-4">
                            <img
                                src={`${theme === "dark" ? "assets/images/logo_text_dark.png" : "assets/images/logo_text_light.png"} `}
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
            </div>
        </div>
    )
}

export default LoginPage