import React from "react";
import ChooseUsCard from "./view/ChooseUsCard";

function ChooseUs() {
  return (
    <div className="container">
      <ChooseUsCard
        images="/speaker.png"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."
        alt="ER Choose Us Content"
      />
    </div>
  );
}

export default ChooseUs;
