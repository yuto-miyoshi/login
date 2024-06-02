import { Component, Input } from '@angular/core';
import { PasswordErrorComponent } from '../../shared/molecules/password-error/password-error.component';
import { NewPasswordConfirmationDefaultConst } from './new-password-confirmation-default.const';

@Component({
  selector: 'app-new-password-confirmation',
  standalone: true,
  imports: [PasswordErrorComponent],
  templateUrl: './new-password-confirmation.component.html',
  styleUrl: './new-password-confirmation.component.scss',
})
export class NewPasswordConfirmationComponent {
  @Input() password = NewPasswordConfirmationDefaultConst.password;

  passwordConfirm = NewPasswordConfirmationDefaultConst.password;
}
