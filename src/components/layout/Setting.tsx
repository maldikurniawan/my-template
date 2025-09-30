import { Checkbox, Radio, Select } from '@/components';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useState } from 'react';
import { PiGear, PiLaptop, PiMoon, PiSun, PiX } from 'react-icons/pi';

const Setting = () => {
    const { navbar, setNavbar, animation, setAnimation, layout, setLayout, menu, setMenu, semidark, setSemidark, theme, setTheme } = useContext(ThemeContext);

    const [showCustomizer, setShowCustomizer] = useState(false);

    const animateOptions = [
        { label: "None", value: "" },
        { label: "Fade", value: "animate__fadeIn" },
        { label: "Fade Down", value: "animate__fadeInDown" },
        { label: "Fade Up", value: "animate__fadeInUp" },
        { label: "Fade Left", value: "animate__fadeInLeft" },
        { label: "Fade Right", value: "animate__fadeInRight" },
        { label: "Slide Down", value: "animate__slideInDown" },
        { label: "Slide Left", value: "animate__slideInLeft" },
        { label: "Slide Right", value: "animate__slideInRight" },
        { label: "Zoom In", value: "animate__zoomIn" },
    ];

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
                        <p className="text-[#888ea8] px-4">Set preferences that will be cookied for your live preview demonstration.</p>
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
                        <div className="grid grid-cols-2 gap-2 mt-3">

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
                        <div className="mt-5">
                            <Checkbox
                                id="semidark"
                                checked={semidark}
                                onChange={() => setSemidark(!semidark)}
                                label="Semi Dark (Sidebar & Header)"
                                size='xl'
                            />
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
                        <div className="mt-3">
                            <Radio
                                value={navbar}
                                onChange={setNavbar}
                                options={[
                                    { label: "Sticky", value: "navbar-sticky" },
                                    { label: "Floating", value: "navbar-floating" },
                                    { label: "Static", value: "navbar-static" },
                                ]}
                                size="xl"
                                color="lightGreen"
                            />
                        </div>
                    </div>

                    <div className="border border-dashed border-[#e0e6ed] dark:border-[#1b2e4b] rounded-md mb-3 p-3">
                        <h5 className="mb-1 text-base dark:text-white leading-none">Router Transition</h5>
                        <p className="text-[#888ea8] text-xs">Animation of main content.</p>
                        <div className="mt-3">
                            <Select
                                id="animation"
                                name="animation"
                                options={animateOptions}
                                value={animateOptions.find((opt) => opt.value === animation) ?? { label: "None", value: "" }}
                                onChange={(option) => setAnimation(option?.value ?? "")}
                                placeholder="Select animation"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Setting;
