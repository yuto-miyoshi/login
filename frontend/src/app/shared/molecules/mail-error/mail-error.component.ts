import { Component, Input } from '@angular/core';
import { TextInputComponent } from '../atoms/text-input/text-input.component';
import { StringData } from '../../domain/string-data.interface';
import { MailErrorDefaultConst } from './mail-error-default.const';
import { ActionSignature } from '../../application/action.signature';
import { JudgeReactionSignature } from '../../application/judge-reaction.signature';
import { MailErrorJudgeSignature } from '../../application/error-judge.signature';
import {
  MailErrorCode,
  mailErrorDefinitionDictionary,
} from '../../domain/mail/mail-error.definition';
import { ValueCheck } from '../../value-security/value-check';

@Component({
  selector: 'app-mail-error',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './mail-error.component.html',
  styleUrl: './mail-error.component.scss',
})
export class MailErrorComponent {
  @Input() mail: StringData = MailErrorDefaultConst.mail;

  @Input() title: StringData = MailErrorDefaultConst.title;

  /**
   * Execute when charactor entered
   */
  @Input() actionInput: ActionSignature = MailErrorDefaultConst.actionInput;

  /**
   * Execute when <input> element attracts attentions
   */
  @Input() actionFocus: ActionSignature = MailErrorDefaultConst.actionFocus;

  /**
   * Execute when <input> element dropped from attentions
   */
  @Input() actionBlur: ActionSignature = MailErrorDefaultConst.actionBlur;

  @Input() errorMessage: StringData = MailErrorDefaultConst.errorMessage;

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
