import { Component } from "@angular/core";
import { ButtonComponent } from "../shared/button/button.component";
import { StringInputComponent } from "../shared/string-input/string-input.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonComponent, StringInputComponent],
    providers: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {}