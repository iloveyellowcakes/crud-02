import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../shared/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

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
          next: () => this.router.navigate(['dashboard', email]),
          error: (err) => console.log(err)
        });
    }
  }

}
