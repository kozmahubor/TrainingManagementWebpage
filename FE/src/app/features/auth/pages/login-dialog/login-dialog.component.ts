import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountType } from '../../types';
import { ApiAuthService } from '../../services/api-auth.service';
import {BuborImg} from "../../../../../assets/images";
import FormLayoutType from "../../../../shared/types/form-layout.type";


@Component({
  selector: 'app-login-dialog',
  styleUrl: './login-dialog.component.scss',
  template: `
    <div class="page-login">
      <app-shared-login-layout-form
        [props]="formProps"
      ></app-shared-login-layout-form>
      <div></div>
    </div>
  `,
})
export class LoginDialogComponent {
  user: AccountType = { password: '', userName: '' };
  layoutBg = BuborImg;
  constructor(
    private apiAuthService: ApiAuthService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  formProps: FormLayoutType = {
    panel: {
      float: 'right',
      title: 'Sign in',
      inputs: [
        {
          type: 'text',
          text: 'Email address',
          value: this.user.userName!,
          name: 'userName',
          onChange: this.onInputChange.bind(this),
        },
        {
          type: 'password',
          text: 'Password',
          value: this.user.password,
          name: 'password',
          onChange: this.onInputChange.bind(this),
        },
      ],
      buttons: [
        {
          display: 'inline-left',
          type: 'filled',
          text: 'Login',
          onClick: this.onLoginClick.bind(this),
        },
        {
          display: 'inline-right',
          type: 'outlined',
          text: 'Sign up',
          onClick: this.onSignUpClick.bind(this),
        },
      ],
      mslogin: 'with hr',
    },
    background: {
      img: this.layoutBg,
      float: 'left',
    },
  };

  onLoginClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.apiAuthService.login(this.user);
  }

  onSignUpClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.router.navigate(['auth/register']);
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement;
    this.user = { ...this.user, [name]: value };
  }
}
