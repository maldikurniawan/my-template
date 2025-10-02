import { Button, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ButtonPage = () => {
    const { colortheme } = useContext(ThemeContext);
    return (
        <div
            className="grid grid-cols-1 gap-4"
        >
            {/* Color */}
            <Card title="Color">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>color</span> prop is used to
                    change the background color of the button.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="success">Success</Button>
                    <Button color="danger">Danger</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="info">Info</Button>
                </div>
            </Card>

            {/* Variant */}
            <Card title="Variant">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>variant</span> prop is used to
                    change the variant of the button.
                </div>

                <div className="text-sm mb-2 mt-4">Solid</div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="solid" color="primary">
                        Primary
                    </Button>
                    <Button variant="solid" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="solid" color="success">
                        Success
                    </Button>
                    <Button variant="solid" color="danger">
                        Danger
                    </Button>
                    <Button variant="solid" color="warning">
                        Warning
                    </Button>
                    <Button variant="solid" color="info">
                        Info
                    </Button>
                </div>

                <div className="text-sm mb-2 mt-4">Outline</div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="outline" color="primary">
                        Primary
                    </Button>
                    <Button variant="outline" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="outline" color="success">
                        Success
                    </Button>
                    <Button variant="outline" color="danger">
                        Danger
                    </Button>
                    <Button variant="outline" color="warning">
                        Warning
                    </Button>
                    <Button variant="outline" color="info">
                        Info
                    </Button>
                </div>

                <div className="text-sm mb-2 mt-4">Text</div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="text" color="primary">
                        Primary
                    </Button>
                    <Button variant="text" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="text" color="success">
                        Success
                    </Button>
                    <Button variant="text" color="danger">
                        Danger
                    </Button>
                    <Button variant="text" color="warning">
                        Warning
                    </Button>
                    <Button variant="text" color="info">
                        Info
                    </Button>
                </div>

                <div className="text-sm mb-2 mt-4">Tonal</div>
                <div className="flex flex-wrap gap-2">
                    <Button variant="tonal" color="primary">
                        Primary
                    </Button>
                    <Button variant="tonal" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="tonal" color="success">
                        Success
                    </Button>
                    <Button variant="tonal" color="danger">
                        Danger
                    </Button>
                    <Button variant="tonal" color="warning">
                        Warning
                    </Button>
                    <Button variant="tonal" color="info">
                        Info
                    </Button>
                </div>
            </Card>

            {/* Size */}
            <Card title="Size">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>size</span> prop is used to
                    set the size of the button.
                </div>

                <div className="flex flex-wrap items-end gap-2">
                    <Button size="xl" color="primary">
                        XL
                    </Button>
                    <Button size="lg" color="secondary">
                        LG
                    </Button>
                    <Button size="md" color="success">
                        MD
                    </Button>
                    <Button size="sm" color="danger">
                        SM
                    </Button>
                    <Button size="xs" color="warning">
                        XS
                    </Button>
                    <Button size="40" color="info">
                        <span className="text-xs">40</span>
                    </Button>
                </div>
            </Card>

            {/* Rounded */}
            <Card title="Rounded">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>rounded</span> prop is used to
                    set the rounded of the button.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button rounded="none" color="primary">
                        None
                    </Button>
                    <Button rounded="sm" color="secondary">
                        SM
                    </Button>
                    <Button rounded="md" color="success">
                        MD
                    </Button>
                    <Button rounded="lg" color="danger">
                        LG
                    </Button>
                    <Button rounded="xl" color="warning">
                        XL
                    </Button>
                    <Button rounded="full" color="info">
                        Full
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ButtonPage;