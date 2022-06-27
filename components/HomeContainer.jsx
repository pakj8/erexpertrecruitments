import React from "react";
import CandidateForm from "./CandidateForm";

function HomeContainer({ classes }) {
  return (
    <div className="topContainer" id="topContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 text-start topTitle text-light">
            <h1 className="textBorderStyle ">Find Your Next Job...</h1>
            <h2
              style={{ fontWeight: "bold", fontSize: "30px" }}
              className="text-light textBorderStyle"
            >
              Apply Now
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
