import { Component, Input } from '@angular/core';
import { PasswordInputDefaultConst } from './password-input-default.const';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActionSignature } from '../../../application/action.interface';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  /**
   * Input target
   */
  @Input() password = PasswordInputDefaultConst.password;

  @Input() title = PasswordInputDefaultConst.title;

  /**
   * Execute when charactor entered
   */
  @Input() actionInput: ActionSignature = PasswordInputDefaultConst.actionInput;

  /**
   * Execute when <input> element attracts attentions
   */
  @Input() actionFocus: ActionSignature = PasswordInputDefaultConst.actionFocus;

  /**
   * Execute when <input> element dropped from attentions
   */
  @Input() actionBlur: ActionSignature = PasswordInputDefaultConst.actionBlur;

  /**
   * Focused on Input Form
   */
  isFocused = false;

  /**
   * Display ******* for password
   */
  isVisable = false;

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

  onClickVisableToggle(): void {
    this.isVisable = !this.isVisable;
  }
}
