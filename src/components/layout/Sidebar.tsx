import { menu } from "@/constants/menu";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import {
    PiCaretDoubleDown,
    PiCaretDown,
    PiMinus,
} from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    const { sidebar, toggleSidebar, semidark } = useContext(ThemeContext);
    const [currentMenu, setCurrentMenu] = useState<string>("");
    const location = useLocation();

    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => (oldValue === value ? "" : value));
    };

    useEffect(() => {
        if (window.innerWidth < 1024 && sidebar) {
            toggleSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const renderMenu = () =>
        menu.map((item, idx) => {
            if (item.label) {
                return (
                    <h2
                        key={idx}
                        className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark/[0.08] -mx-4 mb-1 whitespace-nowrap"
                    >
                        <PiMinus className="w-4 h-5 flex-none hidden" />
                        <span>{item.label}</span>
                    </h2>
                );
            }

            if (item.sub && item.sub.length > 0) {
                return (
                    <li className="menu nav-item" key={idx}>
                        <button
                            type="button"
                            className={`${currentMenu === item.name ? "active" : ""
                                } nav-link group w-full cursor-pointer`}
                            onClick={() => toggleMenu(item.name as string)}
                        >
                            <div className="flex items-center">
                                {item.icon && (
                                    <span className="shrink-0">{item.icon}</span>
                                )}
                                <span className="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">
                                    {item.title}
                                </span>
                            </div>

                            <div className={currentMenu !== item.name ? "-rotate-90" : ""}>
                                <PiCaretDown />
                            </div>
                        </button>

                        <AnimateHeight
                            duration={300}
                            height={currentMenu === item.name ? "auto" : 0}
                        >
                            <ul className="sub-menu text-gray-500 capitalize whitespace-nowrap">
                                {item.sub.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                        <NavLink to={subItem.path}>{subItem.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </AnimateHeight>
                    </li>
                );
            }

            return (
                <li className="nav-item capitalize" key={idx}>
                    <NavLink to={item.path || "#"} className="group">
                        <div className="flex items-center">
                            {item.icon && (
                                <span className="shrink-0">{item.icon}</span>
                            )}
                            <span className="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                {item.title}
                            </span>
                        </div>
                    </NavLink>
                </li>
            );
        });

    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? "text-white-dark" : ""
                    }`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            <img
                                className="w-8 ml-[5px] flex-none"
                                src="logo.png"
                                alt="logo"
                            />
                            <span className="text-2xl ml-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                                DUMMY
                            </span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 cursor-pointer"
                            onClick={() => toggleSidebar()}
                        >
                            <PiCaretDoubleDown className="m-auto rotate-90" />
                        </button>
                    </div>

                    <div className="h-[calc(100vh-80px)] relative overflow-y-auto scroll-hidden overflow-x-hidden">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            {renderMenu()}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
