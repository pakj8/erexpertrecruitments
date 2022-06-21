import React from "react";

function TwoContainer() {
  const text = `We look at potential as well as actual skills and competencies of
  candidates and connect you to the right talent who will take your
  organisation to new heights`;

  const text2 = `We Provide high-Quality HR Services to Clients in Mumbai who require
  HR Support and HR Direction. We not only provide Trained and Enabled
  Employees for Bulk-Hiring but also Support Functions to Contribute
  effectively and Productively to the overall Company Direction.`;

  return (
    <div className="container twoGrid">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="display-5 text-start mt-5">Why Choose Us?</h3>
          <p className="chooseContent mt-5">{text}</p>
        </div>
        <div className="col-lg-6">
          <h3 className="display-5 text-start mt-5">What we Do</h3>
          <p className="weDoContent mt-5">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default TwoContainer;
