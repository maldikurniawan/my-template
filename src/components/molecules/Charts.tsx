import { ThemeContext } from '@/context/ThemeContext';
import type { ApexOptions } from 'apexcharts';
import React, { useContext } from 'react';
import Chart from 'react-apexcharts';

interface ChartsProps {
    variant: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'polarArea' | 'radar';
    series?: any[];
    labels?: string[];
    colors?: string[];
}

const Charts: React.FC<ChartsProps> = ({ variant, series, labels, colors }) => {
    const { theme } = useContext(ThemeContext);

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    const chartOptions: Record<string, { series: any[]; options: ApexOptions }> = {
        line: {
            series: series ?? [
                {
                    name: 'Visitor',
                    data: [45, 55, 75, 25, 45, 110],
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'line',
                    toolbar: { show: false },
                },
                colors: colors ?? ['#4361EE'],
                tooltip: {
                    marker: { show: false },
                    y: {
                        formatter(number: number) {
                            return '' + number;
                        },
                    },
                    theme: isDark ? 'dark' : "light",
                },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    categories: labels ?? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
                    labels: {
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                    axisBorder: {
                        color: isDark ? '#FFF' : "#000",
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                grid: {
                    borderColor: isDark ? '#FFF' : "#000",
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
            },
        },
        area: {
            series: series ?? [
                {
                    name: 'Visitor',
                    data: [148, 168, 155, 178, 155],
                },
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 300,
                    zoom: { enabled: false },
                    toolbar: { show: false },
                },
                colors: colors ?? ['#4361EE'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                xaxis: {
                    axisBorder: {
                        color: isDark ? '#FFF' : "#000"
                    },
                    labels: {
                        style: {
                            colors: isDark ? '#FFF' : "#000"
                        },
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: isDark ? '#FFF' : "#000"
                        },
                    },
                },
                labels: labels ?? ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                legend: {
                    horizontalAlign: 'left',
                },
                grid: {
                    borderColor: isDark ? '#FFF' : "#000",
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                tooltip: {
                    theme: isDark ? 'dark' : "light",
                },
            },
        },
        bar: {
            series:
                series
                ??
                [
                    {
                        name: 'Net Profit',
                        data: [44, 55, 57, 56, 61, 58],
                    },
                    {
                        name: 'Revenue',
                        data: [76, 85, 101, 98, 87, 105],
                    },
                ],
            options: {
                chart: {
                    height: 300,
                    type: 'bar',
                    zoom: { enabled: false },
                    toolbar: { show: false },
                },
                colors: colors ?? ['#4361EE', '#805DCA'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                    },
                },
                grid: {
                    borderColor: isDark ? '#FFF' : "#000",
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    categories: labels ?? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    axisBorder: {
                        color: isDark ? '#FFF' : "#000",
                    },
                    labels: {
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        offsetX: 0,
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                tooltip: {
                    theme: isDark ? 'dark' : "light",
                    y: {
                        formatter(val: any) {
                            return val;
                        },
                    },
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: isDark ? "text-white" : "text-black",
                    },
                },
            },
        },
        pie: {
            series: series ?? [44, 55, 13, 22],
            options: {
                chart: {
                    height: 300,
                    type: 'pie',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                labels: labels ?? ['Team A', 'Team B', 'Team C', 'Team D'],
                colors: colors ?? ['#4361EE', '#805DCA', '#00AB55', '#E7515A'],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 300,
                            },
                        },
                    },
                ],
                stroke: {
                    show: false,
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: "text-white",
                    },
                },
            },
        },
        donut: {
            series: series ?? [44, 55, 13],
            options: {
                chart: {
                    height: 300,
                    type: 'donut',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    show: false,
                },
                labels: labels ?? ['Team A', 'Team B', 'Team C'],
                colors: colors ?? ['#4361EE', '#805DCA', '#00AB55'],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 300,
                            },
                        },
                    },
                ],
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: "text-white",
                    },
                },
            },
        },
        radialBar: {
            series: series ?? [44, 55, 41],
            options: {
                chart: {
                    height: 300,
                    type: 'radialBar',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: colors ?? ['#4361EE', '#805DCA', '#00AB55'],
                grid: {
                    borderColor: '#4361EE',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                                color: isDark ? '#FFF' : "#000"
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: isDark ? '#FFF' : "#000",
                                formatter: function () {
                                    return String(249);
                                },
                            },
                        },
                    },
                },
                labels: labels ?? ['Apples', 'Oranges', 'Bananas'],
                fill: {
                    opacity: 0.85,
                },
            },
        },
        polarArea: {
            series: series ?? [14, 23, 21, 17, 15, 10, 12, 17, 21],
            options: {
                chart: {
                    height: 300,
                    type: 'polarArea',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: colors ?? ['#4361EE', '#805DCA', '#00AB55', '#E7515A', '#E2A03F', '#2196F3'],
                stroke: {
                    show: false,
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                        },
                    },
                ],
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeColor: isDark ? '#FFF' : "#000",
                        },
                        spokes: {
                            connectorColors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        colors: "text-white",
                    },
                },
                fill: {
                    opacity: 0.85,
                },
                labels: labels ?? ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Pineapples', 'Mangoes', 'Peaches', 'Cherries', 'Strawberries'],
            },
        },
        radar: {
            series: series ?? [
                {
                    name: 'Visitor',
                    data: [80, 50, 30, 40, 100, 20],
                },
            ],
            options: {
                chart: {
                    height: 300,
                    type: 'radar',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: colors ?? ['#4361EE'],
                xaxis: {
                    categories: labels ?? ['January', 'February', 'March', 'April', 'May', 'June'],
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColors: isDark ? '#FFF' : "#000",
                            connectorColors: isDark ? '#FFF' : "#000",
                        },
                    },
                },
                tooltip: {
                    theme: isDark ? 'dark' : "light",
                },
            },
        },
    };

    const chartData = chartOptions[variant];

    return <Chart options={chartData.options} series={chartData.series} type={variant} height={300} />;
};

export default Charts;
