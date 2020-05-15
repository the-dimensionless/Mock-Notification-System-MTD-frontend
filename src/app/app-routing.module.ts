import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
