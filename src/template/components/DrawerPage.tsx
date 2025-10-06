import { Button, Card, Drawer } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const DrawerPage = () => {
	const { colortheme } = useContext(ThemeContext);

	const [drawer, setDrawer] = useState<boolean>(false);
	const [drawerFullWidth, setDrawerFullWidth] = useState<boolean>(false);
	const [drawerWidth, setDrawerWidth] = useState<boolean>(false);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			{/* Title & Description */}
			<Card title="Title & Description">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>title</span> prop is used to
					set the title of the drawer. The{" "}
					<span style={{ color: colortheme }}>description</span> prop is used to
					set the description of the drawer.
				</div>

				<Button onClick={() => setDrawer(true)} color="primary">
					Open Drawer
				</Button>
			</Card>

			{/* Width */}
			<Card title="Width">
				<div className="text-sm mb-3">
					The <span style={{ color: colortheme }}>width</span> prop is used to
					set the width of the drawer. The default width is 380px.
				</div>

				<div className="flex flex-wrap gap-4">
					<Button onClick={() => setDrawerFullWidth(true)} color="primary">
						Open FullWidth Drawer
					</Button>
					<Button onClick={() => setDrawerWidth(true)} color="primary">
						Open 50% Drawer
					</Button>
				</div>
				<Drawer
					dismiss
					title="WELCOME HOME"
					description="Drawer Description"
					open={drawer}
					setOpen={setDrawer}
				>
					Hello World
				</Drawer>

				<Drawer
					dismiss
					title="DRAWER"
					width="100%"
					open={drawerFullWidth}
					setOpen={setDrawerFullWidth}
				>
					Full Width Drawer
				</Drawer>

				<Drawer
					dismiss
					title="DRAWER"
					width="50%"
					open={drawerWidth}
					setOpen={setDrawerWidth}
				>
					50% Drawer
				</Drawer>
			</Card>
		</div>
	);
};

export default DrawerPage;