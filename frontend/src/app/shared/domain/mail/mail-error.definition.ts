import { ValueCheck } from '../../value-security/value-check';
import { ErrorDefinition } from '../error.interface';
import { MailDomainConst } from './mail-domain.const';

export const MailErrorCode = {
  noError: 0,
  noInput: 1,
  tooLong: 2,
  atMarkAbsent: 3,
  invalidDomainPattern: 4,
  shortDomain: 5,
  rangeOutTopLevelDomainLength: 6,
  forbiddenCharacter: 7,
} as const;
export type MailErrorCode = (typeof MailErrorCode)[keyof typeof MailErrorCode];

export const mailErrorDefinitionDictionary: readonly ErrorDefinition<
  MailErrorCode,
  string
>[] = [
  {
    code: MailErrorCode.noError,
    logic: (_: string) => false,
    message: '',
  },
  {
    code: MailErrorCode.noInput,
    logic: (mail: string) => mail.length <= 0,
    message: 'Required.',
  },
  {
    code: MailErrorCode.tooLong,
    logic: (mail: string) => mail.length > MailDomainConst.maxLength,
    message: `Mail is required to be ${MailDomainConst.maxLength} or less.`,
  },
  {
    code: MailErrorCode.atMarkAbsent,
    logic: (mail: string) => !MailDomainConst.atMarkIncludePattern.test(mail),
    message: 'Mail is required to include "@".',
  },
  {
    code: MailErrorCode.invalidDomainPattern,
    logic: (mail: string) => !MailDomainConst.domainPartPattern.test(mail),
    message: 'Invalid domain.',
  },
  {
    code: MailErrorCode.shortDomain,
    logic: (mail: string) =>
      !MailDomainConst.domainPartPattern2.test(mail) ||
      mail.split('@')[1].split('.')[0].length < 1,
    message: 'Short domain.',
  },
  {
    code: MailErrorCode.rangeOutTopLevelDomainLength,
    logic: (mail: string) => {
      if (!MailDomainConst.topLevelDomainPattern.test(mail)) {
        return true;
      }
      const tld = mail.split('@')[1].split('.').pop();
      if (ValueCheck.isUndefined(tld)) {
        return true;
      }
      return (
        tld.length < MailDomainConst.topLevelDomainMinLength ||
        tld.length > MailDomainConst.topLevelDomainMaxLength
      );
    },
    message: `Top level domain part is required to be at least ${MailDomainConst.topLevelDomainMinLength}, and to be ${MailDomainConst.topLevelDomainMaxLength} or less`,
  },
  {
    code: MailErrorCode.forbiddenCharacter,
    logic: (mail: string) =>
      !MailDomainConst.excludeForbiddenCharacterPattern.test(mail),
    message: 'Mail is required to exclude special character.',
  },
] as const;
