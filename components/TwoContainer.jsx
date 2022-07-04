import React from "react";

function TwoContainer() {
  const text = `We look at potential as well as actual skills and competencies of
  candidates and connect you to the right talent who will take your
  organisation to new heights. The quality and effectiveness of the organization is determined by the quality of the people that are employed`;

  const text2 = `We Provide high-Quality HR Services to Clients in Mumbai who require
  HR Support and HR Direction. We not only provide Trained and Enabled
  Employees for Bulk-Hiring but also Support Functions to Contribute
  effectively and Productively to the overall Company Direction.`;

  return (
    <div className="container twoGrid themeColor">
      <h1 className="display-3 text-center mt-5 mb-5 twoTitle themeColor">
        #KnowUs
      </h1>
      <div className="row twoComponent">
        <div className="col-lg-6">
          <div className="chooseContent">
            <h3 className="display-5 text-start mt-5">Why Choose Us?</h3>
            <p className=" mt-5">{text}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="weDoContent">
            <h3 className="display-5 text-start mt-5">What We Do</h3>
            <p className=" mt-5">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoContainer;
