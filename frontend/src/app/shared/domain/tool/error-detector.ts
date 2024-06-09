import { ValueCheck } from '../../value-security/value-check';
import { ErrorDefinition } from '../error.interface';

/**
 * error detection agent implements with "builder pattern"
 * you must call start() before filtering
 * you must call stop() after filtering for initializing
 * @type T: error code enum
 * @type S: target value type
 */
export class ErrorDetector<T, S> {
  private currentStatus: T;

  private value: S | undefined = undefined;

  /**
   * @param defList error definition describing error code, error judge logic and error message
   * @param noErrorCode error code when no error defined in defList
   */
  constructor(
    private readonly defList: readonly ErrorDefinition<T, S>[],
    private readonly noErrorCode: T,
  ) {
    this.currentStatus = noErrorCode;
  }

  start(value: S): this {
    this.currentStatus = this.noErrorCode;
    this.value = value;
    return this;
  }

  /**
   * construct single error check "net"
   * error should be forgiven when already detecting heavier error
   * (in other words, field "currentStatus" is not noErrorCode)
   * @param errorCode Error kind for judge
   * @param pluginLogic Priority apply ignoring defList logic (pseudo overwrite)
   * @returns detector after judge
   */
  filter(errorCode: T, pluginLogic?: (value: S) => boolean): this {
    if (!ValueCheck.isNotUndefined(this.value)) {
      // TODO: assert
      return this;
    }

    if (this.currentStatus !== this.noErrorCode) {
      return this;
    }

    let logic = pluginLogic;
    if (!ValueCheck.isNotUndefined(logic)) {
      const def = this.defList.find(
        (def: ErrorDefinition<T, S>) => def.code === errorCode,
      );

      if (!ValueCheck.isNotUndefined(def)) {
        // TODO: Assert
        return this;
      }

      logic = def.logic;
    }

    if (logic(this.value)) {
      this.currentStatus = errorCode;
    }

    return this;
  }

  stop(): void {
    this.refresh();
  }

  stopWithResult(): T {
    const result = this.currentStatus;
    this.refresh();
    return result;
  }

  private refresh(): void {
    this.currentStatus = this.noErrorCode;
    this.value = undefined;
  }
}
