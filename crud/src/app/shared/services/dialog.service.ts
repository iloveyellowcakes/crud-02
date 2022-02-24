import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertComponent } from '../errors/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  bsModalRef: BsModalRef = new BsModalRef;
  defaultOptions: ModalOptions = new ModalOptions;


  constructor(
    public modalService: BsModalService
  ) { }

  alert(title: string, msg: any, button?: string) {

    this.defaultOptions = {

      backdrop: 'static',
      keyboard: false,
      class: 'modal-dialog-centered modal-sm'

    };

    this.bsModalRef = this.modalService.show(AlertComponent, this.defaultOptions);
    this.bsModalRef.content.title = title
    this.bsModalRef.content.msg = msg
    this.bsModalRef.content.button = button

    return(this.bsModalRef.content as AlertComponent).confirmResult

  }




}
