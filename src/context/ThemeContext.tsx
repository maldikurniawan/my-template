import themeConfig from "@/constants/themeConfig";
import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

// Define types for the context values
interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    menu: string;
    setMenu: (menu: string) => void;
    colortheme: string;
    setColortheme: (color: string) => void;
    layout: string;
    setLayout: (layout: string) => void;
    animation: string;
    setAnimation: (animation: string) => void;
    navbar: string;
    setNavbar: (navbar: string) => void;
    semidark: boolean;
    setSemidark: (value: boolean) => void;
    sidebar: boolean;
    toggleSidebar: () => void;
}

// Create the ThemeContext
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

// Props untuk ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Theme
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || themeConfig.theme
    );

    useEffect(() => {
        const bodyClassList = document.body.classList;

        const applyTheme = (mode: string) => {
            if (mode === "dark") {
                bodyClassList.add("dark");
            } else {
                bodyClassList.remove("dark");
            }
        };

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const systemTheme = mediaQuery.matches ? "dark" : "light";

            applyTheme(systemTheme);

            const listener = (e: MediaQueryListEvent) => {
                applyTheme(e.matches ? "dark" : "light");
            };
            mediaQuery.addEventListener("change", listener);

            return () => {
                mediaQuery.removeEventListener("change", listener);
            };
        } else {
            applyTheme(theme);
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    // Menu
    const [menu, setMenu] = useState<string>(
        localStorage.getItem("menu") || themeConfig.menu
    );
    useEffect(() => {
        localStorage.setItem("menu", menu);
    }, [menu]);

    // Color
    const [colortheme, setColortheme] = useState<string>(
        localStorage.getItem("colortheme") || themeConfig.colortheme
    );
    useEffect(() => {
        localStorage.setItem("colortheme", colortheme);
    }, [colortheme]);

    // Layout
    const [layout, setLayout] = useState<string>(
        localStorage.getItem("layout") || themeConfig.layout
    );
    useEffect(() => {
        localStorage.setItem("layout", layout);
    }, [layout]);

    // Animation
    const [animation, setAnimation] = useState<string>(
        localStorage.getItem("animation") || themeConfig.animation
    );
    useEffect(() => {
        localStorage.setItem("animation", animation);
    }, [animation]);

    // Navbar
    const [navbar, setNavbar] = useState<string>(
        localStorage.getItem("navbar") || themeConfig.navbar
    );
    useEffect(() => {
        localStorage.setItem("navbar", navbar);
    }, [navbar]);

    // Semidark
    const [semidark, setSemidark] = useState<boolean>(
        localStorage.getItem("semidark") === "true" || themeConfig.semidark
    );
    useEffect(() => {
        localStorage.setItem("semidark", String(semidark));
    }, [semidark]);

    // 👉 Sidebar (tidak perlu localStorage)
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar((prev) => !prev);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                menu,
                setMenu,
                colortheme,
                setColortheme,
                layout,
                setLayout,
                animation,
                setAnimation,
                navbar,
                setNavbar,
                semidark,
                setSemidark,
                sidebar,
                toggleSidebar,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
