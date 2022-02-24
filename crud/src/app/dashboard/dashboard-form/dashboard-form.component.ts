import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  ) { }

  ngOnInit(): void {


    this.formDash = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]

    });

  }

  // public register() {

  //   const newUser = this.formDash.getRawValue() as User;

  //   this.userService.addUser(newUser)
  //     .subscribe(() => {
  //       this.formDash.reset()
  //     })
  // }
  public register() {

    const newUser = this.formDash.getRawValue() as User;

    this.user$ = this.userService.addUser(newUser)
      .pipe(switchMap(() => this.userService.getUser()));

  }

  public cancel() {
    this.formDash.reset();
  }


}



