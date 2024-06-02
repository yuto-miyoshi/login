import { ValueCheck } from '../../value-security/value-check';
import { ErrorDefinition } from '../error.interface';

/**
 * @type T: error code enum
 * @type S: target value type
 */
export class ErrorDetector<T, S> {
  private currentStatus: T;

  private value: S | undefined = undefined;

  constructor(
    private readonly defList: ErrorDefinition<T, S>[],
    private readonly noErrorCode: T,
  ) {
    this.currentStatus = noErrorCode;
  }

  start(value: S): this {
    this.currentStatus = this.noErrorCode;
    this.value = value;
    return this;
  }

  filter(errorCode: T): this {
    if (ValueCheck.isUndefined(this.value)) {
      // TODO: assert
      return this;
    }
    if (this.currentStatus !== this.noErrorCode) {
      return this;
    }

    const def = this.defList.find(
      (def: ErrorDefinition<T, S>) => def.code === errorCode,
    );

    if (ValueCheck.isUndefined(def)) {
      // TODO: Assert
      return this;
    }

    if (def.logic(this.value)) {
      this.currentStatus = def.code;
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
