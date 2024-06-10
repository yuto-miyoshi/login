import { grouping } from '../shared/domain/tool/group.logic';

const total = 8;

export type DateLabeled = {
  label: string;
  data: Date[];
};

export const sortDate = (inorder: Date[]): DateLabeled[] => {
  const dataList = grouping(inorder, generateDayGroupingJudges(total));
  return dataList.map((data, index) => {
    const now = new Date();
    now.setDate(now.getDate() - index);
    let label = now.toDateString();
    if (index + 1 >= total) {
      label = 'before ' + label;
    }
    return { label, data };
  });
};

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
