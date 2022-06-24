import React from "react";

function CandidateForm() {
  return (
    <div className=" container">
      <div
        style={{
          width: "25rem",
          height: "30rem",
          backgroundColor: "#1a3c40",
        }}
        className="text-light candidateForm card card-info candidateCard"
      >
        <div className="card-title">
          <h3 className="text-center mt-5 ">
            Fill this form to get in touch with us
          </h3>
        </div>
        <div className="card-body text-dark">
          <div className="text-center">
            <main className="form-signin w-100 m-auto">
              <form action="">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="john"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingContactNumber"
                    placeholder="123456789"
                  />
                  <label htmlFor="floatingContactNumber">Contact Number</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@email.com"
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>

                <button className="w-90 btn btn-lg btn-primary " type="submit">
                  Submit
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateForm;
