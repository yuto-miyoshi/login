import { Component } from '@angular/core';
import { StringData } from '../shared/domain/string-data.interface';
import { SignupDefaultConst } from './signup-default.const';
import { MailErrorComponent } from '../shared/molecules/mail-error/mail-error.component';
import { NewPasswordConfirmationComponent } from './new-password-confirmation/new-password-confirmation.component';
import { ButtonComponent } from '../shared/molecules/atoms/button/button.component';
import { MailErrorJudgeSignature } from '../shared/application/error-judge.signature';
import { ErrorDetector } from '../shared/domain/tool/error-detector';
import {
  MailErrorCode as Code,
  mailErrorDefinitionDictionary as defList,
} from '../shared/domain/mail/mail-error.definition';
import { JudgeReactionSignature } from '../shared/application/judge-reaction.signature';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MailErrorComponent,
    NewPasswordConfirmationComponent,
    ButtonComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SingupComponent {
  title: StringData = SignupDefaultConst.title;

  mail: StringData = SignupDefaultConst.mail;

  password: StringData = SignupDefaultConst.password;

  private isErrorMail = false;

  private isErrorPassword = false;

  private errorDetectorMail = new ErrorDetector(defList, Code.noError);

  errorJudgeMail: MailErrorJudgeSignature = () => {
    return this.errorDetectorMail
      .start(this.mail.text)
      .filter(Code.noInput)
      .filter(Code.tooLong)
      .filter(Code.atMarkAbsent)
      .filter(Code.invalidDomainPattern)
      .filter(Code.shortDomain)
      .filter(Code.rangeOutTopLevelDomainLength)
      .filter(Code.forbiddenCharacter)
      .stopWithResult();
  };

  onReactJudgeMail: JudgeReactionSignature = (judge: boolean) => {
    this.isErrorMail = judge;
  };

  onErrorPassword: JudgeReactionSignature = (judge: boolean) => {
    this.isErrorPassword = judge;
  };

  get isError(): boolean {
    return this.isErrorMail || this.isErrorPassword;
  }

  get buttonMessage(): StringData {
    return this.isError
      ? SignupDefaultConst.ngButton
      : SignupDefaultConst.okButton;
  }

  onClickButton(): void {
    // TODO miyoshi: implements
  }
}
