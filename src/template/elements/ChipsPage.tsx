import { Chip, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ChipsPage = () => {
	const { colortheme } = useContext(ThemeContext);
	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Color */}
			<div className="col-span-full">
				<Card title="Color">
					<div className="text-sm mb-3">
						The <span style={{ color: colortheme }}>color</span> prop is used to
						change the background color of the chip.
					</div>

					<div className="flex flex-wrap items-end gap-4">
						<Chip color="primary">Primary</Chip>
						<Chip color="secondary">Secondary</Chip>
						<Chip color="success">Success</Chip>
						<Chip color="danger">Danger</Chip>
						<Chip color="warning">Warning</Chip>
						<Chip color="info">Info</Chip>
					</div>
				</Card>
			</div>

			{/* Variant */}
			<div className="row-span-2">
				<Card title="Variant">
					<div className="text-sm mb-3">
						The <span style={{ color: colortheme }}>variant</span> prop is used
						to change the variant of the chip.
					</div>

					<div className="text-sm mb-2 mt-4">Solid</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="solid" color="primary">
							Primary
						</Chip>
						<Chip variant="solid" color="secondary">
							Secondary
						</Chip>
						<Chip variant="solid" color="success">
							Success
						</Chip>
						<Chip variant="solid" color="danger">
							Danger
						</Chip>
						<Chip variant="solid" color="warning">
							Warning
						</Chip>
						<Chip variant="solid" color="info">
							Info
						</Chip>
					</div>

					<div className="text-sm mb-2 mt-4">Outline</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="outline" color="primary">
							Primary
						</Chip>
						<Chip variant="outline" color="secondary">
							Secondary
						</Chip>
						<Chip variant="outline" color="success">
							Success
						</Chip>
						<Chip variant="outline" color="danger">
							Danger
						</Chip>
						<Chip variant="outline" color="warning">
							Warning
						</Chip>
						<Chip variant="outline" color="info">
							Info
						</Chip>
					</div>

					<div className="text-sm mb-2 mt-4">Tonal</div>
					<div className="flex flex-wrap items-end gap-4">
						<Chip variant="tonal" color="primary">
							Primary
						</Chip>
						<Chip variant="tonal" color="secondary">
							Secondary
						</Chip>
						<Chip variant="tonal" color="success">
							Success
						</Chip>
						<Chip variant="tonal" color="danger">
							Danger
						</Chip>
						<Chip variant="tonal" color="warning">
							Warning
						</Chip>
						<Chip variant="tonal" color="info">
							Info
						</Chip>
					</div>
				</Card>
			</div>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the chip.
				</div>

				<div className="flex flex-wrap items-end gap-2">
					<Chip size="xl" color="primary">
						X-Large
					</Chip>
					<Chip size="lg" color="secondary">
						Large
					</Chip>
					<Chip size="md" color="success">
						Medium
					</Chip>
					<Chip size="sm" color="danger">
						Small
					</Chip>
					<Chip size="xs" color="warning">
						X-Small
					</Chip>
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the chip.
				</div>

				<div className="flex flex-wrap gap-2">
					<Chip rounded="none" color="primary">
						None
					</Chip>
					<Chip rounded="sm" color="secondary">
						SM
					</Chip>
					<Chip rounded="md" color="success">
						MD
					</Chip>
					<Chip rounded="lg" color="danger">
						LG
					</Chip>
					<Chip rounded="xl" color="warning">
						XL
					</Chip>
					<Chip rounded="full" color="info">
						Full
					</Chip>
				</div>
			</Card>
		</div>
	);
};

export default ChipsPage;