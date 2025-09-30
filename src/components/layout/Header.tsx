import { menu } from "@/constants/menu";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect } from "react";
import {
    PiCaretDown,
    PiLaptop,
    PiMinus,
    PiMoon,
    PiSun,
    PiTextAlignJustify,
} from "react-icons/pi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const { toggleSidebar, semidark, menu: menuMode, theme, setTheme } =
        useContext(ThemeContext);

    useEffect(() => {
        const selector = document.querySelector(
            'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
        );
        if (selector) {
            selector.classList.add("active");
            const all: any = document.querySelectorAll(
                "ul.horizontal-menu .nav-link.active"
            );
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove("active");
            }
            const ul: any = selector.closest("ul.sub-menu");
            if (ul) {
                let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add("active");
                    });
                }
            }
        }
    }, [location]);

    const renderMenu = () =>
        menu.map((item, idx) => {
            if (item.label) {
                return (
                    <li key={idx} className="menu-label hidden">
                        <PiMinus className="hidden" /> {item.label}
                    </li>
                );
            }

            if (item.sub && item.sub.length > 0) {
                return (
                    <li className="menu nav-item relative" key={idx}>
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                {item.icon && <span className="shrink-0">{item.icon}</span>}
                                <span className="px-1 capitalize">{item.title}</span>
                            </div>
                            <div className="right_arrow">
                                <PiCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu capitalize">
                            {item.sub.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                    <NavLink to={subItem.path}>{subItem.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                );
            }

            return (
                <li className="menu nav-item relative" key={idx}>
                    <NavLink to={item.path || "#"} className="nav-link">
                        <div className="flex items-center">
                            {item.icon && <span className="shrink-0">{item.icon}</span>}
                            <span className="px-1 capitalize">{item.title}</span>
                        </div>
                    </NavLink>
                </li>
            );
        });

    return (
        <header className={`z-40 ${semidark && menuMode === "horizontal" ? "dark" : ""}`}>
            <div>
                <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black shadow-xs">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center mr-2">
                        <Link to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-8 -ml-1 inline" src="/assets/images/logo.svg" alt="logo" />
                            <span className="text-2xl ml-1.5 font-semibold align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                                TENSHI
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ml-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            onClick={() => toggleSidebar()}
                        >
                            <PiTextAlignJustify className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="sm:flex-1 sm:ml-0 ml-auto flex items-center justify-end space-x-1.5 lg:space-x-2 main-logo dark:text-[#d0d2d6]">
                        <div>
                            {theme === "light" && (
                                <button
                                    type="button"
                                    className="flex items-center p-2 rounded-full cursor-pointer bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                    onClick={() => setTheme("dark")}
                                >
                                    <PiSun className="w-5 h-5" />
                                </button>
                            )}
                            {theme === "dark" && (
                                <button
                                    className="flex items-center p-2 rounded-full cursor-pointer bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                    onClick={() => setTheme("system")}
                                >
                                    <PiMoon className="w-5 h-5" />
                                </button>
                            )}
                            {theme === "system" && (
                                <button
                                    className="flex items-center p-2 rounded-full cursor-pointer bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                    onClick={() => setTheme("light")}
                                >
                                    <PiLaptop className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                        <img
                            src="https://i.pravatar.cc/200"
                            alt="Profile"
                            className="w-9 h-9 rounded-full object-cover saturate-50 hover:saturate-100 cursor-pointer"
                        />
                    </div>
                </div>

                <ul className="horizontal-menu hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 main-logo bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">
                    {renderMenu()}
                </ul>
            </div>
        </header>
    );
};

export default Header;
