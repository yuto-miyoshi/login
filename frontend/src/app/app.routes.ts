import { Routes } from '@angular/router';
import { AccessFailComponent } from './shared/except-page/access-fail/access-fail.component';

export const routes: Routes = [
  { path: '/error', component: AccessFailComponent },
];
