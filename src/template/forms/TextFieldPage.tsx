import { Card, TextField } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbDownload, TbRecordMail } from "react-icons/tb";

import "cleave.js/dist/addons/cleave-phone.id";

const TextFieldPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorTextField, setColorTextField] = useState([
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

	const [roundedTextField, setRoundedTextField] = useState([
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

	const [sizeTextField, setSizeTextField] = useState([
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

	const [variantTextField, setVariantTextField] = useState([
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

	const [densityTextField, setDensityTextField] = useState([
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

	const [typeTextField, setTypeTextField] = useState([
		{
			type: "text",
			label: "Text",
			value: "",
		},
		{
			type: "number",
			label: "Number",
			value: "",
		},
		{
			type: "password",
			label: "Password",
			value: "",
		},
		{
			type: "date",
			label: "Date",
			value: "",
		},
		{
			type: "time",
			label: "Time",
			value: "",
		},
		{
			type: "datetime-local",
			label: "Datetime-local",
			value: "",
		},
		{
			type: "month",
			label: "Month",
			value: "",
		},
		{
			type: "week",
			label: "Week",
			value: "",
		},
	]);

	const [cleaveTextField, setCleaveTextField] = useState([
		{
			cleaveOptions: {
				date: true,
				datePattern: ["Y", "m", "d"],
			},
			label: "Date",
			placeholder: "YYYY-MM-DD",
			value: "",
		},
		{
			cleaveOptions: {
				time: true,
				timePattern: ["h", "m"],
			},
			label: "Time",
			placeholder: "HH:MM",
			value: "",
		},
		{
			cleaveOptions: {
				numeral: true,
				numeralThousandsGroupStyle: "thousand",
			},
			label: "Numeral",
			placeholder: "1,000,000",
			value: "",
		},
		{
			cleaveOptions: {
				numeral: true,
				prefix: "Rp ",
				numeralThousandsGroupStyle: "thousand",
				rawValueTrimPrefix: true,
			},
			label: "Numeral with Trim Prefix",
			placeholder: "Rp 1,000,000",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [3, 3, 4],
			},
			label: "Blocks",
			placeholder: "123 456 7890",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [3, 3, 4],
				delimiter: "-",
			},
			label: "Blocks with Delimiter",
			placeholder: "123-456-7890",
			value: "",
		},
		{
			cleaveOptions: {
				blocks: [2, 3, 2, 4],
				delimiters: [".", ".", "-"],
			},
			label: "Blocks with Delimiters",
			placeholder: "12.345.67-890",
			value: "",
		},
		{
			cleaveOptions: {
				numericOnly: true,
			},
			label: "Numeric Only",
			placeholder: "1234567890",
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
					set the color of the text field.
				</div>

				<div className="grid grid-cols-2 gap-2 capitalize">
					{colorTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							color={item.color}
							variant="outline"
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newColorTextField = [...colorTextField];
								newColorTextField[itemIdx].value = e.target.value;
								setColorTextField(newColorTextField);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					set the density of the text field.
				</div>

				<div className="flex flex-col gap-2">
					{densityTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							density={item.density}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newDensityTextField = [...densityTextField];
								newDensityTextField[itemIdx].value = e.target.value;
								setDensityTextField(newDensityTextField);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the text field.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							rounded={item.rounded}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newRoundedTextField = [...roundedTextField];
								newRoundedTextField[itemIdx].value = e.target.value;
								setRoundedTextField(newRoundedTextField);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the text field.
				</div>

				<div className="flex flex-col gap-2">
					{sizeTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							variant="outline"
							size={item.size}
							label={item.label}
							value={item.value}
							onChange={(e) => {
								const newSizeTextField = [...sizeTextField];
								newSizeTextField[itemIdx].value = e.target.value;
								setSizeTextField(newSizeTextField);
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
						to set the variant of the text field.
					</div>

					<div className="flex flex-col gap-2">
						{variantTextField.map((item, itemIdx) => (
							<TextField
								key={itemIdx}
								variant={item.variant}
								placeholder={item.label}
								label={item.label}
								value={item.value}
								onChange={(e) => {
									const newVariantTextField = [...variantTextField];
									newVariantTextField[itemIdx].value = e.target.value;
									setVariantTextField(newVariantTextField);
								}}
							/>
						))}
					</div>
				</Card>
			</div>

			{/* Cleave JS */}
			<Card title="Cleave JS">
				<div className="text-sm mb-3">
					Cleave JS is a library that allows you to format your input. use{" "}
					<span style={{ color: colortheme }}>cleaveOptions</span> prop to set
					the options of the cleave js. You can see the options of the cleave js{" "}
					<a
						style={{
							color: colortheme,
						}}
						className="underline"
						href="https://github.com/nosir/cleave.js/blob/master/doc/options.md"
						target="_blank"
						rel="noreferrer"
					>
						here
					</a>
					.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{cleaveTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							cleaveOptions={item.cleaveOptions}
							label={item.label}
							placeholder={item.placeholder}
							value={item.value}
							onChange={(e) => {
								const newCleaveTextField = [...cleaveTextField];
								newCleaveTextField[itemIdx].value = e.target.value;
								setCleaveTextField(newCleaveTextField);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Type */}
			<Card title="Type">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>type</span> prop is used to
					set the type of the text field.
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
					{typeTextField.map((item, itemIdx) => (
						<TextField
							key={itemIdx}
							type={item.type}
							label={item.label}
							placeholder={item.label}
							value={item.value}
							onChange={(e) => {
								const newTypeTextField = [...typeTextField];
								newTypeTextField[itemIdx].value = e.target.value;
								setTypeTextField(newTypeTextField);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Disabled & Readonly */}
			<Card title="Disabled & Readonly">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the text field.
					<br />
					The <span style={{ color: colortheme }}>readonly</span> prop is used
					to set the text field to readonly.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextField placeholder="Disabled" label="Disabled" disabled />
					<TextField
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
					set the note of the text field.
					<br />
					The <span style={{ color: colortheme }}>error</span> prop is used to
					set the error of the text field.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<TextField
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
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
					set the prefix of the text field.
					<br />
					The <span style={{ color: colortheme }}>suffix</span> prop is used to
					set the suffix of the text field.
				</div>

				<div className="flex flex-col gap-2">
					<TextField
						prefix="https://"
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
						suffix=".com"
						placeholder="Suffix"
						label="Suffix"
						setValue={setValue}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</Card>

			{/* Prepend & Append */}
			<Card title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prepend</span> prop is used to
					set the prepend of the text field.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the append of the text field.
				</div>

				<div className="flex flex-col gap-2">
					<TextField
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<TextField
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

export default TextFieldPage;