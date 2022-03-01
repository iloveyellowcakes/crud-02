import { ModalFormComponent } from '../../modals/modal-form/modal-form.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  modalRef: BsModalRef = new BsModalRef;
  defaultOptions: ModalOptions = new ModalOptions;

  constructor(private bsModalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.bsModalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }


  modalForm(title: string, button?: string, button2?: string, info?: any) {

    this.defaultOptions = {

      backdrop: 'static',
      keyboard: false,
      class: 'modal-dialog-centered modal-md'

    };

    this.modalRef = this.bsModalService.show(ModalFormComponent, this.defaultOptions);
    this.modalRef.content.title = title;
    this.modalRef.content.button = button;
    this.modalRef.content.button2 = button2;
    this.modalRef.content.info = info;


    return (this.modalRef.content as ModalFormComponent).confirmResult;

  }

}
