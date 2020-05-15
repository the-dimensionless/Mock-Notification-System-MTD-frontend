import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';

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

  enableEdit() {
    this.editable = !this.editable;
  }

}
