import { direction } from './direction';

export const isRTL = (target) => direction(target) == 'rtl';