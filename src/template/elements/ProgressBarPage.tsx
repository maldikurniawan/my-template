import { Card, ProgressBar } from "@/components"

const ProgressBarPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card title="Basic">
                <div className="space-y-4 mt-2">
                    <ProgressBar value={30} color="bg-primary" />
                    <ProgressBar value={40} color="bg-secondary" />
                    <ProgressBar value={50} color="bg-success" />
                    <ProgressBar value={60} color="bg-warning" />
                    <ProgressBar value={70} color="bg-danger" />
                    <ProgressBar value={80} color="bg-info" />
                </div>
            </Card>

            <Card title="Gradient">
                <div className="space-y-4 mt-2">
                    <ProgressBar value={30} color="bg-gradient-to-r from-[#0081ff] to-[#0045ff]" />
                    <ProgressBar value={40} color="bg-gradient-to-r from-[#04befe] to-[#4481eb]" />
                    <ProgressBar value={50} color="bg-gradient-to-r from-[#3cba92] to-[#0ba360]" />
                    <ProgressBar value={60} color="bg-gradient-to-r from-[#f09819] to-[#ff5858]" />
                    <ProgressBar value={70} color="bg-gradient-to-r from-[#d09693] to-[#c71d6f]" />
                    <ProgressBar value={80} color="bg-gradient-to-r from-[#7579ff] to-[#b224ef]" />
                </div>
            </Card>

            <Card title="Striped">
                <div className="mt-2">
                    <ProgressBar value={60} color="bg-primary" variant="striped" />
                </div>
            </Card>

            <Card title="Animated">
                <div className="mt-2">
                    <ProgressBar value={60} color="bg-primary" variant="animated" />
                </div>
            </Card>

            <Card title="Sizes">
                <div className="space-y-4 mt-2">
                    <ProgressBar value={30} color="bg-success" size="xs" />
                    <ProgressBar value={50} color="bg-warning" size="sm" />
                    <ProgressBar value={70} color="bg-info" size="lg" />
                    <ProgressBar value={90} color="bg-danger" size="xl" />
                </div>
            </Card>
            <Card title="Labels">
                <div className="space-y-4 mt-2">
                    <ProgressBar value={80} color="bg-info" showLabel />
                    <ProgressBar value={80} color="bg-danger" showLabel label="i'm using arch btw" />
                </div>
            </Card>
        </div>
    )
}

export default ProgressBarPage
