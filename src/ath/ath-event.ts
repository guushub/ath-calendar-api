import * as google from 'googleapis';

export class AthEvent {

    constructor(public startDate: Date, public what: string, public where: string, public endDate?: Date,  
                public program?: string, public seatSetters?: string, public remarks?: string, public allDayEvent?: boolean ) {

    }

    test() {
        return `${this.startDate.toLocaleDateString()} ${this.startDate.toLocaleTimeString()}: ${this.what}`;
    }

    toGoogleEvent() {
        let event = {
            "summary": this.getSummary(),
            "location": this.getLocation(),
            "description": this.getDescription()
        };

        if(this.allDayEvent) {
            event["start"] = {
                date: this.getGoogleDayEventDateTime(this.startDate),
                timeZone: 'Europe/Amsterdam'
            }

            event["end"] = {
                date: this.getGoogleDayEventDateTime(this.endDate),
                timeZone: 'Europe/Amsterdam'
            }

        } else {
            event["start"] = {
                dateTime: this.getGoogleDateTime(this.startDate),
                timeZone: 'Europe/Amsterdam'
            }

            event["end"] = {
                dateTime: this.getGoogleDateTime(this.endDate),
                timeZone: 'Europe/Amsterdam'
            }
        }

        return event;
    }

    getSummary() {
        return this.seatSetters ? `${this.what}   (Stoelen: ${this.seatSetters})` : this.what;
    }

    getLocation() {
        return this.where;
    }

    getDescription() {
        let description = this.program ? `${this.program}\n\n` : "";
        if(this.seatSetters) {
            description = `${description}Stoelen: ${this.seatSetters}\n\n`;
        }

        if(this.remarks) {
            description = `${description}${this.remarks}\n\n`;
        }
        return description;
    }

    getGoogleDateTime(dateIn: Date) {
        //return `${dateIn.toISOString()}-0${dateIn.getTimezoneOffset()/-60}:00`;
        return dateIn.toISOString();
    }

    getGoogleDayEventDateTime(dateIn: Date) {
        let month = '' + (dateIn.getMonth() + 1);
        let day = '' + dateIn.getDate();
        let year = dateIn.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

}