import {
    AlertPage,
    AvatarPage,
    CheckboxPage,
    ColorPickerPage,
    DashboardPage,
    DatePickerPage,
    MonthPickerPage,
    RadioPage,
    SelectPage,
    SwitchPage,
    TextAreaPage,
} from "@/template";
import FileInputPage from "@/template/forms/FileInputPage";
import TextFieldPage from "@/template/forms/TextFieldPage";
import type { JSX } from "react";
import {
    PiCardsFill,
    PiHouseLineFill,
    PiTextboxFill
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
        label: "UI ELEMENTS",
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
];