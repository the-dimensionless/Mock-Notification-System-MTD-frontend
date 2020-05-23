import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit {

  constructor(private route: Router, private service: EventServiceService) {
    // load all active events that donot contain this userEmail
  }

  ngOnInit(): void {
  }

  home() {
    this.route.navigate(["user/dashboard"]);
  }
}
