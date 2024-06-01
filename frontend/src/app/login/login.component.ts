import { Component } from "@angular/core";
import { TextInputComponent } from "../shared/molecules/atoms/text-input/text-input.component";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [TextInputComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {}