export namespace DateConvert {
  export const fromISO8601ToDate = (data: string): Date | null =>
    new Date(data);
}
