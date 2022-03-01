import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MessageComponent

  ]
})
export class ComponentsModule { }
