import React from "react";

function FaqForm() {
  return (
    <div className="text-center">
      <main className="form-signin w-100 m-auto">
        <form action="">
          <h1 className="h3 mb-3 fw-normal">Do you have any doubts?</h1>
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
          <div className="form-floating text-start">
            <textarea
              className="form-control"
              style={{ width: "23rem", height: "10rem" }}
              name="messgae"
              id="message"
              placeholder="Message"
            />
            <label htmlFor="messgae">Message</label>
          </div>

          <button className="w-90 btn btn-lg btn-primary " type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default FaqForm;
