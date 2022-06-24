import React from "react";
import CandidateForm from "./CandidateForm";

function HomeContainer({ classes }) {
  return (
    <div className="topContainer" id="topContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 text-start topTitle text-light">
            <h1 className="textBorderStyle ">
              Hire Top Tech, Digital, & Mobile Talent For Less Than 6%
            </h1>
            <h2 style={{ fontWeight: "bold" }} className="text-light">
              Try HR Dedicated Resource Model Today and get …
            </h2>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <CandidateForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
