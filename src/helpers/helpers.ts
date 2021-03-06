import * as moment from 'moment-timezone';

export const excelDateToJSDate = (serial: number) => {
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

export const athHourGuess = (inVal: any) => {

    let hour = 20;

    if(typeof(inVal) === "string") {

        switch (inVal.toLowerCase()) {
            case("ochtend"):
            hour = 10;
            break;
            case("middag"):
            hour = 13;
            break;
            case("avond"):
            hour = 18;
            break;
            case("nacht"):
            hour = 0;
            break;
        }
    }

    return hour;

}

export const correctDateForTimezone = (dateToCorrect: Date) => {
        let dateMoment = moment(dateToCorrect);
        let offsetHost = dateToCorrect.getTimezoneOffset();
        let minutesToAdd = 60;
        if( dateMoment.tz("Europe/Amsterdam").isDST() ){
            minutesToAdd = 120;
        }

        let offset = dateToCorrect.getTimezoneOffset() + minutesToAdd;
        dateToCorrect = new Date(dateToCorrect.setTime(dateToCorrect.getTime() - ((offset/60)*60*60*1000)));

        return dateToCorrect;
}