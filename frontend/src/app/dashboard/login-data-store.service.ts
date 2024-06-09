import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginDataStoreService {
  private _data: Date[] = [];

  get data(): Date[] {
    return this._data;
  }

  set data(data: Date[]) {
    this._data = data;
  }
}
