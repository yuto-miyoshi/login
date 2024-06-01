import { Component } from "@angular/core";
import { StringInputDirective } from "../atoms/string-input/string-input.directive";

@Component({
    selector: 'app-mail-input',
    standalone: true,
    imports: [StringInputDirective],
    templateUrl: './mail-input.component.html',
    styleUrl: './mail-input.component.scss',
})
export class MailInputComponent {
    /**
     * Focused on Input Form
     */
    isFocused = false;

    /**
     * Action for focus status change
     */
    actionFocusChange = () => {
        this.isFocused = !this.isFocused;
        console.log(this.isFocused)
    }
}