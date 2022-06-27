import React, { useState } from "react";
import axios from "axios";

function FaqForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    let data = {
      name,
      phone,
      email,
      message,
    };
    axios("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response Received");
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div className="text-center ">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Do you have any doubts?</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="john"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="tel"
              className="form-control"
              id="floatingContactNumber"
              placeholder="123456789"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label htmlFor="floatingContactNumber">Contact Number</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="messgae">Message</label>
          </div>

          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="w-90 btn btn-lg btn-primary "
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default FaqForm;
