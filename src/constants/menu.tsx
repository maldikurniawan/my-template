import {
    AlertPage,
    AvatarPage,
    DashboardPage,
} from "@/template";
import type { JSX } from "react";
import {
    PiCards,
    PiHouseLine
} from "react-icons/pi";

// Adjust the SubMenu interface to not have a nested sub property
interface SubMenu {
    path: string;
    element: JSX.Element;
    icon?: JSX.Element | null;
    name?: string | JSX.Element | null;
    title?: string;
    sub?: [];
    menuLink?: string;
}

// MenuItem interface with sub as an array of SubMenu
interface MenuItem {
    path?: string;
    element?: JSX.Element | null;
    icon?: JSX.Element;
    name?: string | JSX.Element | undefined;
    title?: string;
    sub?: SubMenu[];
    label?: string;
    menuLink?: string;
    iconActive?: string;
}

export const menu: MenuItem[] = [
    {
        icon: <PiHouseLine />,
        path: "/",
        name: "dashboard",
        title: "Dashboard",
        element: <DashboardPage />,
        sub: [],
    },
    {
        label: "UI ELEMENTS",
    },
    {
        icon: <PiCards />,
        path: "components",
        name: "components",
        title: "Components",
        element: null,
        sub: [
            {
                icon: null,
                path: "/ui-elements/components/alert",
                name: "alert",
                title: "Alert",
                element: <AlertPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/ui-elements/components/avatar",
                name: "avatar",
                title: "Avatar",
                element: <AvatarPage />,
                sub: [],
            },
        ],
    },
];