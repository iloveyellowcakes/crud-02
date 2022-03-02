import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { SignupService } from './../../shared/services/signup/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/shared/services/signup/newUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({

      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });

  }

  public signup() {

    const newUser = this.signupForm.getRawValue() as NewUser;

    this.signupService.addUser(newUser)
      .subscribe(() => {
        this.dialogService.alert('Atenção', 'Cadastro realizado com sucesso! Favor efetuar login.');
        this.router.navigate(['']);
      });

  }

}
