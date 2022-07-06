import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function FaqForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      phone,
      email,
      message,
    };
    axios.post("/api/contact", data);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="text-center ">
      <main className="form-signin w-100 m-auto">
        <form className="form-faq">
          <h1 className="h3 mb-3 fw-normal">Do you have any doubts?</h1>
          <div className="form-floating">
            <input
              type="text"
              value={name}
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
              value={phone}
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
              value={email}
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
              value={message}
              className="form-control faqMessageBox"
              name="messgae"
              id="message"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="messgae">Message</label>
          </div>

          <motion.button
            onClick={(e) => {
              handleSubmit(e);
            }}
            style={{ backgroundColor: "teal" }}
            className="w-90 btn btn-lg btn-primary mt-4"
            type="submit"
            whileHover={{ scale: 1.1 }}
          >
            Submit
          </motion.button>
        </form>
      </main>
    </div>
  );
}

export default FaqForm;
