import * as Helper from '@app/helpers';

export const isRTL = (target) => Helper.direction(target) == 'rtl';