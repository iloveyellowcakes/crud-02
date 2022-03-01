import { Component,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input() message = 'Mensagem de erro'


  constructor() {
  }

  ngOnInit(): void {
  }


}
