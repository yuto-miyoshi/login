import { Routes } from '@angular/router';
import { AccessFailComponent } from './shared/except-page/access-fail/access-fail.component';
import { SingupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: SingupComponent },
  { path: 'error', component: AccessFailComponent },
];
