import * as Promise from 'promise';
import * as google from 'googleapis';
import * as googleAuth from 'google-auth-library';

export const getRows = (auth: googleAuth.OAuth2Client, spreadsheetId: string) => {
    const sheets = google.sheets('v4');
    return new Promise<any[]>((resolve, reject) => { 
        sheets.spreadsheets.values.get({
        auth: auth as any,
        spreadsheetId: spreadsheetId,
        range: 'Sheet1!A4:I',
        valueRenderOption: 'UNFORMATTED_VALUE'
        }, (err, response) => {
            if (err) {
                reject(err);
            }
            if(response && response.values) {
                resolve(response.values);
            } else {
                reject("Unexpected response from sheets API.")
            }
        });
    });
}