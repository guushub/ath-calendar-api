// Node module import
import * as fs from 'fs';
import * as http from 'http';
import * as google from 'googleapis';
import * as googleAuth from 'google-auth-library';

import * as auth from './auth/auth'

var CLIENT_FILE_PATH = "./assets/client_secret.json";

// Load client secrets from a local file.
fs.readFile(CLIENT_FILE_PATH, (err, content) => {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Sheets API.
  //auth.authorize(JSON.parse(content.toString()), listData);
  auth.authorize(JSON.parse(content.toString()))
  .then(authorization => {
    listData(authorization);
    listEvents(authorization);
  })
  .catch(error => console.log(error));
});

const listData = (auth: googleAuth.OAuth2Client) => {

  const sheets = google.sheets('v4');
  sheets.spreadsheets.values.get({
      auth: auth as any,
      //spreadsheetId: '1DM3oRDpVYoLa3m7D6zh-GJuMTiDEYB0_hUZCHsFREA0',
      //range: 'Sheet1!A2:H',
      spreadsheetId: '1TpfxYbCEm5hc-ELG54_vcXhOm4Ly16bgRyKKhc-ktpI',
      range: 'Sheet1!A4:H',
      valueRenderOption: 'UNFORMATTED_VALUE'
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      let rows = response.values;
      if (rows.length == 0) {
        console.log('No data found.');
      } else {
        console.log('Datum, Stoelendienst:');
        for (let i = 0; i < rows.length; i++) {
          let row = rows[i];
          let repetitieDatum = ExcelDateToJSDate(row[0] + row[1]);
          console.log(`${repetitieDatum.toLocaleDateString()} ${repetitieDatum.toLocaleTimeString()}: ${row[6]}`);
        }
      }
  });
}

const ExcelDateToJSDate = (serial: number) => {
   let utc_days  = Math.floor(serial - 25569);
   let utc_value = utc_days * 86400;                                        
   let date_info = new Date(utc_value * 1000);

   let fractional_day = serial - Math.floor(serial) + 0.0000001;

   let total_seconds = Math.floor(86400 * fractional_day);

   let seconds = total_seconds % 60;

   total_seconds -= seconds;

   let hours = Math.floor(total_seconds / (60 * 60));
   let minutes = Math.floor(total_seconds / 60) % 60;

   return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
}


const listEvents = (auth: googleAuth.OAuth2Client) => {
  
  /**
   * Lists the next 10 events on the user's primary calendar.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  const calendar = google.calendar('v3');

  calendar.events.list({
    auth: auth,    
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    let events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      console.log('Upcoming 10 events:');
      for (var i = 0; i < events.length; i++) {
        let event = events[i];
        let start = event.start.dateTime || event.start.date;
        console.log('%s - %s', start, event.summary);
      }
    }
  });
}