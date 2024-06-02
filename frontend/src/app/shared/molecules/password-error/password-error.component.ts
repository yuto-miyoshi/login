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
import { StringData } from '../../domain/string-data.interface';
import { JudgeReactionSignature } from '../../application/judge-reaction.signature';

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
  @Input() password: StringData = PasswordErrorDefaultConst.password;

  @Input() title: StringData = PasswordErrorDefaultConst.title;

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
   * Execute when value is error
   */
  @Input() actionIfError: JudgeReactionSignature =
    PasswordErrorDefaultConst.actionIfError;

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
     * first of all, error is judged.
     * "actionIfError" is executed after judge.
     * "actionInput" is executed at final.
     */
    this.currentStatus = this.errorJudge();
    this.actionIfError(this.isError);
    this.actionInput();
  };

  onFocus = () => {
    this.actionFocus();
  };

  onBlur = () => {
    this.actionBlur();
  };
}
