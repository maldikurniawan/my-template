import { Breadcrumb, Card } from "@/components"

const BreadcrumbsPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "UI Kit", href: "/" },
        { label: "Breadcrumb" },
    ];

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
            <Card title="Basic">
                <Breadcrumb items={breadcrumbItems} separator="slash" />
            </Card>
            <Card title="Arrowed">
                <Breadcrumb items={breadcrumbItems} separator="arrow" />
            </Card>
            <Card title="Dotted">
                <Breadcrumb items={breadcrumbItems} separator="dot" />
            </Card>
            <Card title="Arrowed Background">
                <Breadcrumb items={breadcrumbItems} variant="arrowed" />
            </Card>
        </div>
    )
}

export default BreadcrumbsPage