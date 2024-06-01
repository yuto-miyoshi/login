import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputDefaultConst } from './text-input-default.const';

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

  @Input() actionInput = TextInputDefaultConst.actionInput;

  @Input() actionFocus = TextInputDefaultConst.actionFocus;

  @Input() actionBlur = TextInputDefaultConst.actionBlur;

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
