import { Directive, Input } from '@angular/core';
import { ButtonDefaultConst } from './button-default.const';

@Directive({
  selector: '[app-button]',
  standalone: true,
})
export class ButtonDirective {
  @Input() message = ButtonDefaultConst.message;

  @Input() action: () => void = ButtonDefaultConst.action;

  onClick(): void {
    this.action();
  }
}
