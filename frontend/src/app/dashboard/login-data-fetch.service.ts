import { Injectable } from '@angular/core';
import { ApiService } from '../shared/infrastructure/api.service';
import { Observable, map, of } from 'rxjs';
import { LoginData } from '../shared/infrastructure/login-data.interface';
import { SessionStorageKeyConst } from '../shared/infrastructure/session-storage-key.const';
import { ValueCheck } from '../shared/value-security/value-check';
import { LoginDataStoreService } from './login-data-store.service';
import { DateConvert } from '../shared/infrastructure/date-convert.logic';

@Injectable({
  providedIn: 'root',
})
export class LoginDataFetchService {
  constructor(
    private readonly api: ApiService,
    private readonly loginDataStoreService: LoginDataStoreService,
  ) {}

  fetch(): Observable<void> {
    const mail = sessionStorage.getItem(SessionStorageKeyConst.mail);
    if (!ValueCheck.isNotNull(mail)) {
      // TODO miyoshi: assert
      return of();
    }
    return this.api
      .execute<LoginData.Result, LoginData.Form>(LoginData.key, { mail })
      .pipe(
        map((result) => {
          const data = result.list
            .map(DateConvert.fromISO8601ToDate)
            .filter(ValueCheck.isNotNull);
          this.loginDataStoreService.update(data);
        }),
      );
  }
}
