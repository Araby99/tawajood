import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselSection = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel controls={false} activeIndex={index} onSelect={handleSelect} variant={props.mode}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/home/carousel/carousel-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p className='fs-3 font-cairo-semibold m-0'>Your website or app easily from <span className='fs-1'>now</span></p>
                    <p className="title font-cairo-bold">Develop</p>
                    <div className="mt-5"><img src="/images/home/carousel/loading.png" alt="Loading" /></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/home/carousel/carousel-1.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p className='fs-3 font-cairo-semibold m-0'>Your website or app easily from <span className='fs-1'>now</span></p>
                    <p className="title font-cairo-bold">Develop</p>
                    <div className="mt-5"><img src="/images/home/carousel/loading.png" alt="Loading" /></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/home/carousel/carousel-1.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p className='fs-3 font-cairo-semibold m-0'>Your website or app easily from <span className='fs-1'>now</span></p>
                    <p className="title font-cairo-bold">Develop</p>
                    <div className="mt-5"><img src="/images/home/carousel/loading.png" alt="Loading" /></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSection