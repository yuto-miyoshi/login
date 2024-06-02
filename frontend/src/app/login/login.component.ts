import { Component } from '@angular/core';
import { PasswordMatchComponent } from './password-match/password-match.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordMatchComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
