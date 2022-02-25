import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Observable } from 'rxjs';

import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  msg: string = '';
  title: string = '';
  button: string = '';
  button2: string = '';
  info: any = '';

  confirmResult!: Subject<boolean>;

  formDash!: FormGroup;
  user$!: Observable<User[]>;

  constructor(

    public modalRef: BsModalRef,
    private userService: UserService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder

  ) {
    this.confirmResult = new Subject();
  }

  ngOnInit(): void {

    this.formDash = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]

    });

    setTimeout(() => {
      this.fillFields();
    }, 0);

  }

  close(option?: any) {

    if (this.msg == 'cadastro realizado com sucesso') {
      this.userService.refreshUser();
    }
    this.confirmResult.next(option);
    this.modalRef.hide();

  }

  public registerOrUpdate() {

    if (this.button == 'Cadastrar') {
      this.register();
    } else if (this.button == 'Editar') {
      this.update();
    }

  }

  public register() {

    const newUser = this.formDash.getRawValue() as User;

    this.userService.addUser(newUser)
      .subscribe(() => {

        this.formDash.reset();
        this.modalRef.hide();
        this.dialogService.alert('Atenção', 'Cadastro realizado com sucesso', 'ok');

      });

  }

  public update() {

    const updateUser = this.formDash.getRawValue() as User;

    this.userService.updateUser(this.info.id, updateUser)
    .subscribe(data => {

      this.close()
      this.dialogService.alert('Atenção', 'Editado', 'ok');

    })

  }

  fillFields() {

    if (this.button == 'Editar') {
      this.formDash.get('fullName')?.setValue(this.info.fullName);
      this.formDash.get('email')?.setValue(this.info.email);
      this.formDash.get('age')?.setValue(this.info.age);
    }

  }

  public cancel() {
    this.formDash.reset();
  }

}
