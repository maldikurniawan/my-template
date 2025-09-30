import { Card, Switch } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const SwitchPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [switchColor, setSwitchColor] = useState([
		{
			color: "primary",
			value: true,
		},
		{
			color: "secondary",
			value: true,
		},
		{
			color: "success",
			value: true,
		},
		{
			color: "danger",
			value: true,
		},
		{
			color: "warning",
			value: true,
		},
		{
			color: "info",
			value: true,
		},
	]);

	const [switchSize, setSwitchSize] = useState([
		{
			size: "sm",
			value: true,
		},
		{
			size: "md",
			value: true,
		},
		{
			size: "lg",
			value: true,
		},
		{
			size: "xl",
			value: true,
		},
	]);

	const [switchLabel, setSwitchLabel] = useState(true);

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-4"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					set the color of the switch.
				</div>
				<div className="flex gap-2 items-center">
					{switchColor.map((item, itemIdx) => (
						<Switch
							color={item.color}
							key={itemIdx}
							value={item.value}
							onChange={() => {
								const newSwitchColor = [...switchColor];
								newSwitchColor[itemIdx].value = !newSwitchColor[itemIdx].value;
								setSwitchColor(newSwitchColor);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the switch.
				</div>
				<div className="flex gap-2 items-center">
					{switchSize.map((item, itemIdx) => (
						<Switch
							size={item.size}
							key={itemIdx}
							value={item.value}
							onChange={() => {
								const newSwitchSize = [...switchSize];
								newSwitchSize[itemIdx].value = !newSwitchSize[itemIdx].value;
								setSwitchSize(newSwitchSize);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Label */}
			<Card title="Label">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>label</span> prop is used to
					set the label of the switch.
				</div>
				<Switch
					id="switch_label"
					label={switchLabel ? "On" : "Off"}
					value={switchLabel}
					onChange={() => setSwitchLabel(!switchLabel)}
				/>
			</Card>

			{/* Disabled */}
			<Card title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the switch.
				</div>
				<Switch
					label={switchLabel ? "On" : "Off"}
					value={switchLabel}
					onChange={() => setSwitchLabel(!switchLabel)}
					disabled
				/>
			</Card>
		</div>
	);
};

export default SwitchPage;