// sendEmail.js
const nodemailer = require("nodemailer");

const sendBirthdayEmail = async (user) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your email
      pass: process.env.GMAIL_PASS, // App password
    },
  });

  const mailOptions = {
    from: `"Birthday Bot 🎉" <${process.env.GMAIL_USER}>`,
    to: user.email,
    subject: "Happy Birthday 🎂",
    html: `<h1>Happy Birthday, ${user.name}!</h1><p>Wishing you joy, success, and lots of cake! 🥳</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendBirthdayEmail;
