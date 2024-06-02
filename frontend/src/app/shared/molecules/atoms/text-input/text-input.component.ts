import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputDefaultConst } from './text-input-default.const';
import { ActionSignature } from '../../../application-interface/action.interface';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  /**
   * Input target
   */
  @Input() text = TextInputDefaultConst.text;

  @Input() title = TextInputDefaultConst.title;

  /**
   * Execute when charactor entered
   */
  @Input() actionInput: ActionSignature = TextInputDefaultConst.actionInput;

  /**
   * Execute when <input> element attracts attentions
   */
  @Input() actionFocus: ActionSignature = TextInputDefaultConst.actionFocus;

  /**
   * Execute when <input> element dropped from attentions
   */
  @Input() actionBlur: ActionSignature = TextInputDefaultConst.actionBlur;

  /**
   * Focused on Input Form
   */
  isFocused = false;

  onInput(): void {
    this.actionInput();
  }

  onFocus(): void {
    this.isFocused = true;
    this.actionFocus();
  }

  onBlur(): void {
    this.isFocused = false;
    this.actionBlur();
  }
}
