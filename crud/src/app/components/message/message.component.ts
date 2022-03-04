import { AbstractControl } from '@angular/forms';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {

  @Input() field!: AbstractControl | undefined;
  @Input() name: string = 'Campo';

  msgError?: string;

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'app-message');
  }

  validateField(field: any) {

    this.msgError = '';

    if (field.errors?.required && field.touched) {
      this.msgError = `${this.name || 'Campo'} obrigatório`;
    }
    else if (field.errors?.email && field.touched) {
      this.msgError = `${this.name || 'Campo'} invalido`;
    }
    else if (field.errors?.minlength && field.touched) {
      this.msgError = `Mínimo ${field.errors?.minlength.requiredLength} caracteres`;
    }
    else if (field.errors?.maxlength && field.touched) {
      this.msgError = `Mínimo ${field.errors?.maxlength.requiredLength} caracteres`;
    }

    return this.msgError != '';

  }

}
