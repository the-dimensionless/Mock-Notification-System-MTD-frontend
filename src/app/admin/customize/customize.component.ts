import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '../../../assets/js/build/ckeditor.js';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { NgForm } from '@angular/forms';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  @ViewChild('binding') editorComponent: CKEditorComponent;

  editable: boolean;
  public Editor = ClassicEditor;
  public data;

  valid: boolean;
  eventValid: boolean;
  mailValid: boolean;
  smsValid: boolean;
  msg: string;

  eventTypeForm: NgForm

  constructor(private service: EventServiceService, private route: Router) {
    this.eventValid = this.mailValid = this.smsValid = false;
    /*   this.service.getTest().subscribe(
        data => {
          console.log("data", data);
          this.editorComponent.editorInstance.setData(data["eventMailBody"]);
        },
        err => {
          console.log("error", err);
        }
      ) */
  }

  ngOnInit(): void {
  }

  onChange(event: ChangeEvent) {

  }

  addEventType() {
    console.log("We are here: event type");
    let body = {
      "eventType": (<HTMLInputElement>document.getElementById("eventType")).value
    }
    this.service.addNewEventType(body).subscribe(
      data => {
        this.eventValid = true;
      },
      err => {
        console.log("error", err);
      }
    )
  }

  addSmsType() {
    console.log("We are here: sms type");
    let body = {
      "templateDescription": (<HTMLInputElement>document.getElementById("smsDescription")).value,
      "smsBody": (<HTMLInputElement>document.getElementById("smsText")).value
    };
    console.log(body);
    this.service.addSmsType(body).subscribe(
      data => {
        console.log("sms type added", data);
        this.smsValid = true;
      },
      err => {
        console.log("error", err);
      }
    )
  }

  addMailType() {
    console.log("We are here: mail type");
    let body = {
      "templateDescription": "<html><head></head><body>" +
        (<HTMLInputElement>document.getElementById("mailDescription")).value + "</body></html>",
      "mailBody": this.editorComponent.editorInstance.getData()
    };
    console.log(body);
    this.service.addMailType(body).subscribe(
      data => {
        console.log("mail type added", data);
        this.mailValid = true;
      },
      err => {
        console.log("error", err);
      }
    )
  }

  gotoDashboard() {
    this.route.navigate(["admin/dashboard"]);
  }

  gotoCancel() {
    this.route.navigate(["admin/edits"]);
  }

}
