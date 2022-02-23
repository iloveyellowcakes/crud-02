import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';



@NgModule({
  declarations: [
    DashboardFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardFormComponent
  ]
})
export class DashboardModule { }
