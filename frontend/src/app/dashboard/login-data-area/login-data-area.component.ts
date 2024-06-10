import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginDataStoreService } from '../login-data-store.service';

@Component({
  selector: 'app-login-data-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-data-area.component.html',
  styleUrl: './login-data-area.component.scss',
})
export class LoginDataAreaComponent {
  constructor(readonly loginDataStoreService: LoginDataStoreService) {}

  public dataColor(data: Date[]): string {
    if (data.length > 10) {
      return 'rgba(64, 64, 64, 0.5)';
    }

    if (data.length > 5) {
      return 'rgba(64, 64, 64, 0.25)';
    }

    if (data.length > 1) {
      return 'rgba(64, 64, 64, 0.125)';
    }

    return 'rgba(64, 64, 64, 0)';
  }
}
