import React from "react";
import CandidateForm from "./CandidateForm";

function HomeContainer({ classes }) {
  return (
    <div className="topContainer" id="topContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-start topTitle text-light">
            <h1 className="textBorderStyle ">Find Your Next Job...</h1>
            <h2
              style={{ fontWeight: "bold", fontSize: "30px" }}
              className="text-light textBorderStyle"
            >
              Apply Now
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 canForms">
            <CandidateForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
