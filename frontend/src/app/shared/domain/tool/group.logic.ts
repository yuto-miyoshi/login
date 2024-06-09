export const split = <T>(
  inorder: T[],
  judge: (data: T) => boolean,
): [T[], T[]] => {
  const [trueGroup, falseGroup]: [T[], T[]] = [[], []];
  inorder.forEach((data) => {
    if (judge(data)) {
      trueGroup.push(data);
    } else {
      falseGroup.push(data);
    }
  });
  return [trueGroup, falseGroup];
};

export const grouping = <T>(
  inorder: T[],
  judges: ((data: T) => boolean)[],
): T[][] => {
  const grouped: T[][] = [];
  let left = inorder;

  judges.forEach((judge) => {
    const [inGroup, outGroup] = split(left, judge);

    grouped.push(inGroup);
    left = outGroup;
  });

  grouped.push(left);
  return grouped;
};
