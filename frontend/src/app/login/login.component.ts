import { Component } from "@angular/core";
import { PasswordInputComponent } from "../shared/molecules/atoms/password-input/password-input.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [PasswordInputComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {}