import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessFailComponent } from './shared/exceptional/access-fail/access-fail.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error', component: AccessFailComponent },
];
