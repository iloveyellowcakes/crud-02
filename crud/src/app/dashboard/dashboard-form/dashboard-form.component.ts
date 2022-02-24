import { DialogService } from './../../shared/services/dialog.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, switchMap } from 'rxjs';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',

})
export class DashboardFormComponent implements OnInit {

  formDash!: FormGroup;
  modalRef!: BsModalRef;

  user$!: Observable<User[]>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: BsModalService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {

    this.formDash = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]

    });

  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);

  }

  public closeModal () {
    this.modalRef.hide()
  }

  public register() {

    const newUser = this.formDash.getRawValue() as User;

    this.userService.addUser(newUser)
      .subscribe(() => {

        this.formDash.reset()
        this.closeModal()
        this.dialogService.alert('Atenção', 'cadastro realizado com sucesso', 'ok' )

      })

  }

  public cancel() {
    this.formDash.reset();
  }


}



