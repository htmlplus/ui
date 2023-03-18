import { AVATAR_SIZES } from './avatar.constants';

export type AvatarShape = 'circle' | 'round' | 'tile';
export type AvatarSize = typeof AVATAR_SIZES[number] | (number & {}) | (string & {});
