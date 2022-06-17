import React from "react";

function TwoContainer() {
  return (
    <div className="container twoGrid">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="display-5 text-start mt-5">WHY CHOOSE US?</h3>
          <p className="chooseContent mt-5">
            WE LOOK AT POTENTIAL AS WELL AS ACTUAL SKILLS AND COMPETENCIES OF
            CANDIDATES AND CONNECT YOU TO THE RIGHT TALENT WHO WILL TAKE YOUR
            ORGANISATION TO NEW HEIGHTS
          </p>
        </div>
        <div className="col-lg-6">
          <h3 className="display-5 text-start mt-5">What we Do</h3>
          <p className="weDoContent mt-5">
            We Provide high-Quality HR Services to Clients in Mumbai who require
            HR Support and HR Direction. We not only provide Trained and Enabled
            Employees for Bulk-Hiring but also Support Functions to Contribute
            effectively and Productively to the overall Company Direction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoContainer;
