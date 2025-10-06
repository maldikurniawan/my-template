import { Card, List } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbExclamationCircle, TbFolder } from "react-icons/tb";

const ListPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [colorList, setColorList] = useState([
		{
			color: "primary",
			name: "Primary",
			active: false,
		},
		{
			color: "secondary",
			name: "Secondary",
			active: false,
		},
		{
			color: "success",
			name: "Success",
			active: false,
		},
		{
			color: "danger",
			name: "Danger",
			active: false,
		},
		{
			color: "warning",
			name: "Warning",
			active: false,
		},
		{
			color: "info",
			name: "Info",
			active: false,
		},
	]);

	const [densityList, setDensityList] = useState([
		{
			density: "tight",
			name: "Tight",
			active: false,
		},
		{
			density: "normal",
			name: "Normal",
			active: false,
		},
		{
			density: "loose",
			name: "Loose",
			active: false,
		},
	]);

	const [roundedList, setRoundedList] = useState([
		{
			rounded: "none",
			name: "None",
			active: false,
		},
		{
			rounded: "sm",
			name: "Small",
			active: false,
		},
		{
			rounded: "md",
			name: "Medium",
			active: false,
		},
		{
			rounded: "lg",
			name: "Large",
			active: false,
		},
		{
			rounded: "xl",
			name: "Extra Large",
			active: false,
		},
		{
			rounded: "2xl",
			name: "2 Extra Large",
			active: false,
		},
		{
			rounded: "3xl",
			name: "3 Extra Large",
			active: false,
		},
		{
			rounded: "full",
			name: "Full",
			active: false,
		},
	]);

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					change the background color of the list.
				</div>

				<div className="flex flex-col flex-wrap gap-1">
					{colorList.map((item, index) => (
						<List
							key={index}
							color={item.color}
							active={item.active}
							onClick={() => {
								const newList = colorList.map((item) => {
									return { ...item, active: false };
								});
								newList[index].active = !colorList[index].active;
								setColorList(newList);
							}}
						>
							{item.name}
						</List>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					change the rounded of the list.
				</div>

				<div className="flex flex-col flex-wrap gap-1">
					{roundedList.map((item, index) => (
						<List
							key={index}
							active={item.active}
							rounded={item.rounded}
							onClick={() => {
								const newList = roundedList.map((item) => {
									return { ...item, active: false };
								});
								newList[index].active = !roundedList[index].active;
								setRoundedList(newList);
							}}
						>
							{item.name}
						</List>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					change the density of the list.
				</div>

				<div className="flex flex-col flex-wrap gap-1">
					{densityList.map((item, index) => (
						<List
							key={index}
							active={item.active}
							density={item.density}
							onClick={() => {
								const newList = densityList.map((item) => {
									return { ...item, active: false };
								});
								newList[index].active = !densityList[index].active;
								setDensityList(newList);
							}}
						>
							{item.name}
						</List>
					))}
				</div>
			</Card>

			{/* Prefix & Suffix */}
			<Card title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prefix</span> prop is used to
					add prefix to the list. The{" "}
					<span style={{ color: colortheme }}>suffix</span> prop is used to add
					suffix to the list.
				</div>

				<div className="flex flex-col flex-wrap gap-1">
					<List prefix={<TbFolder />}>List with prefix</List>
					<List suffix={<TbExclamationCircle />}>List with suffix</List>
				</div>
			</Card>
		</div>
	);
};

export default ListPage;