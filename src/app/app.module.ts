import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EventServiceService } from './services/event-service.service';
import { EditsComponent } from './admin/edits/edits.component';
import { CustomizeComponent } from './admin/customize/customize.component';;
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { UserSubscriptionsComponent } from './user/user-subscriptions/user-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    EditsComponent,
    CustomizeComponent,
    UserComponent,
    UserDashboardComponent,
    UserSubscriptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
