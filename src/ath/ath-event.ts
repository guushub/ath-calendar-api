import * as google from 'googleapis';

export class AthEvent {

    constructor(public startDate: Date, public what: string, public where: string, public endDate?: Date,  
                public program?: string, public seatSetters?: string, public remarks?: string ) {

    }

    test() {
        return `${this.startDate.toLocaleDateString()} ${this.startDate.toLocaleTimeString()}: ${this.what}`;
    }

    toGoogleEvent() {
        let event = {
            "summary": this.getSummary(),
            "location": this.getLocation(),
            "description": this.getDescription(),
            "start" : {
                dateTime: this.getGoogleDateTime(this.startDate),
                timeZone: 'Europe/Amsterdam'
            },
            "end": {
                dateTime: this.getGoogleDateTime(this.endDate),
                timeZone: 'Europe/Amsterdam'
            }
        };

        return event;
    }

    getSummary() {
        return this.what;
    }

    getLocation() {
        return this.where;
    }

    getDescription() {
        return `Stoelen: ${this.seatSetters}`;
    }

    getGoogleDateTime(dateIn: Date) {
        //return `${dateIn.toISOString()}-0${dateIn.getTimezoneOffset()/-60}:00`;
        return dateIn.toISOString();
    }

}