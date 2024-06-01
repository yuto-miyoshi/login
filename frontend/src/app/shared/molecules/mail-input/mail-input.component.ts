import { Component, Input } from "@angular/core";
import { StringInputComponent } from "../atoms/string-input/string-input.component";

@Component({
    selector: 'app-mail-input',
    standalone: true,
    imports: [StringInputComponent],
    templateUrl: './mail-input.component.html',
    styleUrl: './mail-input.component.scss',
})
export class MailInputComponent {
    /**
     * Input string
     */
    @Input() str = '';

    /**
     * Focused on Input Form
     */
    isFocused = false;

    /**
     * Action for focus status change
     */
    actionFocusChange = () => {
        this.isFocused = !this.isFocused;
    }
}