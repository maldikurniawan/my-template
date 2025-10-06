import { Card, Pagination } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const PaginationPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [colorPagination, setColorPagination] = useState([
		{
			color: "primary",
			value: 1,
		},
		{
			color: "secondary",
			value: 1,
		},
		{
			color: "success",
			value: 1,
		},
		{
			color: "danger",
			value: 1,
		},
		{
			color: "warning",
			value: 1,
		},
		{
			color: "info",
			value: 1,
		},
	]);

	const [sizePagination, setSizePagination] = useState([
		{
			size: "xs",
			value: 1,
		},
		{
			size: "sm",
			value: 1,
		},
		{
			size: "md",
			value: 1,
		},
		{
			size: "lg",
			value: 1,
		},
		{
			size: "xl",
			value: 1,
		},
	]);

	const [roundedPagination, setRoundedPagination] = useState([
		{
			rounded: "none",
			value: 1,
		},
		{
			rounded: "sm",
			value: 1,
		},
		{
			rounded: "md",
			value: 1,
		},
		{
			rounded: "lg",
			value: 1,
		},
		{
			rounded: "xl",
			value: 1,
		},
		{
			rounded: "2xl",
			value: 1,
		},
		{
			rounded: "3xl",
			value: 1,
		},
		{
			rounded: "full",
			value: 1,
		},
	]);

	const [variantPagination, setVariantPagination] = useState([
		{
			variant: "solid",
			value: 1,
		},
		{
			variant: "flat",
			value: 1,
		},
	]);

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Active Color */}
			<Card title="Active Color">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>active color</span> prop is
					used to set the color of the active page.
				</div>

				<div className="flex flex-col gap-3 capitalize">
					{colorPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							activeColor={item.color}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newColorPagination = [...colorPagination];
								newColorPagination[itemIdx].value = page;
								setColorPagination(newColorPagination);
							}}
						/>
					))}
				</div>
			</Card>

			{/* Size */}
			<Card title="Size">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>size</span> prop is used to
					set the size of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{sizePagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newSizePagination = [...sizePagination];
								newSizePagination[itemIdx].value = page;
								setSizePagination(newSizePagination);
							}}
							size={item.size}
						/>
					))}
				</div>
			</Card>

			{/* Rounded */}
			<Card title="Rounded">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>rounded</span> prop is used to
					set the rounded of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{roundedPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newRoundedPagination = [...roundedPagination];
								newRoundedPagination[itemIdx].value = page;
								setRoundedPagination(newRoundedPagination);
							}}
							rounded={item.rounded}
						/>
					))}
				</div>
			</Card>

			{/* Variant */}
			<Card title="Variant">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>variant</span> prop is used to
					set the variant of the pagination.
				</div>

				<div className="flex flex-col gap-3">
					{variantPagination.map((item, itemIdx) => (
						<Pagination
							key={itemIdx}
							currentPage={item.value}
							totalCount={10}
							pageSize={1}
							onPageChange={(page) => {
								const newVariantPagination = [...variantPagination];
								newVariantPagination[itemIdx].value = page;
								setVariantPagination(newVariantPagination);
							}}
							variant={item.variant}
						/>
					))}
				</div>
			</Card>
		</div>
	);
};

export default PaginationPage;