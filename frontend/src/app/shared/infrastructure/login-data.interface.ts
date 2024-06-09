export namespace LoginData {
  export type Form = {
    mail: string;
  };

  export type Result = {
    list: string[];
  };

  export const key = '/login-data';
}
