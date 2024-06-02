import { Component } from '@angular/core';
import { PasswordErrorComponent } from '../../shared/molecules/password-error/password-error.component';

@Component({
  selector: 'app-password-match',
  standalone: true,
  imports: [PasswordErrorComponent],
  templateUrl: './password-match.component.html',
  styleUrl: './password-match.component.scss',
})
export class PasswordMatchComponent {}
