// import nodemailer from "nodemailer";
// require("dotenv").config();

// export default function (req, res) {
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     service: "gmail",
//     auth: {
//       user: "erexpertrecruitments123@gmail.com",
//       pass: "xdyqreogruuihqav",
//     },
//   });

//   const mailData = {
//     from: "prakashjhademo812@gmail.com",
//     to: "erexpertrecruitments123@gmail.com",
//     subject: `FAQ Form Submission ${req.body.name}`,
//     html: `<p><strong>FAQ Form Submitted</strong></p>
//     <p><strong>Name: </strong>${req.body.name}</p>
//     <p><strong>Phone: </strong>${req.body.phone}</p>
//     <p><strong>Email: </strong>${req.body.email}</p>
//     <p><strong>Message: </strong>${req.body.message}</p>`,
//   };

//   console.log(JSON.stringify(mailData));

//   transporter.sendMail(mailData, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//       res.status(200).json({ msg: "mesage  has been sent" });
//     }
//   });

//   res.status(200);
// }

import { createTransport, getTestMessageUrl } from "nodemailer";

async function main(req, res) {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: "erexpertrecruitments123@gmail.com",
      pass: "xdyqreogruuihqav",
    },
  });

  const info = await transporter.sendMail({
    from: "prakashjhademo812@gmail.com",
    to: "erexpertrecruitments123@gmail.com",
    subject: `FAQ Form Submission ${req.body.name}`,
    html: `<p><strong>FAQ Form Submitted</strong></p>
    <p><strong>Name: </strong>${req.body.name}</p>
     <p><strong>Phone: </strong>${req.body.phone}</p>
     <p><strong>Email: </strong>${req.body.email}</p>
     <p><strong>Message: </strong>${req.body.message}</p>`,
  });

  console.log("Message from: %s", info.messageId);
  console.log("Preview URL: %s", getTestMessageUrl(info));
}

export default main;
