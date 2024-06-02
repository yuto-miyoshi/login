import { Component, Input } from '@angular/core';
import { TextInputComponent } from '../atoms/text-input/text-input.component';
import { StringData } from '../../domain/string-data.interface';
import { MailErrorDefaultConst } from './mail-error-default.const';

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

  get errorMessage(): string {
    // TODO: implements
    return 'dummy';
  }
}
