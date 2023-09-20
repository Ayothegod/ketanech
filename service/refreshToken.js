// const { google } = require("googleapis")
// const fs = require('fs');
// const readline = require('readline');

// const SCOPES = ['https://mail.google.com/'];
// const TOKEN_PATH = 'token.json'; // The file where the refresh token will be stored.

// const credentials = require('client_secret_362344469777-2gumubo5qp8hmjfc2b4t8ap0oh5jsi6i.apps.googleusercontent.com.json'); // Load your OAuth2 credentials JSON file.

// const { client_secret, client_id, redirect_uris } = credentials.installed;

// const oAuth2Client = new google.auth.OAuth2(
//   client_id,
//   client_secret,
//   redirect_uris[0]
// );

// const getNewToken = () => {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: SCOPES,
//   });
//   console.log('Authorize this app by visiting this url:', authUrl);
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question('Enter the code from that page here: ', (code) => {
//     rl.close();
//     oAuth2Client.getToken(code, (err, token) => {
//       if (err) return console.error('Error retrieving access token', err);
//       oAuth2Client.setCredentials(token);
//       // Store the token to a file.
//       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//         if (err) return console.error(err);
//         console.log('Token stored to', TOKEN_PATH);
//       });
//     });
//   });
// };

// // Check if we have previously stored a token.
// const checkStoredToken = () => {

//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getNewToken();
//       oAuth2Client.setCredentials(JSON.parse(token));
//     });
// }

// module.exports = {
//     oAuth2Client,
//     getNewToken,
//     checkStoredToken,
//   }
