import { Button, Card, Popover } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const PopoversPage = () => {
    const { colortheme } = useContext(ThemeContext);

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
            {/* Placement */}
            <div className="col-span-full">
                <Card title="Placement">
                    <div className="text-sm mb-3">
                        The <span style={{ color: colortheme }}>placement</span> prop is
                        used to set the position of the popover.
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Popover
                            placement="top-start"
                            button={<Button color="primary">Top Start</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="top"
                            button={<Button color="primary">Top</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="top-end"
                            button={<Button color="primary">Top End</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover button={<Button color="primary">Right Start</Button>}>
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="right"
                            button={<Button color="primary">Right</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="right-end"
                            button={<Button color="primary">Right End</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="left-start"
                            button={<Button color="primary">Left Start</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="left"
                            button={<Button color="primary">Left</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="left-end"
                            button={<Button color="primary">Left End</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="bottom-start"
                            button={<Button color="primary">Bottom Start</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="bottom"
                            button={<Button color="primary">Bottom</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                        <Popover
                            placement="bottom-end"
                            button={<Button color="primary">Bottom End</Button>}
                        >
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                    </div>
                </Card>
            </div>

            {/* Spacing */}
            <Card title="Spacing">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>spacing</span> prop is used to
                    set the distance between the popover and the button. The default value
                    is 5.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Popover
                        spacing={0}
                        button={<Button color="primary">Spacing 0</Button>}
                    >
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                    <Popover button={<Button color="primary">Default</Button>}>
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                    <Popover
                        spacing={10}
                        button={<Button color="primary">Spacing 10</Button>}
                    >
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                    <Popover
                        spacing={20}
                        button={<Button color="primary">Spacing 20</Button>}
                    >
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                </div>
            </Card>

            {/* Fill */}
            <Card title="Fill">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>fill</span> prop is used to
                    set the minimum width of the popover to the width of the button.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Popover
                        fill
                        button={<Button color="primary">With Fill Props</Button>}
                    >
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                    <Popover button={<Button color="primary">Without Fill Props</Button>}>
                        <div className="rounded text-sm shadow-lg">
                            <div className="p-4 py-2">Menu 1</div>
                            <div className="p-4 py-2">Menu 2</div>
                            <div className="p-4 py-2">Menu 3</div>
                        </div>
                    </Popover>
                </div>
            </Card>

            {/* Shift & Flip */}
            <div className="col-span-full">
                <Card title="Shift & Flip">
                    <div className="text-sm mb-3">
                        The <span style={{ color: colortheme }}>isShift</span> prop is used
                        to shift the popover if the popover is out of the screen. Default is
                        true.
                        <br />
                        The <span style={{ color: colortheme }}>isFlip</span> prop is used
                        to flip the popover if the popover is out of the screen. Default is
                        true.
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <Popover button={<Button color="primary">Shift & Flip</Button>}>
                            <div className="rounded text-sm shadow-lg">
                                <div className="p-4 py-2">Menu 1</div>
                                <div className="p-4 py-2">Menu 2</div>
                                <div className="p-4 py-2">Menu 3</div>
                            </div>
                        </Popover>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PopoversPage;