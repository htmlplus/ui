import { getComputedStyle } from './get-computed-style';
import { host } from './host';

export const direction = (target) => getComputedStyle(host(target), 'direction').toLowerCase();