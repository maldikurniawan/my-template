import React from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: "slash" | "arrow" | "dot";
    variant?: "separator" | "arrowed";
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator,
    variant = "separator",
}) => {
    const renderSeparator = () => {
        switch (separator) {
            case "arrow":
                return <span className="before:content-['>'] before:px-1.5 text-[#0E172690] dark:text-[#FAFAFA90]"> </span>;
            case "dot":
                return <span className="before:content-['•'] before:px-1.5 text-[#0E172690] dark:text-[#FAFAFA90]"> </span>;
            case "slash":
                return <span className="before:content-['/'] before:px-1.5 text-[#0E172690] dark:text-[#FAFAFA90]"> </span>;
            default:
                return;
        }
    };

    const renderArrowedItem = (item: BreadcrumbItem, index: number) => {
        const isLast = index === items.length - 1;
        const bgColor = index % 2 === 0 ? "bg-[#4361ee]" : "bg-[#805dca]";

        return (
            <li key={index} className={bgColor}>
                <button
                    className={`p-1.5 ${isLast ? "pl-6 px-2" : "pl-6 pr-2"
                        } relative h-full flex items-center text-white hover:text-white/70 before:absolute before:-right-[15px] before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[18px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent ${index % 2 === 0 ? "before:border-l-[#4361ee]" : "before:border-l-[#805dca]"} before:z-[1]`}
                >
                    {item.href ? (
                        <a href={item.href} className="text-white hover:text-white/70">
                            {item.label}
                        </a>
                    ) : (
                        item.label
                    )}
                </button>
            </li>
        );
    };

    return (
        <div>
            {variant === "separator" && (
                <ol className="flex font-semibold">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {item.href ? (
                                <a href={item.href} className="text-[#0E172690] dark:text-[#FAFAFA90]">
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-black dark:text-white">{item.label}</span>
                            )}
                            {index < items.length - 1 && renderSeparator()}
                        </li>
                    ))}
                </ol>
            )}
            {variant === "arrowed" && (
                <ol className="flex text-black dark:text-white font-semibold">
                    {items.map((item, index) => renderArrowedItem(item, index))}
                </ol>
            )}
        </div>
    );
};

export default Breadcrumb;