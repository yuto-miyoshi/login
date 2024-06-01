import { Component, Input } from "@angular/core";
import { StringInputDefaultConst } from "./string-input-default.const";

@Component({
    selector: 'app-string-input',
    standalone: true,
    templateUrl: './string-input.component.html',
    styleUrl: './string-input.component.scss',
})
export class StringInputComponent {
    @Input() value = StringInputDefaultConst.value;

    @Input() actionInput: () => void = StringInputDefaultConst.actionInput;

    @Input() actionFocus: () => void = StringInputDefaultConst.actionFocus;

    @Input() actionBlur: () => void = StringInputDefaultConst.actionBlur;

    onInput(): void {
        this.actionInput();
    }

    onFocus(): void {
        this.actionFocus();
    }

    onBlur(): void {
        this.actionBlur();
    }
}