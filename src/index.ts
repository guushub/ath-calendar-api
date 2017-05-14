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

})
.then((events) => {
  console.log(`Succesfully added ${events.length} events!`);
})
.catch(error => console.error(error));
