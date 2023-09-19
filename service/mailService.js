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
    from: fromEmail,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       throw new Error(error);
//     } else {
//       console.log("Email Sent");
//       return true;
//     }
//   });

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}