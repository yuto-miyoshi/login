import { Component } from '@angular/core';
import { PasswordErrorComponent } from '../shared/molecules/password-error/password-error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
