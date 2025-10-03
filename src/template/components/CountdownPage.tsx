import { Card, Countdown } from "@/components"

const CountdownPage = () => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    return (
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <Card title="Simple Countdown">
                <div className="mt-2">
                    <Countdown value={targetDate} />
                </div>

            </Card>
            <Card title="Circle Countdown" >
                <div className="mt-2">
                    <Countdown value={targetDate} roundedFull />
                </div>
            </Card>
        </div>
    )
}

export default CountdownPage
