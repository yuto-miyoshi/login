import { Component, Input } from '@angular/core';
import { PasswordInputComponent } from '../atoms/password-input/password-input.component';
import { ActionSignature } from '../../application/action.signature';
import { PasswordErrorDefaultConst } from './password-error-default.const';
import {
  PasswordErrorCode,
  passwordErrorDefinitionDictonary,
} from '../../domain/password/password-error.definition';
import { ValueCheck } from '../../value-security/value-check';
import { PasswordErrorJudgeSignature } from '../../application/error-judge.signature';
import { PasswordData } from '../../application/password-data';

@Component({
  selector: 'app-password-error',
  standalone: true,
  imports: [PasswordInputComponent],
  templateUrl: './password-error.component.html',
  styleUrl: './password-error.component.scss',
})
export class PasswordErrorComponent {
  /**
   * Input target
   */
  @Input() password: PasswordData = PasswordErrorDefaultConst.password;

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

  /**
   * Execute when value is invalid
   */
  @Input() actionInvalid: ActionSignature =
    PasswordErrorDefaultConst.actionInvalid;

  /**
   * Return error judge
   */
  @Input() errorJudge: PasswordErrorJudgeSignature =
    PasswordErrorDefaultConst.errorJudge;

  /**
   * current error status
   */
  private currentStatus: PasswordErrorCode = PasswordErrorCode.noError;

  get isError(): boolean {
    return this.currentStatus !== PasswordErrorCode.noError;
  }

  get errorMessage(): string {
    const errorDef = passwordErrorDefinitionDictonary.find(
      (def) => def.code === this.currentStatus,
    );

    if (ValueCheck.isUndefined(errorDef)) {
      // TODO: assert
      return PasswordErrorDefaultConst.errorMessage;
    }

    return errorDef.message;
  }

  onInput = () => {
    /**
     * When input, error is always rejudged.
     * Action from the parent component is executed at final.
     */
    this.currentStatus = this.errorJudge();
    this.actionInput();
  };

  onFocus = () => {
    this.actionFocus();
  };

  onBlur = () => {
    this.actionBlur();
  };
}
