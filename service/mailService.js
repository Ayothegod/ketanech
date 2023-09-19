var nodemailer = require("nodemailer");
const { google } = require("googleapis")

// Set up OAuth2 credentials
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: 'MY_REFRESH_TOKEN',
});

export async function sendMail(fromEmail, subject, otpText) {
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'your.email@gmail.com',
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    refreshToken: 'YOUR_REFRESH_TOKEN',
    accessToken: oauth2Client.getAccessToken(),
  },
});

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

  var mailOptions = {
    from: fromEmail,
    to: process.env.NODEMAILER_EMAIL,
    subject: subject,
    text: otpText,
  };

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

// export async function sendMail(fromEmail, subject, otpText) {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.NODEMAILER_EMAIL,
//         pass: process.env.NODEMAILER_PASSWORD,
//       },
//     });
  
//     var mailOptions = {
//       from: fromEmail,
//       to: process.env.NODEMAILER_EMAIL,
//       subject: subject,
//       text: otpText,
//     };
  
//   await new Promise((resolve, reject) => {
//       // send mail
//       transporter.sendMail(mailOptions, (err, response) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(response);
//         }
//       });
//     });
//   }