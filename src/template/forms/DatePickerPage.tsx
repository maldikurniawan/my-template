import { Card, DatePicker } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbCalendar, TbDownload, TbRecordMail } from "react-icons/tb";

const DatePickerPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [value, setValue] = useState("");
	const [multipleValue, setMultipleValue] = useState([]);
	const [rangeValue, setRangeValue] = useState([]);

	const [colorDatePicker, setColorDatePicker] = useState([
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

	const [roundedDatePicker, setRoundedDatePicker] = useState([
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

	const [sizeDatePicker, setSizeDatePicker] = useState([
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

	const [variantDatePicker, setVariantDatePicker] = useState([
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

	const [densityDatePicker, setDensityDatePicker] = useState([
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
			className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Color */}
			<Card title="Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>color</span> prop is used to
					set the color of the date picker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{colorDatePicker.map((item, itemIdx) => (
						<DatePicker
							key={itemIdx}
							color={item.color}
							placeholder={item.label}
							label={item.label}
							value={item.value}
							variant="outline"
							onChange={(value) => {
								const newItems = [...colorDatePicker];
								newItems[itemIdx].value = value;
								setColorDatePicker(newItems);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					set the density of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					{densityDatePicker.map((item, itemIdx) => (
						<DatePicker
							key={itemIdx}
							placeholder={item.label}
							label={item.label}
							value={item.value}
							density={item.density}
							variant="outline"
							onChange={(value) => {
								const newItems = [...densityDatePicker];
								newItems[itemIdx].value = value;
								setDensityDatePicker(newItems);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the date picker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedDatePicker.map((item, index) => (
						<DatePicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							rounded={item.rounded}
							onChange={(e) => {
								const newRoundedDatePicker = [...roundedDatePicker];
								newRoundedDatePicker[index].value = e;
								setRoundedDatePicker(newRoundedDatePicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					{sizeDatePicker.map((item, index) => (
						<DatePicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							size={item.size}
							onChange={(e) => {
								const newSizeDatePicker = [...sizeDatePicker];
								newSizeDatePicker[index].value = e;
								setSizeDatePicker(newSizeDatePicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Variant */}
			<Card title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>variant</span> prop is used to
					set the variant of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					{variantDatePicker.map((item, index) => (
						<DatePicker
							key={index}
							placeholder={item.label}
							label={item.label}
							variant={item.variant}
							value={item.value}
							onChange={(e) => {
								const newVariantDatePicker = [...variantDatePicker];
								newVariantDatePicker[index].value = e;
								setVariantDatePicker(newVariantDatePicker);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Mode */}
			<Card title="Mode">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>mode</span> prop is used to
					set the mode of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					<DatePicker
						mode="single"
						placeholder="Single"
						label="Single"
						variant="outline"
						value={value}
						setValue={setValue}
					// onChange={(value) => setValue(value)}
					/>
					<DatePicker
						mode="multiple"
						placeholder="Multiple"
						label="Multiple"
						variant="outline"
						value={multipleValue}
						setValue={setMultipleValue}
					/>
					<DatePicker
						mode="range"
						placeholder="Range"
						label="Range"
						variant="outline"
						value={rangeValue}
						setValue={setRangeValue}
					/>
				</div>
			</Card>

			{/* Disabled */}
			<Card title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the date picker.
				</div>

				<div className="flex flex-col gap-2">
					<DatePicker
						placeholder="Disabled"
						label="Disabled"
						variant="basic"
						disabled
					/>
					<DatePicker
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
					set the note of the date picker.
					<br />
					The <span style={{ color: colortheme }}>error</span> prop is used to
					set the error of the date picker.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<DatePicker
						placeholder="Note"
						label="Note"
						note="This is a note"
						value={value}
						onChange={(value) => setValue(value)}
					/>
					<DatePicker
						placeholder="Error"
						label="Error"
						error="This is an error"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</Card>

			{/* Prefix & Suffix */}
			<Card title="Prefix & Suffix">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prefix</span> prop is used to
					set the prefix of the date picker.
					<br />
					The <span style={{ color: colortheme }}>suffix</span> prop is used to
					set the suffix of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					<DatePicker
						prefix={<TbCalendar />}
						placeholder="Prefix"
						label="Prefix"
						value={value}
						onChange={(value) => setValue(value)}
					/>
					<DatePicker
						suffix={<TbCalendar />}
						placeholder="Suffix"
						label="Suffix"
						setValue={setValue}
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</Card>

			{/* Prepend & Append */}
			<Card title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prepend</span> prop is used to
					set the prepend of the date picker.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the append of the date picker.
				</div>

				<div className="flex flex-col gap-2">
					<DatePicker
						prepend={<TbRecordMail />}
						placeholder="Prepend"
						label="Prepend"
						value={value}
						onChange={(value) => setValue(value)}
					/>
					<DatePicker
						append={<TbDownload />}
						placeholder="Append"
						label="Append"
						value={value}
						onChange={(value) => setValue(value)}
					/>
				</div>
			</Card>
		</div>
	);
};

export default DatePickerPage;