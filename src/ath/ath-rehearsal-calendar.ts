import * as google from 'googleapis';
import * as Promise from 'promise';

import { AthEvent } from './ath-event';

export class AthCalendar {
    calendar = google.calendar('v3');
    events: google.calendar.v3.Event[]  = [];

    constructor(public calendarId: string, public authorization) {

    }


    updateEvents(events: AthEvent[]) {
        return new Promise((resolve, reject) => {
            if(events && events.length > 0) {
                //this._deleteEvents()
                this._clearCalendar()
                .then(() => {
                    this._insertEvents(events)
                    .then(eventsInserted => resolve(eventsInserted))
                    .catch(err => reject(err));
                })
                .catch(err => reject(err));
            } else {
                reject("No events given. Not touching the calendar.")
            }
        });

    }

    private _getAllEvents(pageToken?: string) {
        

        return new Promise<google.calendar.v3.Events>((resolve, reject) => { 
            
            this.calendar.events.list({
                    auth: this.authorization,
                    calendarId: this.calendarId,
                    maxResults: 9999999,
                }, (err, events) => {
                    if(err) {
                        console.log('Error getting list of events');                    
                        reject(err);
                    }

                    resolve(events);
                    
                });
        });
    }
    
    private _clearCalendar(retriesLeft=5) {
        console.log(`[${new Date()}] Clearing agenda...`);
        return new Promise((resolve, reject) => {
            this.calendar.calendars.clear({
                auth: this.authorization,
                calendarId: this.calendarId
            }, (err, response) => {
                if (err) {
                    console.log('Error clearing calendar');
                    if(retriesLeft) {
                        console.log(" retrying...");
                        this._clearCalendar(retriesLeft)
                    } else {
                        reject(err);
                    }
                }
                resolve(response);
            });
        });
    }

    private _deleteEvents() {
        console.log(`[${new Date()}] Deleting events...`);
        return new Promise((resolve, reject) => {
            this._getAllEvents()
            .then(events => {
                Promise.all(events.items.map((event)=> this._deleteEvent(event)))
                .then(vals => resolve(vals))
                .catch(err => reject(err));
            })
            .catch(reject);
        });
    }


    private _insertEvents(events: AthEvent[]) {
        console.log(`[${new Date()}] Inserting events...`);
        return new Promise<google.calendar.v3.Event[]>((resolve, reject) => {
            Promise.all(events.map((event)=> this._insertEvent(event)))
            .then(events => resolve(events))
            .catch(err => reject(err));
        });
    }
    
    
    private _insertEvent(event: AthEvent, retriesLeft = 5) {
        
        return new Promise<google.calendar.v3.Event>((resolve, reject) => { 
            this.calendar.events.insert({
            auth: this.authorization,
            calendarId: this.calendarId,
            resource: event.toGoogleEvent(),
            }, (err, response) => {
                //console.log('\nAdding event:\n', JSON.stringify(event))
                if (err) {
                    console.log(`Error inserting event: ${event.what} (${event.startDate.toLocaleDateString()} ${event.startDate.toLocaleTimeString()})`, err.code);
                    if(retriesLeft) {
                        console.log(` retrying event ${event.startDate.toLocaleDateString()} ${event.startDate.toLocaleTimeString()}...`);
                        setTimeout(() => {
                            this._insertEvent(event, retriesLeft)
                        }, 1000);
                    } else {
                        reject(err);
                    }
                }
                resolve(response);
            });
        });
    }

    private _deleteEvent(event: google.calendar.v3.Event, retriesLeft = 5) {

        return new Promise((resolve, reject) => {
            this.calendar.events.delete({
                auth: this.authorization,
                calendarId: this.calendarId,
                eventId: event.id
            }, (err, response) => {
                    if (err) {
                        console.log(`Error deleting event: ${event.id}`, err.code);
                        if(retriesLeft) {
                            console.log(` retrying ${event.id}...`);
                            setTimeout(() => {
                                this._deleteEvent(event, retriesLeft);
                            }, 1000);
                        } else {
                            reject(err);
                        }
                    }
                    resolve(response);            
            });
        });
    }
}