import { ICON_SIZES } from './icon.constants';
export type AvatarFlip = 'both' | 'horizontal' | 'vertical';
export type AvatarName = string;
export type AvatarRotate = 90 | 180 | 270;
export type AvatarSize = typeof ICON_SIZES[number] | (number & {}) | (string & {});
