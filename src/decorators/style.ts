import { host } from '@htmlplus/element';

/**
 * TODO: target typing
 */
export function Style() {
  return function (target: any, key: PropertyKey) {
    const symbol = Symbol();

    const updated = target.updatedCallback;

    target.updatedCallback = function () {
      const element = host(this);

      let style = this[symbol];

      if (!style) {
        style = new CSSStyleSheet();

        style.replace(':host {}');

        element.shadowRoot.adoptedStyleSheets.push(style);

        style = this[symbol] = style.cssRules[0].style;
      }

      const value = this[key];

      for (const key of Object.keys(value)) {
        if (value[key]) {
          style.setProperty(key, value[key]);
        } else if (value) {
          style.removeProperty(key);
        }
      }

      return updated?.call(this);
    };
  };
}
