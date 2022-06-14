import React from "react";
import { Carousel } from "react-bootstrap";
import { Bounce, Roll, Zoom } from "react-reveal";

function CarouselTop() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100 carousel-image"
          src="/recslide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="tilte">
          <Zoom top>
            <h1
              style={{ color: "blue" }}
              className="display-4 textBorderStyle mb-5 text-start"
            >
              Welcome To ER EXPERT RECRUITMENT
              <span
                style={{ transitionDelay: ".8s" }}
                className="blockquote d-block span-title"
              >
                {" "}
                Nulla vitae elit libero, a pharetra augue mollis interdum
              </span>
            </h1>
          </Zoom>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 carousel-image"
          src="/recslide1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1
            style={{ color: "blue" }}
            className="display-4 textBorderStyle mb-5 text-start"
          >
            Second Slide Label
            <span
              style={{ transitionDelay: ".8s" }}
              className="blockquote d-block span-title"
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/recslide1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1
            style={{ color: "blue" }}
            className="display-4 textBorderStyle mb-5"
          >
            Third Slide Label
            <span
              style={{ transitionDelay: ".8s" }}
              className="blockquote d-block span-title"
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTop;
