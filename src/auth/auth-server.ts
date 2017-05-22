import * as express from 'express';

import { Auth } from './auth'

export class AuthServer {
    authApp = express();

    constructor(auth: Auth) {

        this.authApp.get('/', (req, res) => {
            // The form's action is '/' and its method is 'POST',
            // so the `app.post('/', ...` route will receive the
            // result of our form
            let html = "ATH Calendar app is running!";

            if(!auth.hasSecretFile()) {
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
            }

            res.send(html);
        });

        // This route receives the posted form.
        // As explained above, usage of 'body-parser' means
        // that `req.body` will be filled in with the form elements
        this.authApp.post('/', (req, res) => {
            let html = "ATH Calendar app is running!";
            
            if(!auth.hasSecretFile()) {
                let projectId = req.body.projectId;
                let clientId = req.body.clientId;
                let clientSecret = req.body.clientSecret;
                html = `Project ID: ${projectId} <br/>
                Client ID: ${clientId} <br/>
                Client Secret: ${clientSecret}`;
            }
            res.send(html);
        });

        this.authApp.listen(8000);
        console.log("Auth server running on http://localhost:8000");

    }


}

