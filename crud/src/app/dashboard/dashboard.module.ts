import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  exports: [
    DashboardComponent

  ]
})
export class DashboardModule { }
