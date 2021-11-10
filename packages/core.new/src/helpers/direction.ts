import * as Helper from '@app/helpers';

export const direction = (target) => Helper.getComputedStyle(Helper.host(target), 'direction').toLowerCase();