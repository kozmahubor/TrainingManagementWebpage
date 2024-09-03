import { Component } from '@angular/core';
import { AccountType } from '../../types';
import { ApiAuthService } from '../../services/api-auth.service';

@Component({
  selector: 'app-register-page',
  styleUrl: './register-page.component.scss',
  template: `
    <div class="page-register">
      <h2>SZIA SZIA SZIA SZIA</h2>
    </div>
  `,
})
export class RegisterPageComponent {
  user: AccountType = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  constructor(private apiAuthService: ApiAuthService) {}

  /*formProps: FormLayoutType = {

    panel: {
      float: 'right',
      title: 'Sign Up',
      inputs: [
        {
          type: 'text', text: 'Email address',
          value: this.user.email!, name: 'email',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'UserName',
          value: this.user.userName!, name: 'userName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'First name',
          value: this.user.firstName!, name: 'firstName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'text', text: 'Last name',
          value: this.user.lastName!, name: 'lastName',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'password', text: 'Password',
          value: this.user.password, name: 'password',
          onChange: this.onInputChange.bind(this)
        },
        {
          type: 'password', text: 'Password again',
          value: this.user.passwordAgain!, name: 'passwordAgain',
          onChange: this.onInputChange.bind(this)
        }
      ],
      buttons: [
        {
          display: 'block-normal', type: 'filled', text: 'Sign up',
          onClick: this.onRegisterClick.bind(this)
        }
      ],
      padding: {
        large_after_last: true
      }
    }
  } */

  onRegisterClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.apiAuthService.register(this.user);
  }

  onInputChange(e: Event) {
    const { name, value } = e.target as HTMLInputElement;
    this.user = { ...this.user, [name]: value };
  }
}
