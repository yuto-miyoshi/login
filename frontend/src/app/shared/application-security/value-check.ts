export namespace ValueCheck {
  export const isUndefined = (value: unknown): value is undefined => {
    return value === undefined;
  };
}
