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
  console.log(`[${new Date()}] Authorized... start updating calendar!`);
  
  return AthRehearsalSheet.getRows(authorization, config.REHEARSAL_SPREADSHEET_ID);
  //listEvents(authorization);
})
.then(rows => {
    let events: AthEvent[] = []
    if (rows) {
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if(row[0]) {
          let what = row[4] ? row[4] : "Repetitie";
          let where = row[3];
          let program = `Voor de pauze:\n${row[4]}\n\nNa de pauze:\n${row[5]}\n`;
          let seatSetters = row[7] ? row[7] : "";
          let remarks = row[8] ? row[8] : "";

          
          let rehearsalDateStart = Helpers.excelDateToJSDate(typeof(row[1]) === "number" ? row[0] + row[1] : row[0]);

          if(row[1]) {
            if(typeof(row[1]) !== "number") {
              rehearsalDateStart.setHours(rehearsalDateStart.getHours() + Helpers.athHourGuess(row[1]));
            }
          } else {
              rehearsalDateStart.setHours(rehearsalDateStart.getHours() + 20);
          }

          if(!isNaN(rehearsalDateStart.getDate())) {

            // Regular rehearsals are 2.5 hours long.
            let rehearsalDateEnd = new Date(rehearsalDateStart.getTime() + 150*60000);

            if(typeof(row[2]) === "number") {
              rehearsalDateEnd = Helpers.excelDateToJSDate(row[0] + row[2]);
            } else if(row[2]) {
              rehearsalDateStart.setHours(rehearsalDateStart.getHours() + Helpers.athHourGuess(row[2]));  
            }

            // Check if date end is after start. If not, fallback to the date start + 2.5hours
            if(rehearsalDateEnd <= rehearsalDateStart) {
              rehearsalDateEnd = new Date(rehearsalDateStart.getTime() + 150*60000);
            }


            //rehearsalDatumEnd.setHours(rehearsalDatumEnd.getHours() + 2.5);
            events.push(new AthEvent(rehearsalDateStart, what, where, rehearsalDateEnd, program, seatSetters, remarks));
          }

        } //if(row[0]) {

      }

    }

    return athCalendar.updateEvents(events);

})
.then(() => {
  console.log(`[${new Date()}] Succesfully added/updated events!`);
})
.catch(error => console.error(error));
