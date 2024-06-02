import { PasswordErrorCode } from '../../domain/password/password-error.definition';

export namespace PasswordErrorDefaultConst {
  export const password = { text: '' };

  export const actionInput = () => {};

  export const actionFocus = () => {};

  export const actionBlur = () => {};

  export const actionInvalid = () => {};

  export const validationFlow = (_: string) => true;

  export const errorMessage = '';

  export const errorJudge = () => PasswordErrorCode.noError;
}
