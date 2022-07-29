import { createTransport, getTestMessageUrl } from "nodemailer";
const dotenv = require("dotenv");

dotenv.config();
async function main(req, res) {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MY_GMAIL,
    to: process.env.GMAIL,
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
