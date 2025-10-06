import { Avatar, Card } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
    TbCalendar,
    TbCheck,
    TbCloudExclamation,
    TbExclamationMark,
    TbInfoCircle,
    TbSmartHome,
} from "react-icons/tb";

const AvatarPage = () => {
    const { colortheme } = useContext(ThemeContext);
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
            {/* Color */}
            <Card title="Color">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>color</span> prop is used to
                    set the color of the avatar.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Avatar color="primary">PR</Avatar>
                    <Avatar color="secondary">BA</Avatar>
                    <Avatar color="success">SU</Avatar>
                    <Avatar color="danger">WA</Avatar>
                    <Avatar color="warning">DA</Avatar>
                    <Avatar color="info">IN</Avatar>
                </div>
            </Card>

            {/* Variant */}
            <Card title="Variant">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>variant</span> prop is used to
                    set the variant of the avatar. Variant can be solid or tonal.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Avatar variant="tonal" color="primary">
                        PR
                    </Avatar>
                    <Avatar variant="tonal" color="secondary">
                        BA
                    </Avatar>
                    <Avatar variant="tonal" color="success">
                        SU
                    </Avatar>
                    <Avatar variant="tonal" color="danger">
                        WA
                    </Avatar>
                    <Avatar variant="tonal" color="warning">
                        DA
                    </Avatar>
                    <Avatar variant="tonal" color="info">
                        IN
                    </Avatar>
                </div>
            </Card>

            {/* Rounded */}
            <Card title="Rounded">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>rounded</span> prop is used to
                    set the rounded of the avatar.
                </div>

                <div className="flex flex-wrap gap-2">
                    <Avatar rounded="none" color="primary">
                        NO
                    </Avatar>
                    <Avatar rounded="sm" color="secondary">
                        SM
                    </Avatar>
                    <Avatar rounded="md" color="success">
                        MD
                    </Avatar>
                    <Avatar rounded="lg" color="danger">
                        LG
                    </Avatar>
                    <Avatar rounded="xl" color="warning">
                        XL
                    </Avatar>
                    <Avatar rounded="full" color="info">
                        FU
                    </Avatar>
                </div>
            </Card>

            {/* Size */}
            <Card title="Size">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>size</span> prop is used to
                    set the size of the avatar.
                </div>

                <div className="flex items-center flex-wrap gap-2">
                    <Avatar size="xs" color="primary">
                        XS
                    </Avatar>
                    <Avatar size="sm" color="secondary">
                        SM
                    </Avatar>
                    <Avatar size="md" color="success">
                        MD
                    </Avatar>
                    <Avatar size="lg" color="danger">
                        LG
                    </Avatar>
                    <Avatar size="xl" color="warning">
                        XL
                    </Avatar>
                    <Avatar size="70" color="info">
                        70
                    </Avatar>
                </div>
            </Card>

            {/* Icon */}
            <Card title="Icon">
                <div className="text-sm mb-3">
                    You can use icon as avatar. Just put the icon inside the avatar.
                </div>

                <div className="flex items-center flex-wrap gap-2">
                    <Avatar color="primary">
                        <TbSmartHome className="text-lg" />
                    </Avatar>
                    <Avatar color="secondary">
                        <TbCalendar className="text-lg" />
                    </Avatar>
                    <Avatar color="success">
                        <TbCheck className="text-lg" />
                    </Avatar>
                    <Avatar color="danger">
                        <TbExclamationMark className="text-lg" />
                    </Avatar>
                    <Avatar color="warning">
                        <TbCloudExclamation className="text-lg" />
                    </Avatar>
                    <Avatar color="info">
                        <TbInfoCircle className="text-lg" />
                    </Avatar>
                </div>
            </Card>

            {/* Image */}
            <Card title="Image">
                <div className="text-sm mb-3">
                    You can use image as avatar. Just put the image inside the avatar.
                </div>

                <div className="flex items-center flex-wrap gap-2">
                    <Avatar>
                        <img src="https://i.pravatar.cc/100" alt="avatar" />
                    </Avatar>
                    <Avatar>
                        <img src="https://i.pravatar.cc/200" alt="avatar" />
                    </Avatar>
                    <Avatar>
                        <img src="https://i.pravatar.cc/300" alt="avatar" />
                    </Avatar>
                    <Avatar>
                        <img src="https://i.pravatar.cc/400" alt="avatar" />
                    </Avatar>
                    <Avatar>
                        <img src="https://i.pravatar.cc/500" alt="avatar" />
                    </Avatar>
                </div>
            </Card>
        </div>
    );
};

export default AvatarPage;