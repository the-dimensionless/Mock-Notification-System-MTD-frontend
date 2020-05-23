import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditsComponent } from './admin/edits/edits.component';
import { CustomizeComponent } from './admin/customize/customize.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { UserSubscriptionsComponent } from './user/user-subscriptions/user-subscriptions.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/edits', component: EditsComponent },
  { path: 'admin/customize', component: CustomizeComponent },

  { path: 'user', component: UserComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'user/myList', component: UserSubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
