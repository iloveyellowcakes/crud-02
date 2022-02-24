import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    DashboardFormComponent,
    RegisterModalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  exports: [
    DashboardFormComponent,
    RegisterModalComponent,
    DashboardComponent

  ]
})
export class DashboardModule { }
