import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../entities/event';

@Injectable()
export class EventServiceService {

  constructor(private http: HttpClient) { }

  getEventTypes() {
    return this.http.get("server/events");
  }

  addNewEventType(eventType) {
    return this.http.post("server/events/addNew/EventType", eventType);
  }
  getAllSmsTemplates() {
    return this.http.get("server/events/smsTemplates/");
  }

  getAllMailTemplates() {
    return this.http.get("server/events/mailTemplates/");
  }

  getUserDetails() {
    return this.http.get("server/user");
  }

  raiseEvent(event: IEvent) {
    return this.http.post("server/events/activeEvents", event);
  }

  getAllActiveEvents() {
    return this.http.get("server/events/activeEvents");
  }

  cancelEventId(id) {
    return this.http.get("server/events/activeEvents/" + id);
  }

  addEventType(event: string) {
    let body = {
      "eventType": event
    };
    return this.http.post("server/events/addNew/EventType", body);
  }

  addMailType(mailBody) {
    let body = {
      "mailBody": mailBody
    };
    return this.http.post("server/events/mailTemplates", body);
  }

  addSmsType(smsBody) {
    let body = {
      "smsBody": smsBody
    };
    return this.http.post("server/events/smsTemplates", body);
  }

  getTest() {
    return this.http.get("server/events/test/fetch/" + 8);
  }

  userSubscribes(eventId, email, phone) {
    return this.http.get("server/events/subscribe/" + eventId + "/" + email + "/" + phone);
  }


}
