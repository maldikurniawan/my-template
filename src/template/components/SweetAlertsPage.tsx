import { Button, Card, SweetAlert } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const SweetAlertsPage = () => {
    const { colortheme } = useContext(ThemeContext);
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
            <Card title="Basic Message">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Basic message</span> to show a simple sweet alert popup.
                </div>
                <SweetAlert variant={1}>
                    <Button color="primary" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Success Message">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Success message</span> to notify that an action was completed successfully.
                </div>
                <SweetAlert variant={2}>
                    <Button color="secondary" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Dynamic Queue">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Dynamic queue</span> to display dynamic value with sweet alert popup.
                </div>
                <SweetAlert variant={3}>
                    <Button color="success" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Chaining Modals">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Chaining modals</span> to show step-by-step alerts one after another.
                </div>
                <SweetAlert variant={4}>
                    <Button color="danger" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Custom Image">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Custom image</span> to show an alert with an image or icon inside.
                </div>
                <SweetAlert variant={5}>
                    <Button color="warning" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Delete Message">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Delete message</span> to confirm before deleting an item.
                </div>
                <SweetAlert variant={6}>
                    <Button color="info" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Delete Message V2">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Delete message v2</span> as another variation of delete confirmation.
                </div>
                <SweetAlert variant={7}>
                    <Button color="primary" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="With Footer">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>With footer</span> to show an alert that also has extra footer content.
                </div>
                <SweetAlert variant={8}>
                    <Button color="secondary" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>

            <Card title="Mixin">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Toast alert</span> that show quick, reusable alerts at the corner of the screen.
                </div>
                <SweetAlert variant={9}>
                    <Button color="success" className="w-full">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
        </div>
    )
}

export default SweetAlertsPage
