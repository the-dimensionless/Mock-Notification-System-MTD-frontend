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
    this.service.getAllActiveEvents().subscribe(
      data => {
        this.events = Object.values(data).filter(i => {
          if (!i["eventEmails"].includes(this.userEmail)) {
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

  }
}
