import { Component, Input } from '@angular/core';
import { ButtonDefaultConst } from './button-default.const';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() message = ButtonDefaultConst.message;

  @Input() actionClick = ButtonDefaultConst.actionClick;

  onClick(): void {
    this.actionClick();
  }
}
