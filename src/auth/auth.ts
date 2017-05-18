import * as fs from 'fs';
import * as readline from 'readline';
import * as googleAuth from 'google-auth-library';
import * as Promise from 'promise';

const auth: googleAuth.GoogleAuth = new googleAuth();

export class Auth {
    token_dir: string;
    token_path: string;
    clientSecret_path: string;

    constructor(public scopes: string[], public authTokenFileName: string) {
        this.token_dir = (process.env.HOME || process.env.HOMEPATH ||
            process.env.USERPROFILE) + '/.credentials/';
        this.token_path = this.token_dir + authTokenFileName;
        this.clientSecret_path = this.token_dir + 'client_secret.json';
    }

    authorize() {
        return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
            this.getCredentials()
            .then((credentials: any) => {
                const clientSecret = credentials.installed.client_secret;
                const clientId = credentials.installed.client_id;
                const redirectUrl = credentials.installed.redirect_uris[0];
                const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

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

            })
            .catch((err) => {
                console.log("Could not get credentials file.");
                reject(err);
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
                    this.storeTokenFiles(token, this.token_dir, this.token_path)
                    .then(tokenPath => {
                        console.log(`Token stored to ${tokenPath}`);
                        resolve(oauth2Client);                
                    });
                    
                });
            });
        });
    }

    // storeToken(token) {

    //     return new Promise((resolve, reject) => {
    //         try {
    //             fs.mkdirSync(this.token_dir);
    //         } catch (err) {
    //             if (err.code != 'EEXIST') {
    //                 reject(err);
    //             }
    //         }
            
    //         fs.writeFile(this.token_path, JSON.stringify(token), (err) => {
    //             reject(err);
    //         });

    //         resolve(this.token_path);

    //     });
    // }

    getCredentials() {

        return new Promise((resolve, reject) => {
            // Check if we have previously stored a token.
            fs.readFile(this.clientSecret_path, (err, clientSecret) => {
                if (err) {
                    // There is no token, so get new one.
                    this.getClientSecret()
                    .then(client => resolve(client)) 
                    .catch(error => reject(error));
                } else {
                    resolve(clientSecret);
                }
            });

        });
    }

    getClientSecret() {

        let clientSecret = {"installed": {
                "client_id":"",
                "project_id":"",
                "auth_uri":"https://accounts.google.com/o/oauth2/auth",
                "token_uri":"https://accounts.google.com/o/oauth2/token",
                "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
                "client_secret":"",
                "redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
            }
        }

        console.log('No client secert file present. Need more information. ');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve, reject) => {
            rl.question('project id: ', (projectId) => {
                clientSecret.installed.project_id = projectId
            });

            rl.question('client id: ', (clientId) => {
                clientSecret.installed.client_id = clientId
            });

            rl.question('client secret: ', (clientSecretRl) => {
                clientSecret.installed.client_secret = clientSecretRl
                rl.close();
                this.storeTokenFiles(clientSecret, this.token_dir, this.clientSecret_path)
                .then(filePath => {
                    console.log(`Client secret saved to ${filePath}`);
                    resolve(clientSecret);
                });
                
            });
            
        })


    }

    storeTokenFiles(token, fileDir: string, filePath: string) {
        return new Promise((resolve, reject) => {
            try {
                fs.mkdirSync(fileDir);
            } catch (err) {
                if (err.code != 'EEXIST') {
                    reject(err);
                }
            }
            
            fs.writeFile(filePath, JSON.stringify(token), (err) => {
                reject(err);
            });

            resolve(filePath);

        });       
    }

}

