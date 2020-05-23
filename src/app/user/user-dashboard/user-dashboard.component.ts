import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  msg: string;
  valid: boolean;
  events: any;

  userEmail: string;
  userPhone: string;

  constructor(private route: Router, private service: EventServiceService) {
    this.valid = true;
    this.getData();

    this.userEmail = "sumit.sssingh.singh45@gmail.com";
    this.userPhone = "8076592203";
  }

  ngOnInit(): void {
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
        this.msg = "You have subscribed to event with Id:" + eventId;
        this.valid = false;
      },
      err => {
        console.log("error", err);
      }
    )
  }

  mylist() {
    this.route.navigate(["user/myList"]);
  }

}
