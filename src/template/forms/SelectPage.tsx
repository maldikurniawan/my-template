import { Select, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { TbDownload, TbRecordMail } from "react-icons/tb";

const SelectPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const options = [
		{ value: "genshin", label: "Genshin Impact" },
		{ value: "botw", label: "Breath of the Wild" },
		{ value: "gta5", label: "Grand Theft Auto V" },
		{ value: "starrail", label: "Honkai: Star Rail" },
	];

	const [value, setValue] = useState("");
	const [multiValue, setMultiValue] = useState("");

	const [colorSelect, setColorSelect] = useState([
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

	const [roundedSelect, setRoundedSelect] = useState([
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

	const [sizeSelect, setSizeSelect] = useState([
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

	const [variantSelect, setVariantSelect] = useState([
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
	]);

	const [densitySelect, setDensitySelect] = useState([
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
					{colorSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							color={item.color}
							onChange={(e: any) => {
								const newColorSelect = [...colorSelect];
								newColorSelect[index].value = e;
								setColorSelect(newColorSelect);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Density */}
			<Card title="Density">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>density</span> prop is used to
					set the density of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{densitySelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							density={item.density}
							onChange={(e: any) => {
								const newDensitySelect = [...densitySelect];
								newDensitySelect[index].value = e;
								setDensitySelect(newDensitySelect);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					{roundedSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							rounded={item.rounded}
							onChange={(e: any) => {
								const newRoundedSelect = [...roundedSelect];
								newRoundedSelect[index].value = e;
								setRoundedSelect(newRoundedSelect);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{sizeSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant="outline"
							value={item.value}
							size={item.size}
							onChange={(e: any) => {
								const newSizeSelect = [...sizeSelect];
								newSizeSelect[index].value = e;
								setSizeSelect(newSizeSelect);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Variant */}
			<Card title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>variant</span> prop is used to
					set the variant of the Select.
				</div>

				<div className="flex flex-col gap-2">
					{variantSelect.map((item, index) => (
						<Select
							key={index}
							options={options}
							placeholder={item.label}
							label={item.label}
							variant={item.variant}
							value={item.value}
							onChange={(e: any) => {
								const newVariantSelect = [...variantSelect];
								newVariantSelect[index].value = e;
								setVariantSelect(newVariantSelect);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Disabled */}
			<Card title="Disabled">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>disabled</span> prop is used
					to disable the Select.
				</div>

				<div className="flex flex-col gap-2">
					<Select
						options={options}
						placeholder="Disabled"
						label="Disabled"
						variant="basic"
						disabled
					/>
					<Select
						options={options}
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
					set the note of the Select.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the error of the Select.
				</div>

				<div className="grid grid-cols-2 gap-2">
					<Select
						options={options}
						placeholder={"Note"}
						label={"Note"}
						note={"This is a note"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
					/>
					<Select
						options={options}
						placeholder={"Error"}
						label={"Error"}
						error={"This is an error"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
					/>
				</div>
			</Card>

			{/* Prepend & Append */}
			<Card title="Prepend & Append">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>prepend</span> prop is used to
					set the prepend of the Select.
					<br />
					The <span style={{ color: colortheme }}>append</span> prop is used to
					set the append of the Select.
				</div>

				<div className="flex flex-col gap-2">
					<Select
						options={options}
						placeholder={"Prepend"}
						label={"Prepend"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
						prepend={<TbDownload />}
					/>
					<Select
						options={options}
						placeholder={"Append"}
						label={"Append"}
						variant={"outline"}
						value={value}
						onChange={(e) => setValue(e)}
						append={<TbRecordMail />}
					/>
				</div>
			</Card>

			{/* Multi */}
			<Card title="Multi">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>multi</span> prop is used to
					set multiple values of the Select.
				</div>

				<Select
					multi
					options={options}
					placeholder={"Multi"}
					label={"Multi"}
					variant={"outline"}
					value={multiValue}
					onChange={(e) => setMultiValue(e)}
				/>
			</Card>

			{/* Creatable */}
			<Card title="Creatable">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>creatable</span> prop is used
					to set the creatable of the Select.
				</div>

				<Select
					creatable
					multi
					options={options}
					placeholder={"Creatable"}
					label={"Creatable"}
					variant={"outline"}
					value={multiValue}
					onChange={(e) => setMultiValue(e)}
				/>
			</Card>

			{/* Clearable */}
			<Card title="Clearable">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>clearable</span> prop is used
					to set the clearable of the Select.
				</div>

				<Select
					clearable
					options={options}
					placeholder={"Clearable"}
					label={"Clearable"}
					variant={"outline"}
					value={value}
					onChange={(e) => setValue(e)}
				/>
			</Card>

			{/* Searchable */}
			<Card title="Searchable">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>searchable</span> prop is used
					to set the searchable of the Select.
				</div>

				<Select
					searchable
					options={options}
					placeholder={"Searchable"}
					label={"Searchable"}
					variant={"outline"}
					value={value}
					onChange={(e) => setValue(e)}
				/>
			</Card>
		</div>
	);
};

export default SelectPage;