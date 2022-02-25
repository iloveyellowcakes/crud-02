import { UserService } from 'src/app/core/user/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  msg: string = '';
  title: string = '';
  button: string = '';
  confirmResult!: Subject<boolean>;

  constructor(
    public modalRef: BsModalRef,
    private userService : UserService
  ) {
    this.confirmResult = new Subject()
  }

  ngOnInit(): void {
  }

  close(option?: any) {

    if (this.msg == this.msg) {
      this.userService.refreshUser()
    }
    this.confirmResult.next(option);
    this.modalRef.hide();

  }

}
