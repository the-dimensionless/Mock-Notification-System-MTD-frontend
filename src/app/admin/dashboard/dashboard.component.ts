import { Component, OnInit, ViewChild } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
/* import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; */
import * as ClassicEditor from '../../../assets/js/build/ckeditor.js';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { IEvent } from '../../entities/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('binding') editorComponent: CKEditorComponent;

  editable: boolean;
  public Editor = ClassicEditor;
  public data;

  mailTemplates: any;
  smsTemplates: any;
  eventTypes: any;
  userDetails: any;

  smsBody: string;
  event: IEvent = {} as any;

  constructor(private service: EventServiceService) {
    this.editable = true;
    this.data = "<p>Hello World !</p>";
    this.loadDefaults();
    this.smsBody = "Sample Text";
  }

  ngOnInit(): void {
  }

  public onChange({ editor }: ChangeEvent) {
    /* const data = editor.getData();
    console.log(data); */
  }

  getListOfEmails(): string[] {
    let emails = [];
    let customAudience = (<HTMLInputElement>document.getElementById("custom-audience")).value;

    if (customAudience != '') {
      customAudience.split(";").forEach(i => emails.push(i));
    }

    const values = Array
      .from(document.querySelectorAll('[class="audience"]'))
      .filter((checkbox) => checkbox["checked"])
      .map((checkbox) => checkbox["value"]);

    values.forEach(id => {
      emails.push(
        this.userDetails.filter(function (item) {
          if (item.userId == id) {
            return item.userEmail;
          }
        })[0]["userEmail"]
      )
    })
    return emails;
  }

  getListOfPhones(): string[] {
    let phones = [];

    const values = Array
      .from(document.querySelectorAll('[class="audience"]'))
      .filter((checkbox) => checkbox["checked"])
      .map((checkbox) => checkbox["value"]);

    values.forEach(id => {
      phones.push(
        this.userDetails.filter(function (item) {
          if (item.userId == id) {
            return item.userEmail;
          }
        })[0]["userPhone"]
      )
    })
    return phones;
  }

  getValues() {

    this.event.eventType = (<HTMLInputElement>document.getElementById("event-type")).value;
    this.event.eventName = (<HTMLInputElement>document.getElementById("event-name")).value;
    this.event.eventDescription = (<HTMLInputElement>document.getElementById("event-description")).value;

    this.event.eventEmails = this.getListOfEmails();
    this.event.eventPhones = this.getListOfPhones();
    this.data = "<html><head></head><body>" + this.editorComponent.editorInstance.getData(); + "</body></html>";
    this.event.eventMailBody = this.data;
    this.event.eventSmsBody = (<HTMLInputElement>document.getElementById("smsBody")).value;

    const modes = Array
      .from(document.querySelectorAll('[class="mode"]'))
      .filter((checkbox) => checkbox["checked"])
      .map((checkbox) => checkbox["value"]);
    console.log("modes :", modes);

    if (!modes.includes("Mail")) {
      this.event.eventEmails = null;
      this.event.eventMailBody = null;
    }
    if (!modes.includes("Sms")) {
      this.event.eventPhones = null;
      this.event.eventSmsBody = null;
    }
    console.log(this.event);
    this.log();
  }

  enableEdit() {
    this.editable = !this.editable;
  }

  loadDefaults() {

    this.service.getEventTypes().subscribe(
      res => {
        this.eventTypes = res;
      },
      err => {
        console.log("error", err);
      }
    )

    this.service.getAllSmsTemplates().subscribe(
      res => {
        this.smsTemplates = res;
      },
      err => {
        console.log("error", err);
      }
    )

    this.service.getAllMailTemplates().subscribe(
      res => {
        this.mailTemplates = res;
      },
      err => {
        console.log("error", err);
      }
    )

    this.service.getUserDetails().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log("error", err);
      }
    )
  }

  etSelected(event) {
    this.data = this.mailTemplates.filter(function (item) {
      if (item.templateId == event.target.value) {
        return item.mailBody;
      }
    })["0"]["mailBody"];

    this.editorComponent.editorInstance.setData(this.data);
  }

  stSelected(event) {
    this.smsBody = this.smsTemplates.filter(function (item) {
      if (item.templateId == event.target.value) {
        return item.smsBody;
      }
    })["0"]["smsBody"];
  }

  log() {
    this.event.eventStatus = true;
    this.event.eventDateTime = (<HTMLInputElement>document.getElementById("eventDate")).value;

    this.service.raiseEvent(this.event).subscribe(
      data => {
        console.log("Event rasied", data)
      },
      err => {
        console.log("error", err);
      }
    )
  }

}
