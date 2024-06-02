export namespace PasswordDomainConst {
  export const minLength = 8;

  export const maxLength = 16;

  /**
   * Usable only alphabet and number.
   */
  export const alphNumberOnlyPattern = /^[a-zA-Z0-9]*$/;

  /**
   * Required to include at least one alphabet and one number.
   */
  export const atLeastOneAlphOneNumberPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]*$/;
}
