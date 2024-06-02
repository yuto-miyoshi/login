export namespace MailDomainConst {
  export const maxLength = 256;

  /**
   * Must include "@"
   */
  export const atMarkIncludePattern = /^[^@]*@[^@]*$/;

  export const domainPartPattern = /^[^@]+@[^@]+\.[^@]+$/;

  export const domainPartPattern2 = /^[^@]+@([a-zA-Z0-9-]{1,63}\.)+[^@]+$/;

  export const topLevelDomainPattern = /^[^@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,63}$/;

  export const topLevelDomainMinLength = 2;

  export const topLevelDomainMaxLength = 63;

  export const excludeForbiddenCharacterPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,63}$/;
}
