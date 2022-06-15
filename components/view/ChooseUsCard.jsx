import React from "react";
import Image from "next/image";

function ChooseUsCard(props) {
  return (
    <div className="row">
      <h1 className="text-start display-3 m-5">Why Choose Us?</h1>
      <div className="col-lg-6 chooseus-icon">
        <Image src={props.images} width={100} height={110} alt={props.alt} />
      </div>
      <div className="col-lg-6">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default ChooseUsCard;
