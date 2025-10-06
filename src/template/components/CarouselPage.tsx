import { useContext, useState } from "react";
import { Card, Carousel } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";

const CarouselPage = () => {
    const { colortheme } = useContext(ThemeContext);
    const [images] = useState([
        { url: "/assets/images/carousel1.jpeg", caption: "Caption 1" },
        { url: "/assets/images/carousel2.jpeg", caption: "Caption 2" },
        { url: "/assets/images/carousel3.jpeg", caption: "Caption 3" },
        { url: "/assets/images/carousel1.jpeg", caption: "Caption 4" },
        { url: "/assets/images/carousel2.jpeg", caption: "Caption 5" },
        { url: "/assets/images/carousel3.jpeg", caption: "Caption 6" },
    ]);

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
            <Card title="Basic">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>Basic carousel</span> with navigation and pagination. 
                </div>
                <Carousel
                    images={images}
                    variant="simple"
                    navigation={true}
                    pagination={true}
                />
            </Card>
            <Card title="Autoplay">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>autoplay</span> prop is used to
                    set the autoplay of the carousel.
                </div>
                <Carousel
                    images={images}
                    variant="caption"
                    autoplay={true}
                    navigation={true}
                />
            </Card>
            <Card title="Thumbnail">
                <div className="text-sm mb-3">
                    The <span style={{ color: colortheme }}>thumbnail</span> prop is used to
                    set the thumbnail of the carousel.
                </div>
                <Carousel
                    images={images}
                    variant="thumbnail"
                    autoplay={true}
                    loop={true}
                    navigation={true}
                    pagination={true}
                />
            </Card>
            <Card title="EffectCards">
                <div className="text-sm mb-3">
                    <span style={{ color: colortheme }}>EffectCards</span> is a carousel component with unique animation.
                </div>
                <Carousel
                    images={images}
                    variant="EffectCards"
                />
            </Card>
        </div>
    )
}

export default CarouselPage