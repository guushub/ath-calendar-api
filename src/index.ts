import * as fs from 'fs';
import * as http from 'http';

import * as Promise from 'promise';
import * as google from 'googleapis';
import * as googleAuth from 'google-auth-library';

import * as Config from './config/config';
import { Auth } from './auth/auth';
import { AthEvent } from './ath/ath-event';
import * as AthRehearsalSheet from './ath/ath-rehearsal-sheet';
import { AthCalendar } from './ath/ath-rehearsal-calendar';
import * as Helpers from './helpers/helpers';

let config: Config.IAthCalenderApiConfig;
let athCalendar: AthCalendar;
const authApp = new Auth(['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/calendar'], 
                            'sheets.googleapis.com-ath-calendar-api.json');

Config.load("./assets/config.json")
.then((configLoaded) => {
  // Loaded the configuration, set it to the global scope and load the client secret file
  config = configLoaded;
  return Config.getClientSecret(config.CLIENT_FILE_PATH);  
})
.then(credentials => {
  // Authorize the sheets API
  return authApp.authorize(credentials);
})
.then(authorization => {
  athCalendar = new AthCalendar(config.REHEARSAL_CALENDAR_ID, authorization);
  return AthRehearsalSheet.getRows(authorization, config.REHEARSAL_SPREADSHEET_ID);
  //listEvents(authorization);
})
.then(rows => {
    let events: AthEvent[] = []
    if (rows) {
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let what = row[3];
        let where = row[2];
        let program = `${row[4]} ${row[5]}`;
        let seatSetters = row[6];
        let remarks = row[7];

        let rehearsalDatumStart = Helpers.excelDateToJSDate(row[0] + row[1]);

        if(!isNaN(rehearsalDatumStart.getDate())) {
          let rehearsalDatumEnd = new Date(rehearsalDatumStart);
          rehearsalDatumEnd.setHours(rehearsalDatumEnd.getHours() + 2.5);
                    
          events.push(new AthEvent(rehearsalDatumStart, what, where, rehearsalDatumEnd, program, seatSetters, remarks));
        }
      }
    }

    return athCalendar.insertEvents(events);
    // console.log('Events:');
    // events.forEach((event) => {
    //   console.log(JSON.stringify(event));
      
    // })    
})
.then((events) => {
  console.log(`Succesfully added ${events.length} events!`);
})
.catch(error => console.error(error));


// // Load client secrets from a local file.
// fs.readFile(CLIENT_FILE_PATH, (err, content) => {
//   if (err) {
//     console.log('Error loading client secret file: ' + err);
//     return;
//   }

//   // Authorize a client with the loaded credentials, then call the
//   // Google Sheets API.
//   let authSheets = new Auth(['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/calendar.readonly'], 
//                              'sheets.googleapis.com-ath-calendar-api.json')
//   authSheets.authorize(JSON.parse(content.toString()))
//   .then(authorization => {
//     return listData(authorization, SPREADSHEET_ID);
//     //listEvents(authorization);
//   })
//   .then((rows) => {
//       //let rows = response.values;
//       if (rows.length == 0) {
//         console.log('No data found.');
//       } else {
//         console.log('Datum, Stoelendienst:');
//         for (let i = 0; i < rows.length; i++) {
//           let row = rows[i];
//           let repetitieDatum = ExcelDateToJSDate(row[0] + row[1]);
//           console.log(`${repetitieDatum.toLocaleDateString()} ${repetitieDatum.toLocaleTimeString()}: ${row[6]}`);
//         }
//       }
//   })
//   .catch(error => console.error(error));
// });

// const listCalendars = (auth: googleAuth.OAuth2Client) => {
  
//   /**
//    * Lists the next 10 events on the user's primary calendar.
//    *
//    * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//    */
//   const calendar = google.calendar('v3');

//   calendar.calendarList.list({
//     auth: auth as any
//   }, (err, response) => {
//     if (err) {
//       console.log('The API returned an error: ' + err);
//       return;
//     }

//     let calendars = response.items;
//     if (calendars.length == 0) {
//       console.log('No calendars found.');
//     } else {
//       console.log('Calendar list:');
//       for (var i = 0; i < calendars.length; i++) {
//         let calendar = calendars[i];
//         console.log(JSON.stringify(calendar));
//       }
//     }
//   });

// }


//const listEvents = (auth: googleAuth.OAuth2Client) => {
  // calendar.events.list({
  //   auth: auth,    
  //   calendarId: 'primary',
  //   timeMin: (new Date()).toISOString(),
  //   maxResults: 10,
  //   singleEvents: true,
  //   orderBy: 'startTime'
  // }, (err, response) => {
  //   if (err) {
  //     console.log('The API returned an error: ' + err);
  //     return;
  //   }
  //   let events = response.items;
  //   if (events.length == 0) {
  //     console.log('No upcoming events found.');
  //   } else {
  //     console.log('Upcoming 10 events:');
  //     for (var i = 0; i < events.length; i++) {
  //       let event = events[i];
  //       let start = event.start.dateTime || event.start.date;
  //       console.log('%s - %s', start, event.summary);
  //     }
  //   }
  // });
//}