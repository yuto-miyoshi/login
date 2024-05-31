import { Directive, Input } from "@angular/core";
import { StringInputDefaultConst } from "./string-input-default.const";

@Directive({
    selector: '[app-string-input]',
    standalone: true,
})
export class StringInputDirective {
    @Input() value = StringInputDefaultConst.value;

    @Input() actionInput: () => void = StringInputDefaultConst.actionInput;

    onInput(): void {
        this.actionInput();
    }
}