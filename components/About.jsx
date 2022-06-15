import React from "react";
import Image from "next/image";
import about1 from "../public/recabout.jpg";
import about2 from "../public/recabout1.jpg";

function About() {
  const text1 = `WHAT IS LORIEM IPSUM?`;

  const text2 = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry.`;

  const text3 = `Lorem Ipsum has been the industry's standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`;

  const text4 = `Lorem Ipsum has been the industry's standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`;

  return (
    <div className="container about">
      <div className="row">
        <h1 className="display-3 m-5 text-start">About Us</h1>
        <div className="col-lg-6 text-start about-content">
          <h3>{text1}</h3>
          <h4>{text1}</h4>
          <p>{text2}</p>
        </div>
        <div className="col-lg-6 about-img1">
          <Image
            src={about1}
            width={300}
            height={400}
            alt="ER About Us"
            className="about-image"
          />
        </div>
        <div className="col-lg-6 about-img1">
          <Image
            src={about2}
            width={300}
            height={400}
            alt="ER About Us"
            className="about-image"
          />
        </div>
        <div className="co-lg-6 about-content1">
          <p>{text3}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
