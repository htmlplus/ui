import './assets/names/3d-cube-sphere.js';
import './assets/names/plus.js';
import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon.types.js';
export declare class Icon2 {
    /**
     * Adjusts the color of the icons.(All main web color formats are accepted)
     */
    color?: string;
    /**
     * Flips the icon.
     */
    flip?: AvatarFlip;
    /**
     * Specifies the name of the icon.
     */
    name?: AvatarName;
    /**
     * Rotates the icon.
     */
    rotate?: AvatarRotate;
    /**
     * Specifies the size of the icon.
     */
    size?: AvatarSize;
    get attributes(): {
        style: string;
    };
    updatedCallback(): void;
}
