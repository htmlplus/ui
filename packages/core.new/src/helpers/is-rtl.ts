import * as Helpers from '@app/helpers';

export const isRTL = (target) => Helpers.direction(target) == 'rtl';