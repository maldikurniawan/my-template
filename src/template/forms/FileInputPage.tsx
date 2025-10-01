import { Card, FileInput, FileInputForm } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const FileInputPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [value, setValue] = useState([]);
	const [valueMultiple, setValueMultiple] = useState([]);

	const [valueForm, setValueForm] = useState([]);

	return (
		<div
			className="grid grid-cols-1 gap-4"
		>
			{/* Basic */}
			<Card title="Basic">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>FileInput</span> component is
					used to upload files.
				</div>

				<div className="flex flex-wrap gap-2">
					<FileInput value={value} setValue={setValue} />
				</div>
			</Card>

			{/* Multiple */}
			<Card title="Multiple">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>multiple</span> prop is used
					to allow multiple files to be uploaded.
				</div>

				<div className="flex flex-wrap gap-2">
					<FileInput
						value={valueMultiple}
						setValue={setValueMultiple}
						multiple
					/>
				</div>
			</Card>

			<Card>
				<FileInputForm value={valueForm} setValue={setValueForm} />
			</Card>
		</div>
	);
};

export default FileInputPage;