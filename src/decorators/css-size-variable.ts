import { host, toUnit } from '@htmlplus/element';

import { isSize } from '@/helpers';

/**
 * TODO: target typing
 */
export function CSSSizeVariable() {
  return function (target: any, key: PropertyKey) {
    const updated = target.updatedCallback;

    target.updatedCallback = function () {
      const element = host(this);

      const variable = `--${target.constructor.tag}-${String(key)}`;

      const value = this[key];

      if (isSize(value)) {
        element.style.removeProperty(variable);
      } else if (value) {
        element.style.setProperty(variable, toUnit(value));
      }

      return updated?.call(this);
    };
  };
}
