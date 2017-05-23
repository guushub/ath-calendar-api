import * as fs from 'fs';
import * as readline from 'readline';
import * as googleAuth from 'google-auth-library';
import * as Promise from 'promise';
import * as express from 'express';

const auth: googleAuth.GoogleAuth = new googleAuth();

export class Auth {
    private _token_dir: string;
    private _token_path: string;
    private _clientSecret_path: string;
    private _clientSecret = {
        "installed": {
            "client_id":"",
            "project_id":"",
            "auth_uri":"https://accounts.google.com/o/oauth2/auth",
            "token_uri":"https://accounts.google.com/o/oauth2/token",
            "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
            "client_secret":"",
            "redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
        }
    }

    constructor(public scopes: string[], public authTokenFileName: string, public clientSecretFileName: string) {
        this._token_dir = (process.env.HOME || process.env.HOMEPATH ||
            process.env.USERPROFILE) + '/.credentials/';
        this._token_path = this._token_dir + authTokenFileName;
        this._clientSecret_path = this._token_dir + clientSecretFileName;
    }

    authorize() {
        return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
            this._getOAuth2Client()
            .then(oauth2Client => {
                fs.readFile(this._token_path, (err, token) => {
                    if (err) {
                        // There is no token, so get new one.
                        this._getNewToken(oauth2Client)
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

    public hasTokenFile() {
        return fs.existsSync(this._token_path);
    }

    public hasSecretFile() {
        return fs.existsSync(this._clientSecret_path);
    }

    public storeSecretFile(projectid: string, clientId: string, clientSecret: string) {
        this._clientSecret.installed.project_id = projectid;
        this._clientSecret.installed.client_id = clientId;
        this._clientSecret.installed.client_secret = clientSecret;
        return this._storeTokenFiles(this._clientSecret, this._token_dir, this._clientSecret_path);
    }

    public storeTokenFile(code: string) {
        return new Promise((resolve, reject) => {
            this._getOAuth2Client()
            .then(oauth2Client => {
                oauth2Client.getToken(code, (err, token) => {
                    if (err) {
                        reject(err);
                    }

                    oauth2Client.credentials = token;
                    this._storeTokenFiles(token, this._token_dir, this._token_path)
                    .then(tokenPath => {
                        console.log(`Token stored to ${tokenPath}`);
                        resolve(oauth2Client);                
                    });
                    
                });
            });
        });
    }

    private _getOAuth2Client() {
        return new Promise<googleAuth.OAuth2Client>((resolve, reject) => {
            this._getCredentials()
            .then((credentials: any) => {
                    const clientSecret = credentials.installed.client_secret;
                    const clientId = credentials.installed.client_id;
                    const redirectUrl = credentials.installed.redirect_uris[0];
                    resolve(new auth.OAuth2(clientId, clientSecret, redirectUrl));
            });
        });
    }

    public getAuthUrl() {
        return new Promise((resolve, reject) => { 
            this._getOAuth2Client()
            .then(oauth2Client => {
                const authUrl = oauth2Client.generateAuthUrl({
                    access_type: 'offline',
                    scope: this.scopes
                });
                resolve(authUrl)
            })
        });
    }

    private _getNewToken(oauth2Client) {
        const authUrl = this.getAuthUrl();

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
                    this._storeTokenFiles(token, this._token_dir, this._token_path)
                    .then(tokenPath => {
                        console.log(`Token stored to ${tokenPath}`);
                        resolve(oauth2Client);                
                    });
                    
                });
            });
        });
    }

    private _getCredentials() {

        return new Promise((resolve, reject) => {
            // Check if we have previously stored a token.
            fs.readFile(this._clientSecret_path, (err, clientSecret) => {
                if (err) {
                    // There is no secrets file, so get new one.                  
                    this._getClientSecret()
                    .then(client => resolve(client)) 
                    .catch(error => reject(error));
                } else {
                    resolve(JSON.parse(clientSecret.toString()));
                }
            });

        });
    }

    private _getClientSecret() {
        console.log('No client secret file present. Need more information. ');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve, reject) => {
            let projectId: string;
            let clientId: string;
            let clientSecret: string;
            rlQuestion(rl, 'project id: ')
            .then(answer => {
                this._clientSecret.installed.project_id = answer;
                return rlQuestion(rl, 'client id: ');
            })
            .then(answer => {
                this._clientSecret.installed.client_id = answer;
                return rlQuestion(rl, 'client secret: ');
            })
            .then(answer => {
                this._clientSecret.installed.client_secret = answer
                rl.close();
                //return this._storeTokenFiles(this._clientSecret, this._token_dir, this._clientSecret_path);
                return this.storeSecretFile(projectId, clientId, clientSecret);
            })
            .then(filePath => {
                console.log(`Client secret saved to ${filePath}`);
                resolve(this._clientSecret);
            });            
        });


    }

    private _storeTokenFiles(token, fileDir: string, filePath: string) {
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

const rlQuestion = (rl: readline.ReadLine, question: string) => {
    return new Promise<string>((resolve, reject) => { 
        rl.question(question, (answer) => {
                    resolve(answer);
        });
    });
}

