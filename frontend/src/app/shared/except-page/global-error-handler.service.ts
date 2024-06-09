import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

/**
 * RECIEVE throwen error in app
 */
@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private readonly router: Router,
    private readonly zone: NgZone,
  ) {}

  handleError(error: any): void {
    this.zone.run(() => {
      this.router.navigate(['error'], { queryParams: { content: error } });
    });
  }
}
