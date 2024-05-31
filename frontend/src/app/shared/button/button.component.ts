import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input() message = ButtonDefaultConst.message;

    @Input() action: () => void = ButtonDefaultConst.action;

    @Input() styleWidth = ButtonDefaultConst.styleWidth;

    @Input() styleHeight = ButtonDefaultConst.styleHeight;

    onClick(): void {
        this.action();
    }
}
