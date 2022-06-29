import React, { useEffect } from "react";
import FaqBar from "./view/FaqBar";
import FaqForm from "./FaqForm";

function Faq() {
  return (
    <div className="container-fluid">
      <div id="faq" className="faq-section row">
        <h1 className="p-5 pb-7 text-start display-4 titleColor themeColor">
          Frequently Asked Questions
        </h1>
        <div className="faqCardBar col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-5">
          <div className="card border-info faqQuestionCard">
            <div className="faqBar card-body">
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
              <div className="col text-center justify-content-center mt-5">
                <a className="" href="">
                  <button type="button" className="btn btn-secondary btn-lg">
                    Read More...
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="faqForm col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-5">
          <div className="card border-info faqCard bg-light">
            <div className="card-body">
              <FaqForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
