import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


}
