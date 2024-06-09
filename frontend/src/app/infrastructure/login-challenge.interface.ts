export namespace LoginChallenge {
  export type Form = {
    mail: string;
    password: string;
  };

  export type Result = {
    success: boolean;
  };

  export const key = '/login';
}
