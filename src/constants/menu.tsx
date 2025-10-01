import {
    AlertPage,
    AvatarPage,
    CalendarPage,
    CheckboxPage,
    ColorPickerPage,
    DashboardPage,
    DatePickerPage,
    FileInputPage,
    MapPage,
    MonthPickerPage,
    RadioPage,
    SelectPage,
    SwitchPage,
    TablePage,
    TextAreaPage,
    TextFieldPage,
} from "@/template";
import type { JSX } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import {
    PiCalendarBlankFill,
    PiCardsFill,
    PiFileTextFill,
    PiHouseLineFill,
    PiLightningFill,
    PiTableFill,
    PiTextboxFill,
    PiUserFill
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
        icon: <PiHouseLineFill />,
        path: "/",
        name: "dashboard",
        title: "Dashboard",
        element: <DashboardPage />,
        sub: [],
    },
    {
        label: "USER INTERFACE",
    },
    {
        icon: <PiCardsFill />,
        path: "components",
        name: "components",
        title: "Components",
        element: null,
        sub: [
            {
                icon: null,
                path: "/user-interface/components/alert",
                name: "alert",
                title: "Alert",
                element: <AlertPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/user-interface/components/avatar",
                name: "avatar",
                title: "Avatar",
                element: <AvatarPage />,
                sub: [],
            },
        ],
    },
    {
        icon: <PiLightningFill />,
        path: "elements",
        name: "elements",
        title: "Elements",
        element: null,
        sub: [
            {
                icon: null,
                path: "/user-interface/elements/alert",
                name: "alert",
                title: "Alert",
                element: <AlertPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/user-interface/elements/avatar",
                name: "avatar",
                title: "Avatar",
                element: <AvatarPage />,
                sub: [],
            },
        ],
    },
    {
        icon: <PiCalendarBlankFill />,
        path: "/calendar",
        name: "calendar",
        title: "Calendar",
        element: <CalendarPage />,
        sub: [],
    },
    {
        icon: <FaMapMarkedAlt />,
        path: "/maps",
        name: "maps",
        title: "Maps",
        element: <MapPage />,
        sub: [],
    },
    {
        label: "FORMS & TABLES",
    },
    {
        icon: <PiTextboxFill />,
        path: "forms",
        name: "forms",
        title: "Forms",
        element: null,
        sub: [
            {
                icon: null,
                path: "/form-tables/forms/checkbox",
                name: "checkbox",
                title: "Checkbox",
                element: <CheckboxPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/color-picker",
                name: "color-picker",
                title: "Color Picker",
                element: <ColorPickerPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/date-picker",
                name: "date-picker",
                title: "Date Picker",
                element: <DatePickerPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/file-input",
                name: "file-input",
                title: "File Input",
                element: <FileInputPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/month-picker",
                name: "month-picker",
                title: "Month Picker",
                element: <MonthPickerPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/radio",
                name: "radio",
                title: "Radio",
                element: <RadioPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/select",
                name: "select",
                title: "Select",
                element: <SelectPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/switch",
                name: "switch",
                title: "Switch",
                element: <SwitchPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/textarea",
                name: "textarea",
                title: "Text Area",
                element: <TextAreaPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/form-tables/forms/textfield",
                name: "textfield",
                title: "Text Field",
                element: <TextFieldPage />,
                sub: [],
            },
        ],
    },
    {
        icon: <PiTableFill />,
        path: "/tables",
        name: "tables",
        title: "Tables",
        element: <TablePage />,
        sub: [],
    },
    {
        label: "USER & PAGES",
    },
    {
        icon: <PiUserFill />,
        path: "users",
        name: "users",
        title: "Users",
        element: null,
        sub: [
            {
                icon: null,
                path: "/user-pages/users/alert",
                name: "alert",
                title: "Alert",
                element: <AlertPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/user-pages/users/avatar",
                name: "avatar",
                title: "Avatar",
                element: <AvatarPage />,
                sub: [],
            },
        ],
    },
    {
        icon: <PiFileTextFill />,
        path: "pages",
        name: "pages",
        title: "Pages",
        element: null,
        sub: [
            {
                icon: null,
                path: "/user-pages/pages/alert",
                name: "alert",
                title: "Alert",
                element: <AlertPage />,
                sub: [],
            },
            {
                icon: null,
                path: "/user-pages/pages/avatar",
                name: "avatar",
                title: "Avatar",
                element: <AvatarPage />,
                sub: [],
            },
        ],
    },
];