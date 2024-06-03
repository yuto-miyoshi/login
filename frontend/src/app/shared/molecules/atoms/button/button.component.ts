import { Component, Input } from '@angular/core';
import { ButtonDefaultConst } from './button-default.const';
import { ActionSignature } from '../../../application/action.signature';
import { StringData } from '../../../domain/string-data.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() message: StringData = ButtonDefaultConst.message;

  /**
   * Block the interaction
   */
  @Input() disable = ButtonDefaultConst.disable;

  /**
   * Execute when button is clicked
   */
  @Input() actionClick: ActionSignature = ButtonDefaultConst.actionClick;

  onClick(): void {
    if (this.disable) {
      return;
    }
    this.actionClick();
  }
}
