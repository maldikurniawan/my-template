import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { PiCaretDoubleDown, PiCaretDown, PiChatCircleTextFill, PiHouseLineFill, PiMailboxFill, PiMinus } from 'react-icons/pi';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { sidebar, toggleSidebar, semidark } = useContext(ThemeContext);
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const location = useLocation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && sidebar) {
            toggleSidebar();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
                            <span className="text-2xl ml-1.5 font-semibold align-middle lg:inline dark:text-white-light">TENSHI</span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300"
                            onClick={() => toggleSidebar()}
                        >
                            <PiCaretDoubleDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                    <div className="flex items-center">
                                        <PiHouseLineFill
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark capitalize">dashboard</span>
                                    </div>

                                    <div className={currentMenu !== 'dashboard' ? '-rotate-90' : ''}>
                                        <PiCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500 capitalize">
                                        <li>
                                            <NavLink to="/">sales</NavLink>
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
                                </AnimateHeight>
                            </li>

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark/[0.08] -mx-4 mb-1">
                                <PiMinus className="w-4 h-5 flex-none hidden" />
                                <span>apps</span>
                            </h2>

                            <li className="nav-item capitalize">
                                <ul>
                                    <li className="nav-item">
                                        <NavLink to="/chat" className="group">
                                            <div className="flex items-center">
                                                <PiChatCircleTextFill className="group-hover:!text-primary shrink-0" />
                                                <span className="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">chat</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/mailbox" className="group">
                                            <div className="flex items-center">
                                                <PiMailboxFill className="group-hover:!text-primary shrink-0" />
                                                <span className="pl-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">mailbox</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
