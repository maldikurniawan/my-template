import { Card, CardStatistic } from "@/components";
import moment from "moment";
import { useState } from "react";
import { TbAdCircle, TbAddressBook, TbCrown, TbSettings } from "react-icons/tb";

const CardPage = () => {
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
        <div className="flex flex-col gap-4">
            <div
                className="flex flex-col gap-4"
            >
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
            </div>
            <div
                className="flex flex-col gap-4"
            >
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
            </div>
        </div>
    );
};

export default CardPage;