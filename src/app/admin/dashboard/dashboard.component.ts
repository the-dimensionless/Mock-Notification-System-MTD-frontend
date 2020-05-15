import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  editable: boolean;

  constructor(private service: EventServiceService) {
    this.editable = true;
  }

  ngOnInit(): void {
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
