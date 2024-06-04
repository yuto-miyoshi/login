import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/molecules/atoms/button/button.component';
import { StringData } from '../shared/domain/string-data.interface';
import { LoginDefaultConst } from './login-default.const';
import {
  MailErrorCode as MailCode,
  mailErrorDefinitionDictionary as mailDefList,
} from '../shared/domain/mail/mail-error.definition';
import {
  PasswordErrorCode as PasswordCode,
  passwordErrorDefinitionDictonary as passwordDefList,
} from '../shared/domain/password/password-error.definition';
import { ErrorDetector } from '../shared/domain/tool/error-detector';
import { MailErrorComponent } from '../shared/molecules/mail-error/mail-error.component';
import { PasswordErrorComponent } from '../shared/molecules/password-error/password-error.component';
import { ValueCheck } from '../shared/value-security/value-check';

const errorDetector = {
  mail: new ErrorDetector(mailDefList, MailCode.noError),
  password: new ErrorDetector(passwordDefList, PasswordCode.noError),
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MailErrorComponent, PasswordErrorComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly title: StringData = LoginDefaultConst.title;

  readonly mailMessage: StringData = LoginDefaultConst.mailMessage;

  readonly passwordMessage: StringData = LoginDefaultConst.passwordMessage;

  mail: StringData = LoginDefaultConst.mail;

  password: StringData = LoginDefaultConst.password;

  private status = {
    mail: MailCode.noError as MailCode,
    password: PasswordCode.noError as PasswordCode,
  };

  get isError(): boolean {
    if (this.status.mail !== MailCode.noError) {
      return true;
    }

    if (this.status.password !== PasswordCode.noError) {
      return true;
    }

    return false;
  }

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
    const def = mailDefList.find((def) => def.code === this.status.password);
    if (!ValueCheck.isUndefined(def)) {
      text = def.message;
    }
    return { text };
  }

  get buttonMessage(): StringData {
    return this.isError
      ? LoginDefaultConst.ngMessage
      : LoginDefaultConst.okMessage;
  }

  onInputMail = () => {
    this.updateStatusMail();
  };

  onInputPassword = () => {
    this.updateStatusPassword();
  };

  onClickButton = () => {
    this.updateStatusMail();
    this.updateStatusPassword();

    if (this.isError) {
      return;
    }

    throw new Error('b');
  };

  private updateStatusMail(): void {
    this.status.mail = errorDetector.mail
      .start(this.mail.text)
      .filter(MailCode.noInput)
      .stopWithResult();
  }

  private updateStatusPassword(): void {
    this.status.password = errorDetector.password
      .start(this.password.text)
      .filter(PasswordCode.noInput)
      .stopWithResult();
  }
}
