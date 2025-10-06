import { Card, Timeline } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import moment from "moment";
import { useContext, useState } from "react";
import {
    TbChecklist,
    TbGitFork,
    TbServerCog,
    TbSettingsCheck,
    TbSourceCode,
    TbWorldShare,
} from "react-icons/tb";

const TimelinePage = () => {
    const { colortheme } = useContext(ThemeContext);

    const [timeline] = useState([
        {
            title: "Requirements Gathering",
            description:
                "During this phase, project teams gather and document detailed requirements from stakeholders. This involves understanding the needs and expectations for the software.",
            date: moment().format("ll"),
            color: "primary",
            icon: <TbChecklist />,
            variant: "bg-primary",
        },
        {
            title: "Design",
            description:
                "In this phase, a high-level system architecture is designed. Modules and components are identified, and the database structure is outlined based on the gathered requirements.",
            date: moment().format("ll"),
            color: "secondary",
            icon: <TbGitFork />,
            variant: "bg-secondary",
        },
        {
            title: "Implementation (Coding)",
            description:
                "The actual coding of the software takes place in this phase. Developers write code according to the detailed design specifications created in the previous phase.",
            date: moment().format("ll"),
            color: "success",
            icon: <TbSourceCode />,
            variant: "bg-success",
        },
        {
            title: "Integration and Testing",
            description:
                "Components developed in the coding phase are integrated to build the complete system. Testing is performed to ensure the software functions correctly and meets the specified requirements.",
            date: moment().format("ll"),
            color: "warning",
            icon: <TbServerCog />,
            variant: "bg-warning",
        },
        {
            title: "Deployment",
            description:
                "The software is released to the production environment, making it available to end-users. This phase involves careful planning and execution to ensure a smooth transition.",
            date: moment().format("ll"),
            color: "danger",
            icon: <TbWorldShare />,
            variant: "bg-danger",
        },
        {
            title: "Maintenance",
            description:
                "Ongoing support and maintenance activities. This includes addressing issues discovered after deployment, making updates, and ensuring the long-term functionality of the system.",
            date: moment().format("ll"),
            color: "info",
            icon: <TbSettingsCheck />,
            variant: "bg-info",
        },
    ]);

    const [timelineVariant] = useState([
        {
            title: "Requirements Gathering - Solid",
            description:
                "During this phase, project teams gather and document detailed requirements from stakeholders. This involves understanding the needs and expectations for the software.",
            date: moment().format("ll"),
            variant: "solid",
            icon: <TbChecklist />,
        },
        {
            title: "Design - Tonal",
            description:
                "In this phase, a high-level system architecture is designed. Modules and components are identified, and the database structure is outlined based on the gathered requirements.",
            date: moment().format("ll"),
            variant: "tonal",
            icon: <TbGitFork />,
        },
        {
            title: "Implementation (Coding) - Dot",
            description:
                "The actual coding of the software takes place in this phase. Developers write code according to the detailed design specifications created in the previous phase.",
            date: moment().format("ll"),
            variant: "dot",
            icon: <TbSourceCode />,
        },
        {
            title: "Integration and Testing - Default",
            description:
                "Components developed in the coding phase are integrated to build the complete system. Testing is performed to ensure the software functions correctly and meets the specified requirements.",
            date: moment().format("ll"),
            variant: "",
            icon: <TbServerCog />,
        },
    ]);

    return (
        <div
            className="grid md:grid-cols-2 gap-6"
        >
            {/* Color */}
            <Card title="Color">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>color</span> prop is used to
                    set the color of the timeline dot.
                </div>

                <Timeline>
                    {timeline.map((item, itemIdx) => (
                        <Timeline.Item
                            noline={timeline.length - 1 === itemIdx}
                            key={itemIdx}
                            size="xs"
                            variant="dot"
                            color={item.color}
                        >
                            <div>
                                <div className="font-bold text-sm">{item.title}</div>
                                <div className="text-xs mb-4">{item.description}</div>
                                <div className="text-[10px] text-white/75">{item.date}</div>
                            </div>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>

            {/* Variant */}
            <Card title="Variant">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>variant</span> prop is used to
                    set the variant of the timeline dot.
                </div>

                <Timeline>
                    {timelineVariant.map((item, itemIdx) => (
                        <Timeline.Item
                            noline={timelineVariant.length - 1 === itemIdx}
                            key={itemIdx}
                            variant={item.variant}
                            color="primary"
                            icon={item.icon}
                        >
                            <div>
                                <div className="font-bold text-sm">{item.title}</div>
                                <div className="text-xs mb-4">{item.description}</div>
                                <div className="text-[10px] text-white/75">{item.date}</div>
                            </div>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>

            {/* Multi & Position */}
            <div className="col-span-full">
                <Card title="Multi & Position">
                    <div className="text-sm mb-3">
                        The <span style={{ color: colortheme }}>multi</span> prop is set in
                        the timeline component to enable multi-column layout.
                        <br />
                        The <span style={{ color: colortheme }}>position</span> prop is set
                        in the timeline. Item component to set the position of the timeline
                        dot. The default position is right.
                    </div>

                    <Timeline multi>
                        {timeline.map((item, itemIdx) => (
                            <Timeline.Item
                                noline={timeline.length - 1 === itemIdx}
                                position={itemIdx % 2 === 0 ? "right" : "left"}
                                key={itemIdx}
                                variant={item.variant}
                                color={item.color}
                                icon={item.icon}
                                size="xl"
                            >
                                <Card bgColor={item.variant}>
                                    <div className="text-white">
                                        <div className="font-bold text-sm">{item.title}</div>
                                        <div className="text-xs mb-4">{item.description}</div>
                                        <div className="text-[10px]">{item.date}</div>
                                    </div>
                                </Card>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Card>
            </div>
        </div>
    );
};

export default TimelinePage;