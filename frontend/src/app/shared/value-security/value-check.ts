export namespace ValueCheck {
  export const isNotUndefined = <T>(value: T | undefined): value is T => {
    return value !== undefined;
  };

  export const isNotNull = <T>(value: T | null): value is T => {
    return value !== null;
  };
}
