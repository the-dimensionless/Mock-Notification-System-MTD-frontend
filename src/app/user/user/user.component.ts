import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  valid: boolean;
  msg: string;
  events: any;
  userEmail = "sumit.singh@nagarro.com";
  userPhone = "8076592203";

  constructor(private route: Router, private service: EventServiceService) {
    this.valid = true;
    this.getData();
  }

  ngOnInit(): void {
  }

  logout() {

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

  subscribe(eventId) {
    this.service.userSubscribes(eventId, this.userEmail, this.userPhone).subscribe(
      data => {
        console.log("Subscribed");
        this.msg = "You have successfully subscribed to event : " + eventId;
        this.valid = false;
      },
      err => {
        console.log("error", err);
      }
    )

  }

}
