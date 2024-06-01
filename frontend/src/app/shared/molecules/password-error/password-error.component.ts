import { Component, Input } from '@angular/core';
import { PasswordInputComponent } from '../atoms/password-input/password-input.component';
import { ActionSignature } from '../../application-signature/action-signature.interface';
import { PasswordErrorDefaultConst } from './password-error-default.const';

@Component({
  selector: 'app-password-error',
  standalone: true,
  imports: [PasswordInputComponent],
  templateUrl: './password-error.component.html',
  styleUrl: './password-error.component.scss',
})
export class PasswordErrorComponent {
  @Input() password = PasswordErrorDefaultConst.password;

  @Input() errorMessage = PasswordErrorDefaultConst.errorMessage;

  @Input() actionInput: ActionSignature = PasswordErrorDefaultConst.actionInput;

  @Input() actionFocus: ActionSignature = PasswordErrorDefaultConst.actionFocus;

  @Input() actionBlur: ActionSignature = PasswordErrorDefaultConst.actionBlur;
}
