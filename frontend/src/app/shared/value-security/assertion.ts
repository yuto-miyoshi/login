export namespace Assertion {
  /**
   * scream and stop application for dev. environment (not work in prod. environment)
   * @param shouldAssert true: Assert, false: No assert
   * @param code Assertion No. (use Assertion.no()) // TODO: express how to use to dev. doc.
   * @param message On PopUp
   * @returns
   */
  export const assert = (
    shouldAssert: boolean,
    code: number,
    message?: string,
  ): void => {
    // TODO: environment block

    if (!shouldAssert) {
      return;
    }

    throw new Error(`Assertion Error: ${code}\n${message}`);
  };

  // TODO: implements
  export const no = (): number => {
    return 0;
  };
}
