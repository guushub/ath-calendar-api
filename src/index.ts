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
                            'sheets.googleapis.com-ath-calendar-app.json', 'client_secret-ath-calendar-app.json');

let counter = 0;

http.createServer((request, response) => {
   // Dummy server
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');

Config.load("./assets/config.json")
.then((configLoaded) => {
  // Loaded the configuration, set it to the global scope and load the client secret file
  config = configLoaded;
  runApp();
})


const runApp = () => {
  counter += 1;
  console.log(`[${new Date()}] Start updating calendar (#${counter})...`);
  authApp.authorize()  
  .then(authorization => {
    console.log(`[${new Date()}] Authorized...`);    
    athCalendar = new AthCalendar(config.REHEARSAL_CALENDAR_ID, authorization);
    return AthRehearsalSheet.getRows(authorization, config.REHEARSAL_SPREADSHEET_ID);
  })
  .then(rows => {
    let events: AthEvent[] = []
    if (rows) {
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if(row[0]) {
          let what: string = row[4] ? row[4] : "Repetitie";
          let where = row[3];
          let program = row[5] ? `Voor de pauze:\n${row[5]}` : "";
          program = `${program}${row[6] ? `\n\nNa de pauze:\n${row[6]}` : ""}`;

          let seatSetters = row[7] ? row[7] : "";
          let remarks = row[8] ? row[8] : "";
          let isDayEvent = false;

          let rehearsalDateStart = Helpers.excelDateToJSDate(typeof(row[1]) === "number" ? row[0] + row[1] : row[0]);

          if(row[1]) {
            if(typeof(row[1]) !== "number") {
              isDayEvent = true;
              remarks = remarks ? `${remarks}\n\n${row[1]}` : row[1];
            }
              //rehearsalDateStart.setHours(rehearsalDateStart.getHours() + Helpers.athHourGuess(row[1]));
          } else {
              if(rehearsalDateStart.getDay() === 3 && what.toLocaleLowerCase().replace(" ", "") === "repetitie") {
                // We can assume it's a regular rehearsal
                rehearsalDateStart.setHours(rehearsalDateStart.getHours() + 20);
              } else {
                isDayEvent = true;
              }
              //rehearsalDateStart.setHours(rehearsalDateStart.getHours() + 20);
          }

          if(!isNaN(rehearsalDateStart.getDate())) {

            // Regular rehearsals are 2.5 hours long.
            let rehearsalDateEnd = new Date(rehearsalDateStart.getTime() + 150*60000);
            
            if(!isDayEvent) {

              if(typeof(row[2]) === "number") {
                rehearsalDateEnd = Helpers.excelDateToJSDate(row[0] + row[2]);
              } 
              // else if(row[2]) {
              //   rehearsalDateStart.setHours(rehearsalDateStart.getHours() + Helpers.athHourGuess(row[2]));  
              // }

              // Check if date end is after start. If not, fallback to the date start + 2.5hours
              if(rehearsalDateEnd <= rehearsalDateStart) {
                rehearsalDateEnd = new Date(rehearsalDateStart.getTime() + 150*60000);
              }

              events.push(new AthEvent(rehearsalDateStart, what, where, rehearsalDateEnd, program, seatSetters, remarks, false));
              
            } else {
              // End date is one day later.
              rehearsalDateEnd = new Date(rehearsalDateStart.getTime() + 24*60*60000);
              events.push(new AthEvent(rehearsalDateStart, what, where, rehearsalDateEnd, program, seatSetters, remarks, true));
            }


            //rehearsalDatumEnd.setHours(rehearsalDatumEnd.getHours() + 2.5);
          }

        } //if(row[0]) {

      }

    }

    return athCalendar.updateEvents(events);

  })
  .then(() => {
    console.log(`[${new Date()}] Succesfully added/updated events!`);
    setTimeout(() => runApp(), 15*60*1000);
  })
  .catch(error => { 
    console.log("Global error...");
    console.error(error);
    setTimeout(() => runApp(), 15*60*1000);    
  });
}