import React, { useEffect } from "react";
import FaqBar from "./view/FaqBar";

function Faq() {
  return (
    <div className="faq-section row">
      <h1 className="p-5 pb-7 text-start display-4 titleColor">
        Frequently Asked Questions
      </h1>
      <div className="col">
        <FaqBar
          question="Where are you located?"
          answer="We are located in Malad (West) Mumbai but support clients across India"
        />
      </div>
      <div className="col">
        <FaqBar
          question="Is there a cost for your Service?"
          answer="ER Expert Recruitment fees are paid by our employers clients in the event your are hired. We do not charge anything from our candidates."
        />
      </div>
      <div className="col">
        <FaqBar
          question="Do I nedd a good CV to land a Job?"
          answer="A good CV will attract employers that will invite you for a job interview, and then who knows you may just land the job. When you create a good CV, you will be on your way to a job interview in no Time."
        />
      </div>
      <div className="col">
        <FaqBar
          question="How can I determine a fair pay for my skills?"
          answer="Typically employers will use your salary history to guide an appropriate offer for your next position. It is common to receive a moderate increase on your current total compensation"
        />
      </div>
    </div>
  );
}

export default Faq;
