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
  msg: string;

  eventTypeForm: NgForm

  constructor(private service: EventServiceService, private route: Router) {
    this.service.getTest().subscribe(
      data => {
        console.log("data", data);
      },
      err => {
        console.log("error", err);
      }
    )
  }

  ngOnInit(): void {
  }

  onChange(event: ChangeEvent) {

  }

  addEventType() {
    console.log("We are here: event type");
  }

  addSmsType() {
    console.log("We are here: sms type");
  }

  addMailType() {
    console.log("We are here: mail type");
  }

  gotoDashboard() {
    this.route.navigate(["admin/dashboard"]);
  }

  gotoCancel() {
    this.route.navigate(["admin/edits"]);
  }

}
