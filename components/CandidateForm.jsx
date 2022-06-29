import React, { useState } from "react";
import axios from "axios";

function CandidateForm() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    await axios.post(
      `https://sheet.best/api/sheets/53a3f136-1e58-4ef0-82bb-398f976cf0ee`,
      {
        name,
        contactNumber,
        email,
      }
    );
    e.preventDefault();
  };

  return (
    <div className=" container">
      <div className=" candidateForm card card-info candidateCard">
        <div className="card-title">
          <h3 className="text-center mt-5 ">
            Fill This Form To Get in Touch With Us
          </h3>
        </div>
        <div className="card-body text-dark">
          <div className="text-center">
            <main className="form-signin w-100 m-auto">
              <form action="">
                <div className="form-floating">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="john"
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    onChange={(e) => setContactNumber(e.target.value)}
                    type="tel"
                    className="form-control"
                    id="floatingContactNumber"
                    placeholder="123456789"
                  />
                  <label htmlFor="floatingContactNumber">Contact Number</label>
                </div>
                <div className="form-floating">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@email.com"
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-90 btn btn-lg btn-primary mt-4"
                  type="submit"
                >
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
