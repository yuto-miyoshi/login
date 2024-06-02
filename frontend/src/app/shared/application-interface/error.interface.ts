/**
 * T: error code enum which identifies error kinds
 * S: target value type
 */
export interface ErrorDefinition<T, S> {
  /**
   * error code
   */
  code: T;

  /**
   * validation logic
   * @param value validation target
   * @returns true: error, false:no error
   */
  logic: (value: S) => boolean;

  /**
   * error message
   */
  message: string;
}
