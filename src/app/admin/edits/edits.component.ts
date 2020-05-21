import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {

  events: any;
  valid: boolean;
  msg: string;

  constructor(private service: EventServiceService, private route: Router) {
    this.valid = true;
    this.getData();
  }

  gotoHome() {
    this.route.navigate(["admin/dashboard"]);
  }

  getData() {
    this.service.getAllActiveEvents().subscribe(
      data => {
        this.events = data;
      },
      err => {
        console.log("error", err);
      }
    );
  }

  ngOnInit(): void {
  }

  cancel(e) {
    this.service.cancelEventId(e).subscribe(
      data => {
        console.log("deleted");
        this.msg = "Event with Id : " + e + " successfully canceled";
        this.valid = false;
      },
      err => {
        console.log("error", err);
      }
    )
    this.getData();
  }

}
