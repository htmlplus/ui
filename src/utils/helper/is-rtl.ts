import { Helper } from '@app/utils';

export const isRTL = (instance?) => Helper.direction(instance) === 'rtl';