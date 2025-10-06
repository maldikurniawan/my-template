import { Card, Countdown } from "@/components"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const CountdownPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    return (
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
            <Card title="Simple Countdown">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Simple countdown</span> is a basic variant of countdown component.
                </div>
                <Countdown value={targetDate} />
            </Card>
            <Card title="Circle Countdown" >
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Circle countdown</span> is a rounded variant of countdown component.
                </div>
                <Countdown value={targetDate} roundedFull />
            </Card>
        </div>
    )
}

export default CountdownPage
