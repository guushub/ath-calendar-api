import * as fs from 'fs';
import * as readline from 'readline';
import * as googleAuth from 'google-auth-library';
import * as Promise from 'promise';

const auth: googleAuth.GoogleAuth = new googleAuth();

export class Auth {
    token_dir: string;
    token_path: string;

    constructor(public scopes: string[], public authTokenFileName: string) {
        this.token_dir = (process.env.HOME || process.env.HOMEPATH ||
            process.env.USERPROFILE) + '/.credentials/';
        this.token_path = this.token_dir + authTokenFileName;
    }

    authorize(credentials) {
        const clientSecret = credentials.installed.client_secret;
        const clientId = credentials.installed.client_id;
        const redirectUrl = credentials.installed.redirect_uris[0];
        const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

        return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
            // Check if we have previously stored a token.
            fs.readFile(this.token_path, (err, token) => {
                if (err) {
                    // There is no token, so get new one.
                    this.getNewToken(oauth2Client)
                    .then(client => resolve(oauth2Client))  // new token is found, resolve this promise
                    .catch(error => reject(error));         // couldn't get a token, so reject this promise
                } else {
                    oauth2Client.credentials = JSON.parse(token.toString());
                    resolve(oauth2Client);
                }
            });

        });
    }

    getNewToken(oauth2Client) {
        const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: this.scopes
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
                    this.storeToken(token)
                    .then(tokenPath => {
                        console.log(`Token stored to ${tokenPath}`);
                        resolve(oauth2Client);                
                    });
                    
                });
            });
        });
    }

    storeToken(token) {

        return new Promise((resolve, reject) => {
            try {
                fs.mkdirSync(this.token_dir);
            } catch (err) {
                if (err.code != 'EEXIST') {
                    reject(err);
                }
            }
            
            fs.writeFile(this.token_path, JSON.stringify(token), (err) => {
                reject(err);
            });

            resolve(this.token_path);

        });
    }
}