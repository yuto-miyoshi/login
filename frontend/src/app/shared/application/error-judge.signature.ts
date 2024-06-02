import { PasswordErrorCode } from '../domain/password/password-error.definition';

export type PasswordErrorJudgeSignature = () => PasswordErrorCode;
