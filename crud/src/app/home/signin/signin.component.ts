import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { Router } from '@angular/router';
import { SignupService } from './../../shared/services/signup/signup.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private dialogService: DialogService

  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  public login() {


    this.signupService.getUser()
      .subscribe(res => {

        const user = res.find((a: any) => {
          return a.email == this.loginForm.get('email')?.value
            && a.password == this.loginForm.get('password')?.value;
        })

        if (user) {
          this.router.navigate(['dashboard', user.userName])
        }
        else {
          this.dialogService.alert('Atenção', 'Email ou Senha incorretos, por favor tente novamente.')
        }
      });


  }


}
