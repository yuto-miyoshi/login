import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-access-fail',
  standalone: true,
  templateUrl: './access-fail.component.html',
  styleUrl: './access-fail.component.scss',
})
export class AccessFailComponent implements OnInit, OnDestroy {
  private readonly $destory = new Subject<void>();

  constructor(private readonly activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.queryParams
      .pipe(takeUntil(this.$destory))
      .subscribe((data) => {
        console.warn(data);
      });
  }

  ngOnDestroy(): void {
    this.$destory.next();
    this.$destory.complete();
  }
}
