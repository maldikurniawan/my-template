import { Card, ProgressBar } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ProgressBarPage = () => {
    const { colortheme } = useContext(ThemeContext);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <Card title="Basic">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Basic progress bar</span> with solid colors to show progress percentage.
                </div>
                <div className="space-y-4">
                    <ProgressBar value={30} color="bg-primary" />
                    <ProgressBar value={40} color="bg-secondary" />
                    <ProgressBar value={50} color="bg-success" />
                    <ProgressBar value={60} color="bg-warning" />
                    <ProgressBar value={70} color="bg-danger" />
                    <ProgressBar value={80} color="bg-info" />
                </div>
            </Card>

            <Card title="Gradient">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Gradient progress bar</span> with smooth color transitions.
                </div>
                <div className="space-y-4">
                    <ProgressBar value={30} color="bg-gradient-to-r from-[#0081ff] to-[#0045ff]" />
                    <ProgressBar value={40} color="bg-gradient-to-r from-[#04befe] to-[#4481eb]" />
                    <ProgressBar value={50} color="bg-gradient-to-r from-[#3cba92] to-[#0ba360]" />
                    <ProgressBar value={60} color="bg-gradient-to-r from-[#f09819] to-[#ff5858]" />
                    <ProgressBar value={70} color="bg-gradient-to-r from-[#d09693] to-[#c71d6f]" />
                    <ProgressBar value={80} color="bg-gradient-to-r from-[#7579ff] to-[#b224ef]" />
                </div>
            </Card>

            <Card title="Striped">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Striped progress bar</span> with diagonal stripe style.
                </div>
                <ProgressBar value={60} color="bg-primary" variant="striped" />
            </Card>

            <Card title="Animated">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Animated progress bar</span> with moving stripes for a dynamic look.
                </div>
                <ProgressBar value={60} color="bg-primary" variant="animated" />
            </Card>

            <Card title="Sizes">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Progress bar sizes</span> with extra small to extra large variations.
                </div>
                <div className="space-y-4">
                    <ProgressBar value={30} color="bg-success" size="xs" />
                    <ProgressBar value={50} color="bg-warning" size="sm" />
                    <ProgressBar value={70} color="bg-info" size="lg" />
                    <ProgressBar value={90} color="bg-danger" size="xl" />
                </div>
            </Card>

            <Card title="Labels">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Progress bar with labels</span> to display text inside the bar.
                </div>
                <div className="space-y-4">
                    <ProgressBar value={80} color="bg-info" showLabel />
                    <ProgressBar value={80} color="bg-danger" showLabel label="i'm using arch btw" />
                </div>
            </Card>
        </div>
    )
}

export default ProgressBarPage
