import { Routes } from '@angular/router';
import { AccessFailComponent } from './shared/except-page/access-fail/access-fail.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'error', component: AccessFailComponent },
];
