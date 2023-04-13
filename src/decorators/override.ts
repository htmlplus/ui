import { appendToMethod } from '@htmlplus/element/client/utils';
import { LIFECYCLE_DISCONNECTED, LIFECYCLE_UPDATED } from '@htmlplus/element/constants';

import * as CONSTANTS from '@app/constants';

const BREAKPOINTS_KEYS = Object.keys(CONSTANTS.BREAKPOINTS).sort(
  (a, b) => CONSTANTS.BREAKPOINTS[a] - CONSTANTS.BREAKPOINTS[b]
);

const getMedia = (key: string) => {
  let query = key;

  if (!query) return;

  let min, max;

  let [from, to] = query.split('-');

  to ||= from;

  if (to == 'down') {
    min = 0;
    max = CONSTANTS.BREAKPOINTS[BREAKPOINTS_KEYS[BREAKPOINTS_KEYS.indexOf(from) + 1]] - 1;
  } else if (to == 'up') {
    min = CONSTANTS.BREAKPOINTS[from];
    max = undefined;
  } else {
    min = CONSTANTS.BREAKPOINTS[from];
    max = CONSTANTS.BREAKPOINTS[BREAKPOINTS_KEYS[BREAKPOINTS_KEYS.indexOf(to) + 1]] - 1;
  }

  if (min >= 0 && max >= 0) {
    query = `(min-width: ${min}px) and (max-width: ${max}px)`;
  } else if (min >= 0) {
    query = `(min-width: ${min}px)`;
  } else if (max >= 0) {
    query = `(max-width: ${max}px)`;
  }

  const media = window.matchMedia(query);

  media['key'] = key;

  return media;
};

export function Override() {
  return function (target: any, propertyKey: PropertyKey) {
    const name = String(propertyKey);

    const symbol = Symbol();

    function destroy() {
      this[symbol]?.map((destroy) => destroy());
    }

    appendToMethod(target, LIFECYCLE_UPDATED, function (states: Map<string, any>) {
      if (!states.has(name)) return;

      const changes = {};

      const override = this[name];

      destroy.call(this);

      const bind = () => {
        for (const key in override) {
          if (!Object.prototype.hasOwnProperty.call(override, key)) continue;

          const media = getMedia(key);

          media.addEventListener('change', callback);

          (this[symbol] ||= []).push(() => media.removeEventListener('change', callback));

          if (!media.matches) continue;

          media.dispatchEvent(
            new MediaQueryListEvent('change', {
              matches: media.matches,
              media: media.media
            })
          );
        }
      };

      const callback = (event) => {
        // if (!event.matches) return;
        // const from = override[event.target.key];
        // const to = this;
        // const keys = Object.keys({ ...changes, ...from }).filter(
        //   (key, index, keys) => keys.indexOf(key) === index
        // );
        // for (const key of keys) {
        //   if (key in from) {
        //     const previous = to[key];
        //     const next = from[key];
        //     changes[key] = { previous, next };
        //     to[key] = next;
        //   } else {
        //     const { previous, next } = changes[key];
        //     to[key] = previous;
        //     delete changes[key];
        //   }
        // }
      };

      requestAnimationFrame(bind);
    });

    appendToMethod(target, LIFECYCLE_DISCONNECTED, destroy);
  };
}

// TODO
// /**
//  * Overrides the properties based on breakpoints. [More](/override).
//  * @experimental
//  */
// @Property()
// @Override()
// override?: { [key: string]: any };
