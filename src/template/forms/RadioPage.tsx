import { Card, Radio } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const RadioPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [selectedColor, setSelectedColor] = useState("");
	const [selectedInline, setSelectedInline] = useState<boolean>(true);

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					set the color of the radio.
				</div>

				<Radio
					color={selectedColor}
					value={selectedColor}
					onChange={setSelectedColor}
					options={[
						{
							label: "Primary",
							value: "primary",
						},
						{
							label: "Secondary",
							value: "secondary",
						},
						{
							label: "Success",
							value: "success",
						},
						{
							label: "Danger",
							value: "danger",
						},
						{
							label: "Warning",
							value: "warning",
						},
						{
							label: "Info",
							value: "info",
						},
					]}
				/>
			</Card>

			{/* Inline */}
			<Card title="Inline">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>inline</span> prop is used to
					set the radio to be inline. Default is true.
				</div>

				<div className="flex gap-6">
					<Radio
						color={colortheme}
						value={selectedInline}
						onChange={setSelectedInline}
						inline={false}
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the radio.
				</div>

				<div className="flex flex-col gap-3">
					<Radio
						color={colortheme}
						size="sm"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={colortheme}
						size="md"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={colortheme}
						size="lg"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
					<Radio
						color={colortheme}
						size="xl"
						options={[
							{
								label: "True",
								value: true,
							},
							{
								label: "False",
								value: false,
							},
						]}
					/>
				</div>
			</Card>
		</div>
	);
};

export default RadioPage;