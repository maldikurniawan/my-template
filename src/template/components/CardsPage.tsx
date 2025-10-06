import { Card, CardStatistic } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import moment from "moment";
import { useContext, useState } from "react";
import { TbAdCircle, TbAddressBook, TbCrown, TbSettings } from "react-icons/tb";

const CardPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const [cardBasic] = useState([
        {
            title: "Primary",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-primary",
            date: moment().format("ll"),
        },
        {
            title: "Base",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-secondary",
            date: moment().format("ll"),
        },
        {
            title: "Success",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-success",
            date: moment().format("ll"),
        },
        {
            title: "Warning",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-warning",
            date: moment().format("ll"),
        },
        {
            title: "Danger",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-danger",
            date: moment().format("ll"),
        },
        {
            title: "Info",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores corrupti.",
            variant: "bg-info",
            date: moment().format("ll"),
        },
    ]);

    return (
        <div className="flex flex-col gap-6">
            <Card title="Statistic Card">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Statistic card</span> is a component that displays key metrics or data points.
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CardStatistic
                        value={40}
                        title="Harga Bulan Ini"
                        description="Bulan ini Naik 20%"
                        icon={<TbAddressBook />}
                    />
                    <CardStatistic
                        value={60}
                        color="secondary"
                        title="Harga Bulan Ini"
                        description="Bulan ini Naik 20%"
                        icon={<TbAdCircle />}
                    />
                    <CardStatistic
                        value={80}
                        color="success"
                        title="Harga Bulan Ini"
                        description="Bulan ini Naik 20%"
                        icon={<TbSettings />}
                    />
                    <CardStatistic
                        value={100}
                        color="danger"
                        title="Harga Bulan Ini"
                        description="Bulan ini Naik 20%"
                        icon={<TbCrown />}
                    />
                </div>
            </Card>
            <Card title="Color">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>color</span> prop is used to
                    set the background color of the card.
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cardBasic.map((item, itemIdx) => (
                        <Card key={itemIdx} bgColor={item.variant}>
                            <div className="text-white">
                                <div className="text-sm font-bold mb-1">{item.title}</div>
                                <div className="text-xs mb-4">{item.description}</div>
                                <div className="text-[10px] flex justify-end items-end">
                                    {item.date}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default CardPage;