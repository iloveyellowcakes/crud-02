import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input() field:any;
  @Input() name:any;

  message: string = '';

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'app-message')
  }

  ngOnInit(): void {
  }

  validaCampo(){

    this.message = ''

    if (this.field.errors?.required) {
      this.message = 'Campo obrigatório'
    }
    else if (this.field.errors?.email) {
      this.message = `${this.name || 'Campo'} inválido`
    }
    else if (this.field.errors?.minlength) {
      this.message = `Tamanho mínimo de ${this.name || 'Campo'} é 6 caracteres `
    }

  }
}
