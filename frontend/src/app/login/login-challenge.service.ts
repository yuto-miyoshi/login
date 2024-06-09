import { Injectable } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginChallenge } from '../infrastructure/login-challenge.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginChallengeService {
  constructor(private readonly api: ApiService) {}

  send(mail: string, password: string): Observable<boolean> {
    return this.api
      .execute<
        LoginChallenge.Result,
        LoginChallenge.Form
      >(LoginChallenge.key, { mail, password })
      .pipe(
        catchError(() => {
          return of({ success: false });
        }),
        map((result) => {
          return result.success;
        }),
      );
  }
}
