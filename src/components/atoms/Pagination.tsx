import { DOTS, usePagination } from "@/hooks/usePagination";
import { TbChevronLeft, TbChevronRight, TbDots } from "react-icons/tb";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    activeColor?: "primary" | "base" | "success" | "warning" | "danger" | "info" | string;
    rounded?: "none" | "sm" | "rounded" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | string;
    variant?: "solid" | "flat" | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number | string;
}

const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    activeColor = "primary",
    rounded = "md",
    variant = "flat",
    size = "sm",
}) => {
    const { colortheme, theme } = useContext(ThemeContext);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    }) ?? [];

    const onNext = () => onPageChange(currentPage + 1);
    const onPrevious = () => onPageChange(currentPage - 1);

    const colorPaginations: Record<string, string> = {
        primary: colortheme,
        secondary: "#805DCA",
        success: "#00AB55",
        danger: "#E7515A",
        warning: "#E2A03F",
        info: "#2196F3",
    };

    const colorPagination = colorPaginations[activeColor] || activeColor;

    const sizePagination = {
        xs: 25,
        sm: 30,
        md: 35,
        lg: 40,
        xl: 45,
    }[size] || size;

    const lastPage = paginationRange[paginationRange.length - 1] as number;

    const pageRounded =
        {
            none: "rounded-none",
            sm: "rounded-sm",
            rounded: "rounded",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            full: "rounded-full",
        }[rounded] || "rounded-none";

    // Define shadow styles based on variant
    const getShadowStyle = variant === "solid" ? "shadow" : "";

    const disabledColor = theme === "dark" ? "#E0E6ED50" : "#3B3F5C50";

    return (
        <div className="flex gap-2">
            {totalCount > 0 && (
                <>
                    {/* Left Navigation */}
                    <button
                        className={`${getShadowStyle} flex justify-center items-center ${pageRounded} ${currentPage === 1 ? 'bg-white-light dark:bg-[#191E3A] cursor-not-allowed' : 'bg-[#E0E6ED] dark:bg-[#191E3A]'} text-dark dark:text-white-light`}
                        style={{
                            width: sizePagination,
                            height: sizePagination,
                        }}
                        onClick={onPrevious}
                        disabled={currentPage === 1}
                    >
                        <TbChevronLeft
                            style={{
                                color: currentPage === 1 ? disabledColor : "inherit",
                            }}
                        />
                    </button>

                    {paginationRange.map((pageNumber, index) => {
                        if (pageNumber === DOTS) {
                            return (
                                <button
                                    key={index}
                                    style={{
                                        width: sizePagination,
                                        height: sizePagination,
                                        backgroundColor: theme === "dark" ? "#191E3A" : "#E0E6ED",
                                        color: theme === "dark" ? "#E0E6ED" : "#3B3F5C",
                                    }}
                                    disabled
                                    className={`${getShadowStyle} cursor-not-allowed flex justify-center items-center ${pageRounded}`}
                                >
                                    <TbDots
                                        style={{
                                            color: disabledColor,
                                        }}
                                    />
                                </button>
                            );
                        }

                        return (
                            <button
                                key={index}
                                style={{
                                    width: sizePagination,
                                    height: sizePagination,
                                    backgroundColor:
                                        pageNumber === currentPage
                                            ? colorPagination
                                            : theme === "dark" ? "#191E3A" : "#E0E6ED",
                                    color:
                                        pageNumber === currentPage
                                            ? "white"
                                            : theme === "dark" ? "#E0E6ED" : "#3B3F5C",
                                    boxShadow:
                                        pageNumber === currentPage
                                            ? `0px 7px 19px -7px ${colorPagination}`
                                            : "",
                                }}
                                className={`${getShadowStyle} flex justify-center items-center ${pageRounded}`}
                                onClick={() => onPageChange(pageNumber as number)}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Right Navigation */}
                    <button
                        className={`${getShadowStyle} flex justify-center items-center ${pageRounded} ${currentPage === lastPage ? 'bg-white-light dark:bg-[#191E3A] cursor-not-allowed' : 'bg-[#E0E6ED] dark:bg-[#191E3A]'} text-dark dark:text-white-light`}
                        style={{
                            width: sizePagination,
                            height: sizePagination,
                        }}
                        onClick={onNext}
                        disabled={currentPage === lastPage}
                    >
                        <TbChevronRight
                            style={{
                                color: currentPage === lastPage ? disabledColor : "inherit",
                            }}
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default Pagination;