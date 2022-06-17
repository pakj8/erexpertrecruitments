import React, { useEffect, useRef, useState } from "react";
import MilestoneCard from "./view/MilestoneCard";

function Milestone() {
  return (
    <div className="container milestone">
      <h1 className="text-center display-1 mt-5 text-light">Milestone</h1>
      <div className="row">
        <div className="col-lg-3">
          <MilestoneCard
            start={0}
            end={2019}
            text="ER Expert Recruitment was started by 2 enthusiastic partners in 2019."
          />
        </div>
        <div className="col-lg-3">
          <MilestoneCard
            start={0}
            end={2020}
            text="We grew Stronger with a franchise and solitary serving companies across every sector."
          />
        </div>
        <div className="col-lg-3">
          <MilestoneCard
            start={0}
            end={2021}
            text="Today we are hiring candidates PAN India as well as Globally."
          />
        </div>
        <div className="col-lg-3">
          <MilestoneCard
            start={0}
            end={2022}
            text="We aim towards allocating dedicated and Exclusive Candidates for each of our clients."
          />
        </div>
      </div>
    </div>
  );
}

export default Milestone;