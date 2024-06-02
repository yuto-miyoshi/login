import { ErrorDefinition } from '../error.interface';
import { PasswordDomainConst } from './password-domain.const';

export const PasswordErrorCode = {
  noError: 0,
  noInput: 1,
  tooShort: 2,
  tooLong: 3,
  forbiddenCharacter: 4,
  atLeastOneAlphOneNumber: 5,
  mismatch: 6,
} as const;
export type PasswordErrorCode =
  (typeof PasswordErrorCode)[keyof typeof PasswordErrorCode];

export const passwordErrorDefinitionDictonary: readonly ErrorDefinition<
  PasswordErrorCode,
  string
>[] = [
  {
    code: PasswordErrorCode.noError,
    logic: (_: string) => false,
    message: '',
  },
  {
    code: PasswordErrorCode.noInput,
    logic: (password: string) => password.length === 0,
    message: 'Required.',
  },
  {
    code: PasswordErrorCode.tooShort,
    logic: (password: string) =>
      password.length < PasswordDomainConst.minLength,
    message: `Password is required to be at least ${PasswordDomainConst.minLength} characters.`,
  },
  {
    code: PasswordErrorCode.tooLong,
    logic: (password: string) =>
      password.length > PasswordDomainConst.maxLength,
    message: `Password is required to be ${PasswordDomainConst.maxLength} or less.`,
  },
  {
    code: PasswordErrorCode.forbiddenCharacter,
    logic: (password: string) =>
      !PasswordDomainConst.alphNumberOnlyPattern.test(password),
    message: 'Password can only include alphabet [a-zA-Z] and number[0-9].',
  },
  {
    code: PasswordErrorCode.atLeastOneAlphOneNumber,
    logic: (password: string) =>
      !PasswordDomainConst.atLeastOneAlphOneNumberPattern.test(password),
    message:
      'Password is required to include at least one alphabet and one number.',
  },
  {
    code: PasswordErrorCode.mismatch,
    /**
     * Required to overwrite logic
     * to inject other words for comparison.
     * Use generatePasswordMismatchLogic()
     */
    // XXX: DENGEROUS! Improve! It cannot ensure safety call.
    logic: (_: string) => false,
    message: 'Passwords are not matched.',
  },
] as const;

export const generatePasswordMismatchLogic = (password0: string) => {
  return (password1: string) => password0 === password1;
};
