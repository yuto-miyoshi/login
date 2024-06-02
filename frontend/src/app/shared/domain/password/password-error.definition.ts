import { ErrorDefinition } from '../error.interface';
import { PasswordDomainConst } from './password-domain.const';

export const PasswordErrorCode = {
  noError: 0,
  tooShort: 1,
  tooLong: 2,
  forbiddenCharacter: 3,
  atLeastOneAlphOneNumber: 4,
  mismatch: 5,
} as const;
export type PasswordErrorCode =
  (typeof PasswordErrorCode)[keyof typeof PasswordErrorCode];

export const passwordErrorDefinitionDictonary: ErrorDefinition<
  PasswordErrorCode,
  string
>[] = [
  {
    code: PasswordErrorCode.noError,
    logic: (_: string) => false,
    message: '',
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
    code: 3,
    logic: (password: string) =>
      !PasswordDomainConst.alphNumberOnlyPattern.test(password),
    message: 'Password can only include alphabet [a-zA-Z] and number[0-9].',
  },
  {
    code: 4,
    logic: (password: string) =>
      !PasswordDomainConst.atLeastOneAlphOneNumberPattern.test(password),
    message:
      'Password is required to include at least one alphabet and one number.',
  },
] as const;
