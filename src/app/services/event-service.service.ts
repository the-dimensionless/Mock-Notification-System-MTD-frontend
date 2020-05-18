import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventServiceService {

  constructor(private http: HttpClient) { }

  getAllSmsTemplates() {
    return this.http.get("server/events/smsTemplates/");
  }

  getAllMailTemplates() {
    return this.http.get("server/events/mailTemplates/");
  }


}
