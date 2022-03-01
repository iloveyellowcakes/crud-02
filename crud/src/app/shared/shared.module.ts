import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ModalFormComponent } from './modals/modal-form/modal-form.component';
import { AlertComponent } from './modals/alert/alert.component';


@NgModule({
  declarations: [
    AlertComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class SharedModule { }
