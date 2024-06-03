import { Component } from '@angular/core';
import { StringData } from '../shared/domain/string-data.interface';
import { SignupDefaultConst } from './signup-default.const';
import { MailErrorComponent } from '../shared/molecules/mail-error/mail-error.component';
import { NewPasswordConfirmationComponent } from './new-password-confirmation/new-password-confirmation.component';
import { ButtonComponent } from '../shared/molecules/atoms/button/button.component';

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
  readonly title: StringData = SignupDefaultConst.title;
}
