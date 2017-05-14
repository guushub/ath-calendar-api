import * as google from 'googleapis';
import * as Promise from 'promise';

import { AthEvent } from './ath-event';

export class AthCalendar {
    calendar = google.calendar('v3');

    constructor(public calendarId: string, public authorization) {

    }

    insertEvents(events: AthEvent[]) {
        return new Promise<google.calendar.v3.Event[]>((resolve, reject) => {
            Promise.all(events.map((event)=> this._insertEvent(event)))
            .then(events => resolve(events))
            .catch(err => reject(err));
        });
    }

    updateEvents(events: AthEvent[]) {
        return new Promise((resolve, reject) => {
            this._deleteEvents()
            .then(() => {
                this.insertEvents(events)
                .then(eventsInserted => resolve(eventsInserted))
                .catch(err => reject(err));
            })
            .catch(err => reject(err));
        });

    }

    private _deleteEvents() {
        return new Promise((resolve, reject) => {
            this._getAllEvents()
            .then(events => {
                Promise.all(events.items.map((event)=> this._deleteEvent(event)))
                .then(vals => resolve(vals))
                .catch(err => reject(err));
            });
        });
    }

    private _getAllEvents() {
        return new Promise<google.calendar.v3.Events>((resolve, reject) => { 
            this.calendar.events.list({
                    auth: this.authorization,
                    calendarId: this.calendarId
                }, (err, events) => {
                    if(err) {
                        console.log('Error getting list of events');                    
                        reject(err);
                    }
                    events.items.forEach((event)=> {
                        event.id
                    })

                    resolve(events);
                });
        });
    }
    
    private _insertEvent(event: AthEvent) {
        
        return new Promise<google.calendar.v3.Event>((resolve, reject) => { 
            this.calendar.events.insert({
            auth: this.authorization,
            calendarId: this.calendarId,
            resource: event.toGoogleEvent(),
            }, (err, event) => {
                if (err) {
                    console.log('Error inserting event');
                    reject(err);
                }
                resolve(event);
            });
        });
    }

    private _deleteEvent(event: google.calendar.v3.Event) {

        return new Promise((resolve, reject) => {
            this.calendar.events.delete({
                auth: this.authorization,
                calendarId: this.calendarId,
                eventId: event.id
            }, (err, response) => {
                    if (err) {
                        console.log('Error deleting event');
                        reject(err);
                    }
                    resolve(response);            
            });
        });
    }
}