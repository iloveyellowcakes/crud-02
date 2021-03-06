import { StudentService } from 'src/app/shared/services/student/student.service';
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
    private userService: StudentService
  ) {
    this.confirmResult = new Subject();
  }

  ngOnInit(): void {
  }

  close(option?: any) {

    this.userService.refreshUser();
    this.confirmResult.next(option);
    this.modalRef.hide();

  }

}
