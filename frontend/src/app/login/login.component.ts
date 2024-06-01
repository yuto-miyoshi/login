import { Component } from "@angular/core";
import { MailInputComponent } from "../shared/molecules/mail-input/mail-input.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [MailInputComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {}