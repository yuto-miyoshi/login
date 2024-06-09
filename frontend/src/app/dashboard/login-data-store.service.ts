import { Injectable } from '@angular/core';
import { grouping } from '../shared/domain/tool/group.logic';

const sortDate = (inorder: Date[]): Date[][] =>
  grouping(inorder, generateDayGroupingJudges(7));

const generateDayGroupingJudges = (
  days: number,
): ((date: Date) => boolean)[] => {
  const dayGroupingJudges: ((date: Date) => boolean)[] = [];

  for (let i = 0; i < days; i++) {
    const now = new Date();
    now.setDate(now.getDate() - i);
    dayGroupingJudges.push(
      (date: Date) => now.toDateString() === date.toDateString(),
    );
  }

  return dayGroupingJudges;
};

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
