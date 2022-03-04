import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ModalService } from './../shared/services/modal/modal.service';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { Student } from 'src/app/shared/services/student/student';
import { StudentService } from '../shared/services/student/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @Input() users!: Student[];

  constructor(
    private userService: StudentService,
    private modalService: ModalService,
    private dialogService: DialogService

  ) { }

  ngOnInit(): void {
    this.userService.refreshUser()
  }

  ngAfterViewInit() {
    this.userService._dados
      .subscribe(data => {
        this.users = data;
      });
  }

  public removeUser(userId: any) {
    this.userService.removeUser(userId.id)
      .subscribe({
        next: () => {
          this.dialogService.alert('Atenção', 'Excluído com sucesso')
          this.userService.refreshUser()
        }
      });
  }

  public register() {
    this.modalService.modalForm('Cadastro', 'Cadastrar', 'Cancelar')
  }

  public update(user: any) {

    const info = user
    this.modalService.modalForm('Editar', 'Editar', 'Cancelar', info)

  }

}


