import { Helper } from '@app/utils';

export function IsRTL() {

  return function (instance: {} | any, key: PropertyKey) {

    const descriptor = {
      get(this: any) {
        return Helper.isRTL(this);
      },
      enumerable: true,
      configurable: true,
    }

    Object.defineProperty(instance, key, descriptor);
  }
}