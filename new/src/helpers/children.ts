import { host } from './host';

export const children = (target) => Array.from(host(target).children);