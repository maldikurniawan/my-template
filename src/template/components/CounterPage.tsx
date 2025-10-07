import { Card, CounterGroup } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { PiDownload, PiUsers, PiVan } from "react-icons/pi";

const CounterPage = () => {
    const { colortheme } = useContext(ThemeContext);

    const simpleCounters = [
        { value: 710, label: "HOURS" },
        { value: 915, label: "TICKETS" },
        { value: 580, label: "CUSTOMERS" },
    ];

    const iconCounters = [
        { value: 105, label: "Clients", icon: <PiUsers className="sm:w-6 sm:h-6" /> },
        { value: 300, label: "Downloads", icon: <PiDownload className="sm:w-6 sm:h-6" /> },
        { value: 58, label: "Vehicle", icon: <PiVan className="sm:w-6 sm:h-6" /> },
    ];

    return (
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
            <Card title="Simple Counter">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Simple counter</span> is a basic variant of counter component.
                </div>
                <CounterGroup items={simpleCounters} />
            </Card>

            <Card title="With Icon">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>With icon</span> is a variant of counter component with icon.
                </div>
                <CounterGroup items={iconCounters} rounded />
            </Card>
        </div>
    );
};

export default CounterPage;
