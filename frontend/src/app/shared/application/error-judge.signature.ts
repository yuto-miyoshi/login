import { MailErrorCode } from '../domain/mail/mail-error.definition';
import { PasswordErrorCode } from '../domain/password/password-error.definition';

export type PasswordErrorJudgeSignature = () => PasswordErrorCode;

export type MailErrorJudgeSignature = () => MailErrorCode;
