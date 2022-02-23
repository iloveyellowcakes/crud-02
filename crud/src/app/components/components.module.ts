import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    DashboardModule
  ],
  exports: [
    HeaderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
