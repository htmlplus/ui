import { off, on } from '@htmlplus/element';

import * as CONSTANTS from '@app/constants';

export function Media(query: string) {
  const getMedia = (target: any, query: string) => {
    const breakpoints = sort(CONSTANTS.BREAKPOINTS);

    query = normalize(target, query);

    if (!query) return;

    const [key, direction] = query.split('-');

    const isUp = direction === 'up';

    const isDown = direction === 'down';

    const index = breakpoints.findIndex((breakpoint) => breakpoint.key === key);

    const min = breakpoints[index].value;

    const max = (breakpoints[index + 1] || {}).value - 1;

    if (isUp || isNaN(max)) {
      query = `(min-width: ${min}px)`;
    } else if (isDown) {
      query = `(max-width: ${max}px)`;
    } else {
      query = `(min-width: ${min}px) and (max-width: ${max}px)`;
    }

    return window.matchMedia(query);
  };

  const normalize = (target: any, query: string) => {
    const isProperty = query.match(/\[(.*)\]/);

    if (isProperty) {
      const property = isProperty[1];

      query = query.replace(`[${property}]`, target[property]);
    }

    return query;
  };

  const sort = (breakpoints: Object) => {
    return Object.keys(breakpoints)
      .map((key) => {
        return {
          key,
          value: breakpoints[key]
        };
      })
      .sort((a, b) => a.value - b.value);
  };

  return function (target: any, propertyKey: PropertyKey) {
    let media;

    const connected = target.connectedCallback;

    target.connectedCallback = function () {
      media = getMedia(this, query);

      const callback = this[propertyKey];

      on(media, 'change', callback);

      connected && connected.bind(this)();

      // TODO

      const event: any = new Event('change');

      event.matches = media.matches;

      event.media = media.media;

      media.dispatchEvent(event);
    };

    const disconnected = target.disconnectedCallback;

    target.disconnectedCallback = function () {
      const callback = this[propertyKey];

      off(media, 'change', callback);

      disconnected && disconnected.bind(this)();
    };
  };
}
