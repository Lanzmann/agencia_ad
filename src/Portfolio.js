import React from "react"
import styled from "styled-components"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f2f2f2;
`;

const images = [
    "https://via.placeholder.com/1920x1080",
    "https://via.placeholder.com/1920x1080",
    "https://via.placeholder.com/1920x1080",
]

const Portfolio = () => {
    return (
        <CarouselContainer>
            <Carousel showThumbs={false} autoPlay>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt=""/>
                    </div>
                ))}
            </Carousel>
        </CarouselContainer>
    )
}

export default Portfolio