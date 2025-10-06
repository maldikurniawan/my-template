import { Alert, Button, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { PiCheck, PiExclamationMark, PiHouseLine, PiX } from "react-icons/pi";

const AlertsPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const [show, setShow] = useState<boolean>(true);

    return (
        <div
            className="flex flex-col gap-6 overflow-y-auto scroll-hidden"
        >
            {/* Color */}
            <Card title="Color">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>color</span> prop is used to
                    set the background color of the alert.
                </div>

                <div className="flex flex-wrap gap-3">
                    <Alert color="primary">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert color="secondary">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert color="success">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert color="danger">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert color="warning">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert color="info">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>
            </Card>

            {/* Icon */}
            <Card title="Icon">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>icon</span> prop is used to
                    set the icon of the alert.
                </div>

                <div className="flex flex-wrap gap-3">
                    <Alert icon={<PiHouseLine />} color="primary">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert icon={<PiCheck />} color="success">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert icon={<PiExclamationMark />} color="danger">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert icon={<PiX />} color="warning">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>
            </Card>

            {/* Closable */}
            <Card title="Closable">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>closable</span> prop is used
                    to set the alert closable.
                </div>

                <div className="flex flex-wrap gap-3">
                    {show ? (
                        <Alert
                            show={show}
                            setShow={setShow}
                            closable
                            icon={<PiHouseLine />}
                            color="primary"
                        >
                            Good morning! You have successfully logged in.
                        </Alert>
                    ) : (
                        <Button color="primary" onClick={() => setShow(true)}>
                            Reset
                        </Button>
                    )}
                </div>
            </Card>

            {/* Variant */}
            <Card title="Variant">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>variant</span> prop is used to
                    set the variant of the alert.
                </div>

                <div className="text-sm mb-2 mt-4">Solid</div>
                <div className="flex flex-wrap gap-2">
                    <Alert variant={"solid"} color="primary">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert variant={"solid"} color="secondary">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>

                <div className="text-sm mb-2 mt-4">Tonal</div>
                <div className="flex flex-wrap gap-2">
                    <Alert variant={"tonal"} color="success">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert variant={"tonal"} color="danger">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>

                <div className="text-sm mb-2 mt-4">Outline</div>
                <div className="flex flex-wrap gap-2">
                    <Alert variant={"outline"} color="warning">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert variant={"outline"} color="info">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>
            </Card>

            {/* Density */}
            <Card title="Density">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>density</span> prop is used to
                    set the padding of the alert.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Alert density="tight" color="primary">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert density="normal" color="success">
                        Good morning! You have successfully logged in.
                    </Alert>
                    <Alert density="loose" color="danger">
                        Good morning! You have successfully logged in.
                    </Alert>
                </div>
            </Card>
        </div>
    );
};

export default AlertsPage;