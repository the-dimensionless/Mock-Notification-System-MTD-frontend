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
    this.valid = false;
    this.getData();

    this.userEmail = "trekkingSpock7@gmail.com";
    this.userPhone = "9599758239";
    // load all events without userEmail such as this.
  }

  ngOnInit(): void {
  }

  getData() {
    this.service.getAllActiveEvents().subscribe(
      data => {
        this.events = Object.values(data).filter(i => {
          if (!i["eventEmails"].includes(this.userEmail)) {
            return i;
          }
        })
        console.log(this.events);
        /* this.events = data; */
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
        this.valid = true;
      },
      err => {
        console.log("error", err);
      }
    )
    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  mylist() {
    this.route.navigate(["user/myList"]);
  }

}
