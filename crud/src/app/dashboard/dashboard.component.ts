import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ModalService } from './../shared/services/modal/modal.service';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { Student } from 'src/app/shared/services/user/student';
import { UserService } from '../shared/services/user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @Input() users!: Student[];

  constructor(
    private userService: UserService,
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

  public update(userId: any) {

    const id = userId
    this.modalService.modalForm('Editar', 'Editar', 'Cancelar', id)

  }

}


