import React from "react";
import Image from "next/image";

function ServicesCard(props) {
  return (
    <div className="bg-img container">
      <div
        style={{ width: "15rem" }}
        className="services-card hover-card card border-info"
      >
        <div className="card-info card-body">
          <Image src={props.images} width={50} height={50} alt={props.alt} />
          <div className="card-body">
            <h3 className="card-text services-text">{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
