import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-string-input',
    standalone: true,
    imports: [],
    templateUrl: './string-input.component.html',
    styleUrl: './string-input.component.scss'
})
export class StringInputComponent {
    @Input() value = StringInputDefaultConst.value;

    @Input() actionInput: () => void = StringInputDefaultConst.actionInput;

    @Input() styleWidth = StringInputDefaultConst.styleWidth;

    @Input() styleHeight = StringInputDefaultConst.styleHeight;

    onInput(): void {
        this.actionInput();
    }
}