import { Component, Input } from '@angular/core';
import { PasswordInputComponent } from '../atoms/password-input/password-input.component';
import { ActionSignature } from '../../application-signature/action-signature.interface';
import { PasswordErrorDefaultConst } from './password-error-default.const';
import { StringValidationSignature } from '../../application-signature/string-validation-signature.interface';

@Component({
  selector: 'app-password-error',
  standalone: true,
  imports: [PasswordInputComponent],
  templateUrl: './password-error.component.html',
  styleUrl: './password-error.component.scss',
})
export class PasswordErrorComponent {
  @Input() password = PasswordErrorDefaultConst.password;

  @Input() actionInput: ActionSignature = PasswordErrorDefaultConst.actionInput;

  @Input() actionFocus: ActionSignature = PasswordErrorDefaultConst.actionFocus;

  @Input() actionBlur: ActionSignature = PasswordErrorDefaultConst.actionBlur;

  @Input() actionInvalid: ActionSignature =
    PasswordErrorDefaultConst.actionInvalid;

  @Input() validationAdditional: StringValidationSignature =
    PasswordErrorDefaultConst.validationAdditional;

  errorMessage = PasswordErrorDefaultConst.errorMessage;

  /**
   * When input, error is always rejudged.
   * After that, additional Validation from the parent component is executed.
   * Action from the parent component is executed at final.
   */
  onInput = () => {};

  onFocus = () => {
    this.actionFocus();
  };

  onBlur = () => {
    this.actionBlur();
  };

  /**
   * Error is judged here on the component
   * perfectly to sync with judge and the message.
   */
  get isError(): boolean {
    return this.errorMessage.length > 0;
  }
}
