import { ModalService } from './../../shared/services/modal/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',

})
export class DashboardFormComponent implements OnInit {

  formDash!: FormGroup;
  user$!: Observable<User[]>;

  constructor(

    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogService: DialogService,
    private modalService: ModalService

  ) { }

  ngOnInit(): void {

    this.formDash = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]

    });

  }

  public openModal(template: any) {
    this.modalService.openModal(template);
  }

  public closeModal() {
    this.modalService.closeModal();
  }

  public register() {

    const newUser = this.formDash.getRawValue() as User;

    this.userService.addUser(newUser)
      .subscribe(() => {

        this.formDash.reset();
        this.modalService.closeModal();
        this.dialogService.alert('Atenção', 'cadastro realizado com sucesso', 'ok');

      });

  }

  public cancel() {
    this.formDash.reset();
  }


}



