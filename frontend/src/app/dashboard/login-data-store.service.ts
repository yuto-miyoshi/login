import { Injectable } from '@angular/core';
import { sortDate } from './sort-date.logic';

@Injectable({
  providedIn: 'root',
})
export class LoginDataStoreService {
  private data: Date[][] = [];

  get loginData(): Date[][] {
    return this.data;
  }

  update(inorderData: Date[]): void {
    this.data = sortDate(inorderData);
  }
}
