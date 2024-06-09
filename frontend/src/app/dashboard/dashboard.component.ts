import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginDataFetchService } from './login-data-fetch.service';
import { Subscription } from 'rxjs';
import { LoginDataAreaComponent } from './login-data-area/login-data-area.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginDataAreaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(private readonly loginDataFetchService: LoginDataFetchService) {}

  ngOnInit(): void {
    this.subscription = this.loginDataFetchService.fetch().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
