import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
/* import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; */
import * as ClassicEditor from '../../../assets/js/build/ckeditor.js';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { templateJitUrl } from '@angular/compiler';

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

  smsBody: string;

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

  getValues() {

    let customAudience = (<HTMLInputElement>document.getElementById("custom-audience")).value;
    if (customAudience != '') {
      console.log("custom audience : ", customAudience.split(";").toString());
    }

    const values = Array
      .from(document.querySelectorAll('[class="audience"]'))
      .filter((checkbox) => checkbox["checked"])
      .map((checkbox) => checkbox["value"]);
    console.log("values :", values);

    this.data = "<html><head></head><body>" + this.data + "</body></html>";
    console.log(this.data);

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

}
