import { faPrint } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ServicesCard from "./view/ServicesCard";

function OurServices() {
  return (
    <div className="container services-section">
      <div className="row text-center ">
        <h1 className="display-3 m-5 text-start">Services We Provide</h1>
        <div className="col-lg-3 col-md-6">
          <ServicesCard
            images="/recruitment.png"
            alt="ER Recruitment"
            title="Recruiment"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <ServicesCard
            images="/salary.png"
            alt="ER Payroll"
            title="Payroll Management"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <ServicesCard
            images="/education.png"
            alt="ER Training & Development"
            title="Training & Development"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <ServicesCard
            images="/worldwide.png"
            alt="ER Global Recruitments"
            title="Global Recruitments"
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
