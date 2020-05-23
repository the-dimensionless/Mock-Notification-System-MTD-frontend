import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {

  msg: string;
  valid: boolean;
  events: any;

  userEmail: string;
  userPhone: string;

  constructor(private route: Router, private service: EventServiceService) {
    // load all active events that do contain this userEmail
    this.userEmail = "trekkingSpock7@gmail.com";
    this.userPhone = "9599758239";
    this.getData();
  }

  getData() {
    this.service.getAllActiveEvents().subscribe(
      data => {
        this.events = Object.values(data).filter(i => {
          if (i["eventEmails"].includes(this.userEmail)) {
            return i;
          }
        })
      },
      err => {
        console.log("error", err);
      }
    )
  }

  ngOnInit(): void {
  }

  home() {
    this.route.navigate(["user/dashboard"]);
  }

  unsubscribe(eventId) {
    this.service.userUnSubscribes(eventId, this.userEmail, this.userPhone).subscribe(
      data => {
        console.log("Successfully unsubscribed", data);
        this.msg = "You have successfully unsubscribed event with id: " + eventId;
        this.valid = true;
      },
      err => {
        console.log("error", err);
      }
    );
    setTimeout(() => {
      this.getData();
    }, 1000);
  }

}
