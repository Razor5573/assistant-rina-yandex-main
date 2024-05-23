import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle, CardText, Button
} from 'reactstrap';
import urljoin from "url-join";
import {useHistory} from "react-router-dom";


function CategoriesCarousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const router = useHistory()

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const onCardClick = (item) => {
        const newPath = urljoin('/restaurant/category');
        router.replace({
            pathname: newPath,
            state: {id: item.id.toString(), title: item.title}
        });
    };

    const slides = props.items.map((item) => {
        return (
            <CarouselItem
                className="carousel-item"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <Card>
                    <img
                        src={item.linkImage}
                        alt={item.altText}
                        onClick={() => onCardClick(item)}
                        style={{ height: '600px', objectFit: 'cover' }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.title}
                        </CardTitle>
                    </CardBody>
                </Card>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...props}
        >
            <CarouselIndicators
                items={props.items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                style={{ marginBottom: "-50px"}}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default CategoriesCarousel;