import { Button, Card, Tooltip } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const TooltipsPage = () => {
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
                        used to set the position of the tooltip. The default value is top.
                    </div>

                    <div className="flex flex-wrap gap-2 overflow-auto">
                        <Tooltip placement="top-start" tooltip="Top Start">
                            <Button color="primary">Top Start</Button>
                        </Tooltip>
                        <Tooltip placement="top" tooltip="Top">
                            <Button color="primary">Top</Button>
                        </Tooltip>
                        <Tooltip placement="top-end" tooltip="Top End">
                            <Button color="primary">Top End</Button>
                        </Tooltip>
                        <Tooltip placement="left-start" tooltip="Left Start">
                            <Button color="primary">Left Start</Button>
                        </Tooltip>
                        <Tooltip placement="left" tooltip="Left">
                            <Button color="primary">Left</Button>
                        </Tooltip>
                        <Tooltip placement="left-end" tooltip="Left End">
                            <Button color="primary">Left End</Button>
                        </Tooltip>
                        <Tooltip placement="right-start" tooltip="Right Start">
                            <Button color="primary">Right Start</Button>
                        </Tooltip>
                        <Tooltip placement="right" tooltip="Right">
                            <Button color="primary">Right</Button>
                        </Tooltip>
                        <Tooltip placement="right-end" tooltip="Right End">
                            <Button color="primary">Right End</Button>
                        </Tooltip>
                        <Tooltip placement="bottom-start" tooltip="Bottom Start">
                            <Button color="primary">Bottom Start</Button>
                        </Tooltip>
                        <Tooltip placement="bottom" tooltip="Bottom">
                            <Button color="primary">Bottom</Button>
                        </Tooltip>
                        <Tooltip placement="bottom-end" tooltip="Bottom End">
                            <Button color="primary">Bottom End</Button>
                        </Tooltip>
                    </div>
                </Card>
            </div>

            {/* Tooltip */}
            <Card title="Tooltip">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>tooltip</span> prop is used to
                    set the text of the tooltip.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Tooltip tooltip="Tooltip Text">
                        <Button color="primary">Tooltip Text</Button>
                    </Tooltip>
                </div>
            </Card>

            {/* Spacing */}
            <Card title="Spacing">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>spacing</span> prop is used to
                    set the spacing between the tooltip and the reference element. The
                    default value is 5.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Tooltip spacing={0} tooltip="Spacing 0">
                        <Button color="primary">Spacing 0</Button>
                    </Tooltip>
                    <Tooltip tooltip="Default">
                        <Button color="primary">Default</Button>
                    </Tooltip>
                    <Tooltip spacing={10} tooltip="Spacing 10">
                        <Button color="primary">Spacing 10</Button>
                    </Tooltip>
                    <Tooltip spacing={20} tooltip="Spacing 20">
                        <Button color="primary">Spacing 20</Button>
                    </Tooltip>
                </div>
            </Card>

            {/* Fill */}
            <Card title="Fill">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>fill</span> prop is used to
                    set the minimum width of the tooltip to the width of the reference
                    element.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Tooltip fill tooltip="Fill">
                        <Button color="primary">Tooltip Fill</Button>
                    </Tooltip>
                </div>
            </Card>

            {/* Delay */}
            <Card title="Delay">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>delay</span> prop is used to
                    set the delay of the tooltip to open in milliseconds. The default
                    value is 0.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Tooltip tooltip="No Delay">
                        <Button color="primary">Default</Button>
                    </Tooltip>
                    <Tooltip tooltip="Delay 500" delay={500}>
                        <Button color="primary">Delay 500</Button>
                    </Tooltip>
                    <Tooltip tooltip="Delay 1000" delay={1000}>
                        <Button color="primary">Delay 1000</Button>
                    </Tooltip>
                </div>
            </Card>
        </div>
    );
};

export default TooltipsPage;