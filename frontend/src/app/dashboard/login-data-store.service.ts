import { Injectable } from '@angular/core';
import { DateLabeled, sortDate } from './sort-date.logic';

@Injectable({
  providedIn: 'root',
})
export class LoginDataStoreService {
  private data: DateLabeled[] = [];

  get loginData(): DateLabeled[] {
    return this.data;
  }

  update(inorderData: Date[]): void {
    this.data = sortDate(inorderData);
  }
}
