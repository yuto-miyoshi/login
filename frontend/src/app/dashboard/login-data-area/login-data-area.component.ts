import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
}
