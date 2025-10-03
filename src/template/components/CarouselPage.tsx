import { useState } from "react";
import { Card, Carousel } from "@/components";

const CarouselPage = () => {
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
            <Card title="Basic">
                <div className="mt-2">
                    <Carousel
                        images={images}
                        variant="simple"
                        navigation={true}
                        pagination={true}
                    />
                </div>
            </Card>
            <Card title="Autoplay">
                <div className="mt-2">
                    <Carousel
                        images={images}
                        variant="caption"
                        autoplay={true}
                        navigation={true}
                    />
                </div>
            </Card>
            <Card title="Thumbnail">
                <div className="mt-2">
                    <Carousel
                        images={images}
                        variant="thumbnail"
                        autoplay={true}
                        loop={true}
                        navigation={true}
                        pagination={true}
                    />
                </div>
            </Card>
            <Card title="EffectCards">
                <div className="mt-2">
                    <Carousel
                        images={images}
                        variant="EffectCards"
                    />
                </div>
            </Card>
        </div>
    )
}

export default CarouselPage