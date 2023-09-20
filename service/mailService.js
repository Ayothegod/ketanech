var nodemailer = require("nodemailer");

// const { google } = require("googleapis")
// const { oAuth2Client, getNewToken, checkStoredToken } = require("./refreshToken");
// Set up OAuth2 credentials
// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// );
// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
// });
// export async function sendMail(fromEmail, subject, otpText) {
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.NODEMAILER_EMAIL,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
//     accessToken: oAuth2Client.getAccessToken(),
//   },
// });
// const mailOptions = {
//   from: 'your.email@gmail.com',
//   to: 'recipient@example.com',
//   subject: 'Subject',
//   text: 'Message body',
// };
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

//   var mailOptions = {
//     from: fromEmail,
//     to: process.env.NODEMAILER_EMAIL,
//     subject: subject,
//     text: otpText,
//   };

// await new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (err, response) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(response);
//       }
//     });
//   });
// }

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
  
  await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }