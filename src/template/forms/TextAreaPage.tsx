import { Card, TextArea } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbDownload, TbRecordMail } from "react-icons/tb";

const TextAreaPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorTextArea, setColorTextArea] = useState([
		{
			color: "primary",
			label: "primary",
			value: "",
		},
		{
			color: "secondary",
			label: "secondary",
			value: "",
		},
		{
			color: "success",
			label: "success",
			value: "",
		},
		{
			color: "danger",
			label: "danger",
			value: "",
		},
		{
			color: "warning",
			label: "warning",
			value: "",
		},
		{
			color: "info",
			label: "info",
			value: "",
		},
	]);

	const [roundedTextArea, setRoundedTextArea] = useState([
		{
			rounded: "none",
			label: "None",
			value: "",
		},
		{
			rounded: "sm",
			label: "sm",
			value: "",
		},
		{
			rounded: "md",
			label: "md",
			value: "",
		},
		{
			rounded: "lg",
			label: "lg",
			value: "",
		},
		{
			rounded: "xl",
			label: "xl",
			value: "",
		},
		{
			rounded: "2xl",
			label: "2xl",
			value: "",
		},
		{
			rounded: "3xl",
			label: "3xl",
			value: "",
		},
		{
			rounded: "4xl",
			label: "4xl",
			value: "",
		},
	]);

	const [sizeTextArea, setSizeTextArea] = useState([
		{
			size: "sm",
			label: "sm",
			value: "",
		},
		{
			size: "md",
			label: "md",
			value: "",
		},
		{
			size: "lg",
			label: "lg",
			value: "",
		},
		{
			size: "xl",
			label: "xl",
			value: "",
		},
	]);

	const [variantTextArea, setVariantTextArea] = useState([
		{
			variant: "basic",
			label: "Basic",
			value: "",
		},
		{
			variant: "outline",
			label: "Outline",
			value: "",
		},
		{
			variant: "filled",
			label: "Filled",
			value: "",
		},
		{
			variant: "underlined",
			label: "Underlined",
			value: "",
		},
	]);

	const [densityTextArea, setDensityTextArea] = useState([
		{
			density: "tight",
			label: "Tight",
			value: "",
		},
		{
			density: "normal",
			label: "Normal",
			value: "",
		},
		{
			density: "loose",
			label: "Loose",
			value: "",
		},
	]);

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					set the color of the text area.
				</div>

				<div className="grid grid-cols-2 gap-2 capitalize">
					{colorTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							color={item.color}
							variant="outline"
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newColorTextArea = [...colorTextArea];
								newColorTextArea[itemIdx].value = e.target.value;
								setColorTextArea(newColorTextArea);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					set the density of the text area.
				</div>

				<div className="flex flex-col gap-2">
					{densityTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							density={item.density}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newDensityTextArea = [...densityTextArea];
								newDensityTextArea[itemIdx].value = e.target.value;
								setDensityTextArea(newDensityTextArea);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the text area.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							rounded={item.rounded}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newRoundedTextArea = [...roundedTextArea];
								newRoundedTextArea[itemIdx].value = e.target.value;
								setRoundedTextArea(newRoundedTextArea);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the text area.
				</div>

				<div className="flex flex-col gap-2">
					{sizeTextArea.map((item, itemIdx) => (
						<TextArea
							key={itemIdx}
							variant="outline"
							size={item.size}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newSizeTextArea = [...sizeTextArea];
								newSizeTextArea[itemIdx].value = e.target.value;
								setSizeTextArea(newSizeTextArea);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Variant */}
			<div className="col-span-full">
				<Card title="Variant">
					<div className="text-sm mb-3">
						The <span style={{ color: colortheme }}>variant</span> prop is used
						to set the variant of the text area.
					</div>

					<div className="flex flex-col gap-2">
						{variantTextArea.map((item, itemIdx) => (
							<TextArea
								key={itemIdx}
								variant={item.variant}
								placeholder={item.label}
								label={item.label}
								value={item.value}
								onChange={(e) => {
									const newVariantTextArea = [...variantTextArea];
									newVariantTextArea[itemIdx].value = e.target.value;
									setVariantTextArea(newVariantTextArea);
								}}
							/>
						))}
					</div>
				</Card>
			</div>

			{/* Disabled & Readonly */}
			<Card title="Disabled & Readonly">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the text area.
					<br />
					The <span style={{ color: colortheme }}>readonly</span> prop is used
					to set the TextArea to readonly.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextArea placeholder="Disabled" label="Disabled" disabled />
					<TextArea
						placeholder="Readonly"
						label="Readonly"
						readOnly
						value="Readonly"
					/>
				</div>
			</Card>

			{/* Note & Error */}
			<Card title="Note & Error">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>note</span> prop is used to
					set the note of the text area.
					<br />
					The <span style={{ color: colortheme }}>error</span> prop is used to
					set the error of the text area.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextArea
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						placeholder="Error"
						label="Error"
						error="This is an error"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</Card>

			{/* Prefix & Suffix */}
			<Card title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prefix</span> prop is used to
					set the prefix of the text area.
					<br />
					The <span style={{ color: colortheme }}>suffix</span> prop is used to
					set the suffix of the text area.
				</div>

				<div className="flex flex-col gap-2">
					<TextArea
						prefix="https://"
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						suffix=".com"
						placeholder="Suffix"
						label="Suffix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</Card>

			{/* Prepend & Append */}
			<Card title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prepend</span> prop is used to
					set the prepend of the text area.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the append of the text area.
				</div>

				<div className="flex flex-col gap-2">
					<TextArea
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextArea
						append={<TbDownload />}
						placeholder="Append"
						label="Append"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</Card>
		</div>
	);
};

export default TextAreaPage;