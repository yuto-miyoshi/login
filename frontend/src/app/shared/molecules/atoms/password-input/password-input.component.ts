import { Component, Input } from '@angular/core';
import { PasswordInputDefaultConst } from './password-input-default.const';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

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

  @Input() actionInput = PasswordInputDefaultConst.actionInput;

  @Input() actionFocus = PasswordInputDefaultConst.actionFocus;

  @Input() actionBlur = PasswordInputDefaultConst.actionBlur;

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
