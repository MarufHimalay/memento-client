import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const FeaturedService = () => {

    return (
        <div className="container m-3">
            <div className="text-center mb-5">
                <h2 style={{ color:"tomato"}}>Featured Service</h2>
                <h1>Choose your one</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ryJsCZr/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Capture Moments</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/W0vNXcv/Wedding-bands-in-the-hands-of-bride-and-groom-and-with-beautiful-wedding-bouquet-made-of-greenery-an.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Hand in Hand</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YWRzMDy/andreas-ronningen-S2-Yss-Lw97l4-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Beautiful</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default FeaturedService;