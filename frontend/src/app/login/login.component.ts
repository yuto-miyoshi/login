import { Component } from '@angular/core';
import { NewPasswordConfirmationComponent } from '../signup/new-password-confirmation/new-password-confirmation.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NewPasswordConfirmationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
