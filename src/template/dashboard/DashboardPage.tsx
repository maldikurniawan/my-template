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
                <Charts
                    variant="line"
                    series={[
                        {
                            name: 'Visitor',
                            data: [45, 55, 75, 25, 45, 110],
                        },
                    ]}
                    labels={lastSixMonths}
                    colors={['#4361EE']}
                />
            </Card>
            <Card title="Area Chart">
                <Charts
                    variant="area"
                    series={[
                        {
                            name: 'Visitor',
                            data: [45, 55, 75, 25, 45, 110],
                        },
                    ]}
                    labels={lastSixMonths}
                    colors={['#4361EE']}
                />
            </Card>
            <Card title="Bar Chart">
                <Charts
                    variant="bar"
                    series={[
                        { name: 'Recon', data: ["10", "20", "30", "40", "50", "60"] },
                        { name: 'Vulnera', data: ["10", "20", "30", "40", "50", "60"] },
                    ]}
                    labels={lastSixMonths}
                    colors={['#4361EE', '#805DCA']}
                />
            </Card>
            <Card title="Pie Chart">
                <div className="flex justify-center items-center text-center">
                    <Charts
                        variant="pie"
                        series={[44, 55, 13, 22]}
                        labels={['Team A', 'Team B', 'Team C', 'Team D']}
                        colors={['#4361EE', '#805DCA', '#00AB55', '#E7515A']}
                    />
                </div>
            </Card>
            <Card title="Donut Chart">
                <Charts
                    variant="donut"
                    series={[10, 20]}
                    labels={['IP', 'Domain']}
                    colors={['#4361EE', '#805DCA']}
                />
            </Card>
            <Card title="Radial Chart">
                <div className="h-[315px]">
                    <Charts
                        variant="radialBar"
                        series={[44, 55, 41]}
                        labels={['Apples', 'Oranges', 'Bananas']}
                        colors={['#4361EE', '#805DCA', '#00AB55']}
                    />
                </div>
            </Card>
            <Card title="Polar Chart">
                <div className="flex justify-center items-center text-center h-[315px]">
                    <Charts
                        variant="polarArea"
                        series={[14, 23, 21, 17]}
                        labels={['Apples', 'Oranges', 'Bananas', 'Grapes']}
                        colors={['#4361EE', '#805DCA', '#00AB55', '#E7515A']}
                    />
                </div>

            </Card>
            <Card title="Radar Chart">
                <Charts
                    variant="radar"
                    series={[
                        {
                            name: 'Visitor',
                            data: [80, 50, 30, 40, 100, 20],
                        },
                    ]}
                    labels={lastSixMonths}
                    colors={['#4361EE']}
                />
            </Card>
        </div>
    )
}

export default DashboardPage