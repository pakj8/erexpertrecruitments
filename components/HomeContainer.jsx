import React from "react";
import CandidateForm from "./CandidateForm";

function HomeContainer({ classes }) {
  return (
    <div className="topContainer" id="topContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-start topTitle text-light">
            <div className="homeContainerContent">
              <h1 className="textBorderStyle mobileTilte">
                Find Your Next Job...
              </h1>
              <h2
                style={{ fontWeight: "bold", fontSize: "30px" }}
                className="text-light textBorderStyle mobileTilte"
              >
                Apply Now
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 canForms">
            <div className="homeContainerForm">
              <CandidateForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
