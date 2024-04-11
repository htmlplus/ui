import { host, isCSSColor } from '@htmlplus/element';
 
/**
 * TODO: target typing
 */
export function CSSColorVariable() {
  return function (target: any, key: PropertyKey) {
    const updated = target.updatedCallback;
 
    target.updatedCallback = function () {
      const element = host(this);
 
      const variable = `--${target.constructor.tag}-${String(key)}`;
 
      const value = this[key];
 
      if (isCSSColor(value)) {
        element.style.setProperty(variable, value);
      } else {
        element.style.removeProperty(variable);
      }
 
      return updated?.call(this);
    };
  };
}