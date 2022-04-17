import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectIndex, e) => {
        setIndex(selectIndex);
    }

    return (
        <div className='slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{height: '500px'}}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Your Food My Art of photography</h3>
                    <p>A complete way of photography for food.Perfect action for food</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: '500px'}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Color Barrel</h3>
                    <p>Color of your life. The way of color Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: '500px'}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Perfume & Scent</h3>
                    <p>perfume comes from nature we memories all of you it's natural </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;