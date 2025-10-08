import { Card, Charts } from "@/components";

const DashboardPage = () => {
    const getLastSixMonths = () => {
        const now = new Date();
        const labels = [];

        for (let i = 5; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i);
            const month = date.toLocaleString('default', { month: 'short' });
            labels.push(`${month}`);
        }

        return labels;
    };

    const lastSixMonths = getLastSixMonths();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Line Chart">
                <Charts variant="line" />
            </Card>
            <Card title="Area Chart">
                <Charts variant="area" />
            </Card>
            <Card title="Bar Chart">
                <Charts
                    variant="bar"
                    series={[
                        { name: 'Recon', data: ["10", "20", "30", "40", "50", "60"] },
                        { name: 'Vulnera', data: ["10", "20", "30", "40", "50", "60"] },
                    ]}
                    colors={['#4361EE', '#805DCA']}
                    labels={lastSixMonths}
                />
            </Card>
            <Card title="Pie Chart">
                <div className="flex justify-center items-center text-center">
                    <Charts variant="pie" />
                </div>
            </Card>
            <Card title="Donut Chart">
                <Charts
                    variant="donut"
                    series={[10, 20]}
                    labels={['IP', 'Domain']}
                />
            </Card>
            <Card title="Radial Chart">
                <div className="h-[315px]">
                    <Charts variant="radialBar" />
                </div>
            </Card>
            <Card title="Polar Chart">
                <div className="flex justify-center items-center text-center h-[315px]">
                    <Charts variant="polarArea" />
                </div>

            </Card>
            <Card title="Radar Chart">
                <Charts variant="radar" />
            </Card>
        </div>
    )
}

export default DashboardPage