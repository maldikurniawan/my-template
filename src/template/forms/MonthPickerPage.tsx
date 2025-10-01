import { Card, MonthPicker } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbCalendar, TbDownload, TbRecordMail } from "react-icons/tb";

const MonthPickerPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [value, setValue] = useState("");

	const [colorMonthPicker, setColorMonthPicker] = useState([
		{
			color: "primary",
			label: "Primary",
			value: "",
		},
		{
			color: "secondary",
			label: "Secondary",
			value: "",
		},
		{
			color: "success",
			label: "Success",
			value: "",
		},
		{
			color: "danger",
			label: "Danger",
			value: "",
		},
		{
			color: "warning",
			label: "Warning",
			value: "",
		},
		{
			color: "info",
			label: "Info",
			value: "",
		},
	]);

	const [roundedMonthPicker, setRoundedMonthPicker] = useState([
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

	const [variantMonthPicker, setVariantMonthPicker] = useState([
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

	const [densityMonthPicker, setDensityMonthPicker] = useState([
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
			className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					set the color of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2 capitalize">
					{colorMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							color={item.color}
							value={item.value}
							label={item.label}
							placeholder={item.label}
							variant="outline"
							onChange={(value: any) => {
								let newColorMonthPicker = [...colorMonthPicker];
								newColorMonthPicker[index].value = value;
								setColorMonthPicker(newColorMonthPicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					set the density of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					{densityMonthPicker.map((item, itemIdx) => (
						<MonthPicker
							key={itemIdx}
							placeholder={item.label}
							label={item.label}
							value={item.value}
							density={item.density}
							variant="outline"
							onChange={(value: any) => {
								const newItems = [...densityMonthPicker];
								newItems[itemIdx].value = value;
								setDensityMonthPicker(newItems);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the MonthPicker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							rounded={item.rounded}
							onChange={(e: any) => {
								const newRoundedMonthPicker = [...roundedMonthPicker];
								newRoundedMonthPicker[index].value = e;
								setRoundedMonthPicker(newRoundedMonthPicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Variant */}
			<Card title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>variant</span> prop is used to
					set the variant of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					{variantMonthPicker.map((item, index) => (
						<MonthPicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant={item.variant}
							value={item.value}
							onChange={(e: any) => {
								const newVariantMonthPicker = [...variantMonthPicker];
								newVariantMonthPicker[index].value = e;
								setVariantMonthPicker(newVariantMonthPicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Disabled */}
			<Card title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						placeholder="Disabled"
						label="Disabled"
						variant="basic"
						disabled
					/>
					<MonthPicker
						placeholder="Disabled"
						label="Disabled"
						variant="outline"
						disabled
					/>
				</div>
			</Card>

			{/* Note & Error */}
			<Card title="Note & Error">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>note</span> prop is used to
					set the note of the MonthPicker.
					<br />
					The <span style={{ color: colortheme }}>error</span> prop is used to
					set the error of the MonthPicker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<MonthPicker
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						placeholder="Error"
						label="Error"
						error="This is an error"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</Card>

			{/* Prefix & Suffix */}
			<Card title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prefix</span> prop is used to
					set the prefix of the MonthPicker.
					<br />
					The <span style={{ color: colortheme }}>suffix</span> prop is used to
					set the suffix of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						prefix={<TbCalendar />}
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						suffix={<TbCalendar />}
						placeholder="Suffix"
						label="Suffix"
						setValue={setValue}
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</Card>

			{/* Prepend & Append */}
			<Card title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prepend</span> prop is used to
					set the prepend of the MonthPicker.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the append of the MonthPicker.
				</div>

				<div className="flex flex-col gap-2">
					<MonthPicker
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
					<MonthPicker
						append={<TbDownload />}
						placeholder="Append"
						label="Append"
						value={value}
						onChange={(value: any) => setValue(value)}
					/>
				</div>
			</Card>
		</div>
	);
};

export default MonthPickerPage;