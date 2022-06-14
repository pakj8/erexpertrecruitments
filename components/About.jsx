import React from "react";
import Image from "next/image";
import { Slide } from "react-reveal";

function About() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="about-title text-start px-5 mt-5">About Us</h1>{" "}
        <div className="col-lg-6 mt-5 about-section">
          <Slide left>
            <h3>What is Lorem Ipsum?</h3>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Slide>
        </div>
        <div style={{ paddingLeft: "5%" }} className="col-lg-6 mt-5">
          <Slide right>
            <Image
              src="/recabout.jpg"
              width={500}
              height={550}
              alt="ER Reqcruiment Image"
              className="about-img"
            />
          </Slide>
        </div>
        <div className="col-lg-6 about-section">
          <Slide left>
            <Image
              src="/recabout1.jpg"
              width={500}
              height={550}
              alt="ER Reqcruiment Image"
              className="about-img"
            />
          </Slide>
        </div>
        <div className="col-lg-6 mt-5 about-section">
          <Slide right>
            <h3>What is Lorem Ipsum?</h3>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Slide>
        </div>{" "}
      </div>
    </div>
  );
}

export default About;
