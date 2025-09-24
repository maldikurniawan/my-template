import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useState } from 'react';
import { PiGear, PiLaptop, PiMoon, PiSun, PiX } from 'react-icons/pi';

const Setting = () => {
    const { navbar, setNavbar, animation, setAnimation, layout, setLayout, menu, setMenu, semidark, setSemidark, theme, setTheme } = useContext(ThemeContext);

    const [showCustomizer, setShowCustomizer] = useState(false);

    return (
        <div>
            <div className={`${(showCustomizer && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} onClick={() => setShowCustomizer(false)}></div>

            <nav
                className={`${(showCustomizer && '!right-0') || ''
                    } bg-white fixed -right-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 z-[51] dark:bg-black p-4`}
            >
                <button
                    type="button"
                    className="bg-[#4361ee] rounded-tl-full rounded-bl-full absolute -left-12 top-0 bottom-0 my-auto w-12 h-10 flex justify-center items-center text-white cursor-pointer"
                    onClick={() => setShowCustomizer(!showCustomizer)}
                >
                    <PiGear className="animate-[spin_3s_linear_infinite] w-5 h-5" />
                </button>

                <div className="overflow-y-auto overflow-x-hidden custom-scroll h-full">
                    <div className="text-center relative pb-5">
                        <button type="button" className="absolute top-0 right-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => setShowCustomizer(false)}>
                            <PiX className="w-5 h-5" />
                        </button>

                        <h4 className="mb-1 dark:text-white">TEMPLATE CUSTOMIZER</h4>
                        <p className="text-[#888ea8]">Set preferences that will be cookied for your live preview demonstration.</p>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Color Scheme</h5>
                        <p className="text-[#888ea8] text-xs">Overall light or dark presentation.</p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <button type="button" className={`${theme === 'light' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`} onClick={() => setTheme('light')}>
                                <PiSun className="w-5 h-5 shrink-0 mr-2" />
                                Light
                            </button>

                            <button type="button" className={`${theme === 'dark' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`} onClick={() => setTheme('dark')}>
                                <PiMoon className="w-5 h-5 shrink-0 mr-2" />
                                Dark
                            </button>

                            <button type="button" className={`${theme === 'system' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`} onClick={() => setTheme('system')}>
                                <PiLaptop className="w-5 h-5 shrink-0 mr-2" />
                                System
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Navigation Position</h5>
                        <p className="text-[#888ea8] text-xs">Select the primary navigation paradigm for your app.</p>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <button type="button" className={`${menu === 'horizontal' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`} onClick={() => setMenu('horizontal')}>
                                Horizontal
                            </button>

                            <button type="button" className={`${menu === 'vertical' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`} onClick={() => setMenu('vertical')}>
                                Vertical
                            </button>

                            <button
                                type="button"
                                className={`${menu === 'collapsible-vertical' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none cursor-pointer`}
                                onClick={() => setMenu('collapsible-vertical')}
                            >
                                Collapsible
                            </button>
                        </div>
                        <div className="mt-5 text-[#4361ee]">
                            <div className="inline-flex mb-0">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    checked={semidark === true}
                                    onChange={(e) => setSemidark(e.target.checked)}
                                />
                                <span>Semi Dark (Sidebar & Header)</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Layout Style</h5>
                        <p className="text-[#888ea8] text-xs">Select the primary layout style for your app.</p>
                        <div className="flex gap-2 mt-3">
                            <button
                                type="button"
                                className={`${layout === 'boxed-layout' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none flex-auto cursor-pointer`}
                                onClick={() => setLayout('boxed-layout')}
                            >
                                Box
                            </button>

                            <button type="button" className={`${layout === 'full' ? 'border-primary bg-primary text-white shadow-primary/60' : 'border-primary text-primary shadow-none hover:bg-primary hover:text-white'} relative flex items-center justify-center rounded-md border px-5 py-2 text-sm font-semibold shadow-[0_10px_20px_-10px] outline-none transition duration-300 hover:shadow-none flex-auto cursor-pointer`} onClick={() => setLayout('full')}>
                                Full
                            </button>
                        </div>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Navbar Type</h5>
                        <p className="text-[#888ea8] text-xs">Sticky or Floating.</p>
                        <div className="mt-3 flex items-center gap-3 text-[#4361ee]">
                            <div className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === 'navbar-sticky'}
                                    value="navbar-sticky"
                                    className="form-radio"
                                    onChange={() => setNavbar('navbar-sticky')}
                                />
                                <span>Sticky</span>
                            </div>
                            <div className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === 'navbar-floating'}
                                    value="navbar-floating"
                                    className="form-radio"
                                    onChange={() => setNavbar('navbar-floating')}
                                />
                                <span>Floating</span>
                            </div>
                            <div className="inline-flex mb-0">
                                <input
                                    type="radio"
                                    checked={navbar === 'navbar-static'}
                                    value="navbar-static"
                                    className="form-radio"
                                    onChange={() => setNavbar('navbar-static')}
                                />
                                <span>Static</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Router Transition</h5>
                        <p className="text-[#888ea8] text-xs">Animation of main content.</p>
                        <div className="mt-3">
                            <select className="form-select border-[#4361ee] text-[#4361ee]" value={animation} onChange={(e) => setAnimation(e.target.value)}>
                                <option value=" ">None</option>
                                <option value="animate__fadeIn">Fade</option>
                                <option value="animate__fadeInDown">Fade Down</option>
                                <option value="animate__fadeInUp">Fade Up</option>
                                <option value="animate__fadeInLeft">Fade Left</option>
                                <option value="animate__fadeInRight">Fade Right</option>
                                <option value="animate__slideInDown">Slide Down</option>
                                <option value="animate__slideInLeft">Slide Left</option>
                                <option value="animate__slideInRight">Slide Right</option>
                                <option value="animate__zoomIn">Zoom In</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Setting;
