import { Component, Input } from '@angular/core';
import { ButtonDefaultConst } from './button-default.const';
import { ActionSignature } from '../../../application-signature/action-signature.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() message = ButtonDefaultConst.message;

  /**
   * Execute when button is clicked
   */
  @Input() actionClick: ActionSignature = ButtonDefaultConst.actionClick;

  onClick(): void {
    this.actionClick();
  }
}
