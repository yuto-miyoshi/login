import { Component, Input } from '@angular/core';
import { PasswordErrorComponent } from '../../shared/molecules/password-error/password-error.component';
import { NewPasswordConfirmationDefaultConst } from './new-password-confirmation-default.const';
import { ErrorDetector } from '../../shared/domain/tool/error-detector';
import {
  PasswordErrorCode as Code,
  passwordErrorDefinitionDictonary as defList,
  generatePasswordMismatchLogic,
} from '../../shared/domain/password/password-error.definition';
import { PasswordData } from '../../shared/application/password-data';
import { JudgeReactionSignature } from '../../shared/application/judge-reaction.signature';

@Component({
  selector: 'app-new-password-confirmation',
  standalone: true,
  imports: [PasswordErrorComponent],
  templateUrl: './new-password-confirmation.component.html',
  styleUrl: './new-password-confirmation.component.scss',
})
export class NewPasswordConfirmationComponent {
  @Input() password: PasswordData =
    NewPasswordConfirmationDefaultConst.password;

  @Input() actionIfError: JudgeReactionSignature =
    NewPasswordConfirmationDefaultConst.actionIfError;

  passwordConfirm: PasswordData =
    NewPasswordConfirmationDefaultConst.passwordConfirm;

  errorDetector = new ErrorDetector(defList, Code.noError);

  errorDetectorConfirm = new ErrorDetector(defList, Code.noError);

  private isErrorPassword = false;

  private isErrorPasswordConfirm = false;

  onJudgeError = () => {
    return this.errorDetector
      .start(this.password.text)
      .filter(Code.noInput)
      .filter(Code.tooShort)
      .filter(Code.tooLong)
      .filter(Code.forbiddenCharacter)
      .filter(Code.atLeastOneAlphOneNumber)
      .stopWithResult();
  };

  onJudgeErrorConfirm = () => {
    return this.errorDetectorConfirm
      .start(this.passwordConfirm.text)
      .filter(Code.noInput)
      .filter(Code.mismatch, generatePasswordMismatchLogic(this.password.text))
      .stopWithResult();
  };

  onActionIfError = (isError: boolean) => {
    this.isErrorPassword = isError;
    this.actionIfError(this.isErrorPassword || this.isErrorPasswordConfirm);
  };

  onActionIfErrorConfirm = (isError: boolean) => {
    this.isErrorPasswordConfirm = isError;
    this.actionIfError(this.isErrorPassword || this.isErrorPasswordConfirm);
  };
}
