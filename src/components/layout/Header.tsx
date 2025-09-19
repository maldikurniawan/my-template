import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { PiCalendar, PiCaretDown, PiChatCenteredText, PiDiceFour, PiHouseLine, PiLaptop, PiMagnifyingGlass, PiMoon, PiNotePencil, PiSun, PiTextAlignJustify, PiXCircle } from 'react-icons/pi';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [location]);

    const { toggleSidebar, semidark, menu, theme, setTheme } = useContext(ThemeContext);

    const [search, setSearch] = useState(false);

    return (
        <header className={`z-40 ${semidark && menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-xs">
                <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                        <Link to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline" src="/assets/images/logo.svg" alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle hidden md:inline dark:text-white-light transition-all duration-300">VRISTO</span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            onClick={() =>
                                toggleSidebar()
                            }
                        >
                            <PiTextAlignJustify className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="ltr:mr-2 rtl:ml-2 hidden sm:block">
                        <ul className="flex items-center space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                            <li>
                                <Link to="/" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                                    <PiCalendar className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                                    <PiNotePencil className="w-5 h-5" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                                    <PiChatCenteredText className="w-5 h-5" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                            <form
                                className={`${search && '!block'} sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                                onSubmit={() => setSearch(false)}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
                                        placeholder="Search..."
                                    />
                                    <button type="button" className="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary">
                                        <PiMagnifyingGlass className="mx-auto w-5 h-5" />
                                    </button>
                                    <button type="button" className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2" onClick={() => setSearch(false)}>
                                        <PiXCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                            <button
                                type="button"
                                onClick={() => setSearch(!search)}
                                className="search_btn sm:hidden p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                            >
                                <PiMagnifyingGlass className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]" />
                            </button>
                        </div>
                        <div>
                            {theme === 'light' ? (
                                <button
                                    className={`${theme === 'light' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                        }`}
                                    onClick={() =>
                                        setTheme('light')
                                    }
                                >
                                    <PiSun className="w-5 h-5" />
                                </button>
                            ) : (
                                ''
                            )}
                            {theme === 'dark' && (
                                <button
                                    className={`${theme === 'dark' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                        }`}
                                    onClick={() =>
                                        setTheme('dark')
                                    }
                                >
                                    <PiMoon className="w-5 h-5" />
                                </button>
                            )}
                            {theme === 'system' && (
                                <button
                                    className={`${theme === 'system' &&
                                        'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                                        }`}
                                    onClick={() =>
                                        setTheme('system')
                                    }
                                >
                                    <PiLaptop className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* horizontal menu */}
                <ul className="horizontal-menu hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <PiHouseLine className="shrink-0" />
                                <span className="px-1">dashboard</span>
                            </div>
                            <div className="right_arrow">
                                <PiCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/sales">sales</NavLink>
                            </li>
                            <li>
                                <NavLink to="/analytics">analytics</NavLink>
                            </li>
                            <li>
                                <NavLink to="/finance">finance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/crypto">crypto</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <PiDiceFour className="shrink-0" />
                                <span className="px-1">apps</span>
                            </div>
                            <div className="right_arrow">
                                <PiCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/chat">chat</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mailbox">mailbox</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
