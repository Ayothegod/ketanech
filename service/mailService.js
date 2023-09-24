var nodemailer = require("nodemailer");

export async function sendMail(fromEmail, subject, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  var mailOptions = {
    from: fromEmail, // this is the sender == nodemailer email
    to: "legacyempire8@gmail.com", // a general receiver
    subject: subject,
    text: otpText,
  };
  // process.env.NODEMAILER_EMAIL

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions,
      (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
          console.log(response);
        }
      }
    );
  });
}
