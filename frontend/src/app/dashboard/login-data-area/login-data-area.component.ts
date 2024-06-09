import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-data-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-data-area.component.html',
  styleUrl: './login-data-area.component.scss',
})
export class LoginDataAreaComponent implements OnInit {
  ngOnInit(): void {}
}
