import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

import { User } from 'src/app/core/user/user';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit, AfterViewInit{

  @Input() users!: User[];

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  ngAfterViewInit() {
    this.userService._dados
      .subscribe(data => {
        this.users = data
      });
    console.log(this.users);
  }

  getAllUser() {
    this.userService.getUser()
      .subscribe((res) => this.users = res);
  }

  removeUser(userId: any) {
    this.userService.removeUser(userId.id)
      .subscribe({
        next: () => {
          this.getAllUser();
        }
      });
  }

}
