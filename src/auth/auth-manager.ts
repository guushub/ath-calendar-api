import * as express from 'express';
import * as Promise from 'promise';
import * as bodyParser from 'body-parser';

import { Auth } from './auth'

export class AuthManager {
    authApp = express();
    
    constructor(public auth: Auth, public runApp: () => void) {

        if(this.auth.hasSecretFile() && this.auth.hasTokenFile()) {
            this.runApp();
        }

        this.authApp.use(bodyParser.json());
        this.authApp.use(bodyParser.urlencoded({
            extended: true
        }));
        
        this.authApp.get('/', (req, res) => {
            this.getHtml()
            .then(html => {
                res.send(html);
            });
        });

        // This route receives the posted form.
        // As explained above, usage of 'body-parser' means
        // that `req.body` will be filled in with the form elements
        this.authApp.post('/', (req, res) => {
            
            if(!auth.hasSecretFile()) {
                let projectId = req.body.projectId;
                let clientId = req.body.clientId;
                let clientSecret = req.body.clientSecret;
                auth.storeSecretFile(projectId, clientId, clientSecret)
                .then(() => res.redirect('/'));
                
            } else if(!this.auth.hasTokenFile()) {
                let code = req.body.code;
                auth.storeTokenFile(code)
                .then(() => { 
                    this.runApp();
                    res.redirect('/');
                });
            }
        });

        this.authApp.listen(8000);
        console.log("Auth server running on http://localhost:8000");

    }

    getHtml() {
        let html = "ATH Calendar app is running!";

        return new Promise<string>((resolve, reject) => {
            if(!this.auth.hasSecretFile()) {
                html = '<form action="/" method="post">' +
                        'Project ID:' +
                        '<input type="text" name="projectId" />' +
                        '<br/>' +
                        'Client ID:' +
                        '<input type="text" name="clientId" />' +
                        '<br/>' +
                        'Client Secret:' +
                        '<input type="text" name="clientSecret" />' +
                        '<br/>' +                                
                        '<button type="submit">Submit</button>' +
                        '</form>';
                resolve(html);
            } else if(!this.auth.hasTokenFile()) {
                this.auth.getAuthUrl()
                .then(url => {
                    html = `Authorize this app by clicking <a href="${url}" target="_BLANK">here</a>.<br/>
                    <form action="/" method="post">
                        Enter the code from that page here: 
                        <input type="text" name="code" /><br/>
                        <button type="submit">Submit</button>
                    </form>`;
                    resolve(html);
                })
            } else {
                resolve(html);               
            }
        });
    }

}

