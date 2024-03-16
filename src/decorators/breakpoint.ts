import { off, on } from '@htmlplus/element';

import { BREAKPOINTS } from '@/constants';

/**
 * TODO: target typing
 */
export function Breakpoint() {
  return function (target: any, key: PropertyKey) {
    const symbol = Symbol();

    const connected = target.connectedCallback;

    target.connectedCallback = function () {
      this[symbol] = [];

      const keys = Object.keys(BREAKPOINTS);

      const callback = (media) => {
        if (media.matches) {
          this[key] = media.currentTarget?.breakpoint || media.breakpoint;
        }
      };

      this[symbol] = keys.map((key, index) => {
        const min = BREAKPOINTS[keys[index]];

        const max = BREAKPOINTS[keys[index + 1]];

        const query = `(min-width: ${min}px)` + (max ? ` and (max-width: ${max - 1}px)` : ``);

        const media = window.matchMedia(query);

        media['breakpoint'] = key;

        on(media, 'change', callback);

        callback(media);

        return () => off(media, 'change', callback);
      });

      connected?.call(this);
    };

    const disconnected = target.disconnectedCallback;

    target.disconnectedCallback = function () {
      for (const teardown of this[symbol]) {
        teardown();
      }

      this[symbol] = [];

      disconnected?.call(this);
    };
  };
}
