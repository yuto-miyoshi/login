import { Component, Input } from '@angular/core';
import { PasswordInputComponent } from '../atoms/password-input/password-input.component';
import { ActionSignature } from '../../application/action.interface';
import { PasswordErrorDefaultConst } from './password-error-default.const';
import { StringValidationSignature } from '../../application/string-validation.interface';
import {
  PasswordErrorCode,
  passwordErrorDefinitionDictonary,
} from '../../domain/password/password-error.definition';
import { ValueCheck } from '../../value-security/value-check';

@Component({
  selector: 'app-password-error',
  standalone: true,
  imports: [PasswordInputComponent],
  templateUrl: './password-error.component.html',
  styleUrl: './password-error.component.scss',
})
export class PasswordErrorComponent {
  @Input() password = PasswordErrorDefaultConst.password;

  /**
   * Execute when charactor entered
   */
  @Input() actionInput: ActionSignature = PasswordErrorDefaultConst.actionInput;

  /**
   * Execute when <input> element attracts attentions
   */
  @Input() actionFocus: ActionSignature = PasswordErrorDefaultConst.actionFocus;

  /**
   * Execute when <input> element dropped from attentions
   */
  @Input() actionBlur: ActionSignature = PasswordErrorDefaultConst.actionBlur;

  @Input() actionInvalid: ActionSignature =
    PasswordErrorDefaultConst.actionInvalid;

  @Input() validationFlow: StringValidationSignature =
    PasswordErrorDefaultConst.validationFlow;

  errorCode = PasswordErrorCode.noError;

  /**
   * When input, error is always rejudged.
   * Action from the parent component is executed at final.
   */
  onInput = () => {};

  onFocus = () => {
    this.actionFocus();
  };

  onBlur = () => {
    this.actionBlur();
  };

  // TODO: use enum
  get isError(): boolean {
    return this.errorCode !== PasswordErrorCode.noError;
  }

  // TODO: use dictionary
  get errorMessage(): string {
    const errorDef = passwordErrorDefinitionDictonary.find(
      (def) => def.code === this.errorCode,
    );

    if (ValueCheck.isUndefined(errorDef)) {
      // TODO: assert
      return PasswordErrorDefaultConst.errorMessage;
    }

    return errorDef.message;
  }
}
