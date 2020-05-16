import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  editable: boolean;
  public Editor = ClassicEditor;

  constructor(private service: EventServiceService) {
    this.editable = true;
  }

  ngOnInit(): void {
  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
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

  }

  enableEdit() {
    this.editable = !this.editable;
  }

}
