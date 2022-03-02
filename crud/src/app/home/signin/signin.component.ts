import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../../shared/services/auth/auth.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { Router } from '@angular/router';
import { SignupService } from './../../shared/services/signup/signup.service';
import { StudentService } from 'src/app/shared/services/student/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private authService: AuthService,
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

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.loginForm.valid) {

      this.authService.authenticate(email, password)
        .subscribe({
          next: () => {
            this.router.navigate(['dashboard', email]);
          }
        });

    }


    // this.signupService.getUser()
    //   .subscribe(res => {

    //     const user = res.find((a: any) => {
    //       return a.email == this.loginForm.get('email')?.value
    //         && a.password == this.loginForm.get('password')?.value;
    //     })

    //     if (user) {
    //       this.router.navigate(['dashboard', user.userName])
    //     }
    //     else {
    //       this.dialogService.alert('Atenção', 'Email ou Senha incorretos, por favor tente novamente.')
    //     }
    //   });


  }


}
