import { Breadcrumb, Card } from "@/components"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const BreadcrumbsPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "UI Kit", href: "/" },
        { label: "Breadcrumb" },
    ];

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
            <Card title="Basic">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Basic breadcrumb</span> with a simple slash separator.
                </div>
                <Breadcrumb items={breadcrumbItems} separator="slash" />
            </Card>

            <Card title="Arrowed">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Arrowed breadcrumb</span> using arrows as the separator between items.
                </div>
                <Breadcrumb items={breadcrumbItems} separator="arrow" />
            </Card>

            <Card title="Dotted">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Dotted breadcrumb</span> that uses dots as the item separator.
                </div>
                <Breadcrumb items={breadcrumbItems} separator="dot" />
            </Card>

            <Card title="Arrowed Background">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Breadcrumb</span> with a background highlight and arrow style.
                </div>
                <Breadcrumb items={breadcrumbItems} variant="arrowed" />
            </Card>
        </div>
    )
}

export default BreadcrumbsPage
