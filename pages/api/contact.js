import nodemailer from "nodemailer";
require("dotenv").config();

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: "erexpertrecruitments123@gmail.com",
      pass: "xdyqreogruuihqav",
    },
  });

  const mailData = {
    from: "prakashjhademo812@gmail.com",
    to: "erexpertrecruitments123@gmail.com",
    subject: `FAQ Form Submission ${req.body.name}`,
    html: `<p><strong>FAQ Form Submitted</strong></p>
    <p><strong>Name: </strong>${req.body.name}</p>
    <p><strong>Phone: </strong>${req.body.phone}</p>
    <p><strong>Email: </strong>${req.body.email}</p>
    <p><strong>Message: </strong>${req.body.message}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
}
