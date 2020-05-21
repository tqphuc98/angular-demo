import { DataTableComponent } from './data-table/data-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"home", component: DataTableComponent},
  {path:"add", component: AddstudentsComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
