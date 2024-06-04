import { Component } from '@angular/core';
import { StringData } from '../shared/domain/string-data.interface';
import { SignupDefaultConst } from './signup-default.const';
import { MailErrorComponent } from '../shared/molecules/mail-error/mail-error.component';
import { ButtonComponent } from '../shared/molecules/atoms/button/button.component';
import { ErrorDetector } from '../shared/domain/tool/error-detector';
import {
  MailErrorCode as MailCode,
  mailErrorDefinitionDictionary as mailDefList,
} from '../shared/domain/mail/mail-error.definition';
import {
  PasswordErrorCode as PasswordCode,
  generatePasswordMismatchLogic,
  passwordErrorDefinitionDictonary as passwordDefList,
} from '../shared/domain/password/password-error.definition';
import { PasswordErrorComponent } from '../shared/molecules/password-error/password-error.component';
import { ValueCheck } from '../shared/value-security/value-check';

const errorDetector = {
  mail: new ErrorDetector(mailDefList, MailCode.noError),
  password: new ErrorDetector(passwordDefList, PasswordCode.noError),
  passwordConfirm: new ErrorDetector(passwordDefList, PasswordCode.noError),
};

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MailErrorComponent, PasswordErrorComponent, ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SingupComponent {
  title: StringData = SignupDefaultConst.title;

  readonly value = {
    mail: SignupDefaultConst.mail,
    password: SignupDefaultConst.password,
    passwordConfirm: SignupDefaultConst.passwordConfirm,
  };

  private readonly status = {
    mail: MailCode.noError as MailCode,
    password: PasswordCode.noError as PasswordCode,
    passwordConfirm: PasswordCode.noError as PasswordCode,
  };

  get errorMessageMail(): StringData {
    let text = '';
    const def = mailDefList.find((def) => def.code === this.status.mail);
    if (!ValueCheck.isUndefined(def)) {
      text = def.message;
    }
    return { text };
  }

  get errorMessagePassword(): StringData {
    let text = '';
    const def = passwordDefList.find(
      (def) => def.code === this.status.password,
    );
    if (!ValueCheck.isUndefined(def)) {
      text = def.message;
    }
    return { text };
  }

  get errorMessagePasswordConfirm(): StringData {
    let text = '';
    const def = passwordDefList.find(
      (def) => def.code === this.status.passwordConfirm,
    );
    if (!ValueCheck.isUndefined(def)) {
      text = def.message;
    }
    return { text };
  }

  get buttonMessage(): StringData {
    return this.isError
      ? SignupDefaultConst.ngButton
      : SignupDefaultConst.okButton;
  }

  get isError(): boolean {
    if (this.status.mail !== MailCode.noError) {
      return true;
    }

    if (this.status.password !== PasswordCode.noError) {
      return true;
    }

    if (this.status.passwordConfirm !== PasswordCode.noError) {
      return true;
    }

    return false;
  }

  onInputMail = () => {
    this.updateStatusMail();
  };

  onInputPassword = () => {
    this.updateStatusPassword();
    if (this.isErrorPassword) {
      return;
    }
    this.updateStatusPasswordConfirm();
  };

  onInputPasswordConfirm = () => {
    this.updateStatusPasswordConfirm();
  };

  onClickButton = () => {
    this.updateStatusMail();
    this.updateStatusPassword();
    this.updateStatusPasswordConfirm();

    if (this.isError) {
      return;
    }

    console.log('entry');
  };

  private get isErrorPassword(): boolean {
    return this.status.password !== PasswordCode.noError;
  }

  private updateStatusMail(): void {
    this.status.mail = errorDetector.mail
      .start(this.value.mail.text)
      .filter(MailCode.noInput)
      .filter(MailCode.tooLong)
      .filter(MailCode.atMarkAbsent)
      .filter(MailCode.invalidDomainPattern)
      .filter(MailCode.shortDomain)
      .filter(MailCode.rangeOutTopLevelDomainLength)
      .filter(MailCode.forbiddenCharacter)
      .stopWithResult();
  }

  private updateStatusPassword(): void {
    this.status.password = errorDetector.password
      .start(this.value.password.text)
      .filter(PasswordCode.noInput)
      .filter(PasswordCode.tooShort)
      .filter(PasswordCode.tooLong)
      .filter(PasswordCode.forbiddenCharacter)
      .filter(PasswordCode.atLeastOneAlphOneNumber)
      .stopWithResult();
  }

  private updateStatusPasswordConfirm(): void {
    this.status.passwordConfirm = errorDetector.passwordConfirm
      .start(this.value.passwordConfirm.text)
      .filter(PasswordCode.noInput)
      .filter(
        PasswordCode.mismatch,
        generatePasswordMismatchLogic(this.value.password.text),
      )
      .stopWithResult();
  }
}
