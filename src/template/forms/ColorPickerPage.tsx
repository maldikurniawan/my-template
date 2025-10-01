import { Card, ColorPicker } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";

const ColorPickerPage = () => {
    const { colortheme } = useContext(ThemeContext);

    const [value, setValue] = useState("");

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-60"
        >
            {/* Color */}
            <Card title="Color Picker">
                <div className="text-sm mb-3">
                    You can use the{" "}
                    <span style={{ color: colortheme }}>color picker</span> to select a
                    color.
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <ColorPicker
                        label="Color"
                        required
                        value={value}
                        setValue={setValue}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ColorPickerPage;