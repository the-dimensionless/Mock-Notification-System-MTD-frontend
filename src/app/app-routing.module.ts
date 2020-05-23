import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditsComponent } from './admin/edits/edits.component';
import { CustomizeComponent } from './admin/customize/customize.component';
import { UserComponent } from './user/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/edits', component: EditsComponent },
  { path: 'admin/customize', component: CustomizeComponent },

  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
