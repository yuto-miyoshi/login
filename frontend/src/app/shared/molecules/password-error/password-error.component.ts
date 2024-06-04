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

// TODO: REFACTOR wrong comments
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

  @Input() errorMessage: StringData = PasswordErrorDefaultConst.errorMessage;

  onInput = () => {
    this.actionInput();
  };

  onFocus = () => {
    this.actionFocus();
  };

  onBlur = () => {
    this.actionBlur();
  };
}
