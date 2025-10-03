import { Button, Card, SweetAlert } from "@/components"

const SweetAlertsPage = () => {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
        >
            <Card title="Basic Message">
                <SweetAlert variant={1}>
                    <Button color="primary" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Success Message">
                <SweetAlert variant={2}>
                    <Button color="secondary" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Dynamic Queue">
                <SweetAlert variant={3}>
                    <Button color="success" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Chaining Modals">
                <SweetAlert variant={4}>
                    <Button color="danger" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Custom Image">
                <SweetAlert variant={5}>
                    <Button color="warning" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Delete Message">
                <SweetAlert variant={6}>
                    <Button color="info" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Delete Message V2">
                <SweetAlert variant={7}>
                    <Button color="primary" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="With Footer">
                <SweetAlert variant={8}>
                    <Button color="secondary" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
            <Card title="Mixin">
                <SweetAlert variant={9}>
                    <Button color="success" className="w-full mt-2">
                        Show Alert
                    </Button>
                </SweetAlert>
            </Card>
        </div>
    )
}

export default SweetAlertsPage