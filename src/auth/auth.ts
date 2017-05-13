import * as fs from 'fs';
import * as readline from 'readline';
import * as googleAuth from 'google-auth-library';
import * as Promise from 'promise';

const auth: googleAuth.GoogleAuth = new googleAuth();

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

/**
 * Create an OAuth2 client with the given credentials
 *
 * @param {Object} credentials The authorization client credentials.
 */
export const authorize = (credentials) => {
  const clientSecret = credentials.installed.client_secret;
  const clientId = credentials.installed.client_id;
  const redirectUrl = credentials.installed.redirect_uris[0];
  const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) {
            // There is no token, so get new one.
            getNewToken(oauth2Client)
            .then(client => resolve(oauth2Client))  // new token is found, resolve this promise
            .catch(error => reject(error));         // couldn't get a token, so reject this promise
        } else {
            oauth2Client.credentials = JSON.parse(token.toString());
            resolve(oauth2Client);
        }
    });

  });

}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 */
const getNewToken = (oauth2Client) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oauth2Client.getToken(code, (err, token) => {
            if (err) {
                reject(err);
            }

            oauth2Client.credentials = token;
            storeToken(token)
            .then(tokenPath => {
                console.log(`Token stored to ${tokenPath}`);
                resolve(oauth2Client);                
            });
            
        });
    });
  });

}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
const storeToken = (token) => {

  return new Promise((resolve, reject) => {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
            reject(err);
        }
    }
    
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        reject(err);
    });

    resolve(TOKEN_PATH);

  });
}
