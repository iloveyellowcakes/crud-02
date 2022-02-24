import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/core/user/user';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {

  @Input() users!: User[];

  constructor(
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.getAllUser();
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
