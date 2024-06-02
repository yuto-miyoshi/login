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

  @Input() actionIfError = () => {};

  passwordConfirm: PasswordData =
    NewPasswordConfirmationDefaultConst.passwordConfirm;

  errorDetector = new ErrorDetector(defList, Code.noError);

  errorDetectorConfirm = new ErrorDetector(defList, Code.noError);

  onJudgeError = () => {
    console.log(this.password);
    return this.errorDetector
      .start(this.password.text)
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
}
