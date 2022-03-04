import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { Student } from 'src/app/shared/services/student/student';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html'
})
export class ModalFormComponent implements OnInit {

  msg: string = '';
  title: string = '';
  button: string = '';
  button2: string = '';
  info: any = '';

  confirmResult!: Subject<boolean>;

  formDash!: FormGroup;
  user$!: Observable<Student[]>;

  constructor(

    public modalRef: BsModalRef,
    private userService: StudentService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder

  ) {
    this.confirmResult = new Subject();
  }

  ngOnInit(): void {

    this.formDash = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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

    const newUser = this.formDash.getRawValue() as Student;

    this.userService.addUser(newUser)
      .subscribe(() => {

        this.formDash.reset();
        this.modalRef.hide();
        this.dialogService.alert('Atenção', 'Cadastro realizado com sucesso',);

      });

  }


  public update() {

    const updateUser = this.formDash.getRawValue() as Student;

    this.userService.updateUser(this.info.id, updateUser)
      .subscribe(data => {

        this.close();
        this.dialogService.alert('Atenção', 'Editado com sucesso.', 'ok');

      });

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
