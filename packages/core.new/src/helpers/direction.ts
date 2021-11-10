import * as Helpers from '@app/helpers';

export const direction = (target) => Helpers.getComputedStyle(Helpers.host(target), 'direction').toLowerCase();