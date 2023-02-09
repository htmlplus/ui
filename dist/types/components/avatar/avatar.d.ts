import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
export declare class Avatar {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    shape?: 'circle' | 'round' | 'tile';
    /**
     * TODO
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    render(): uhtml.Hole;
}
export interface AvatarJSX {
    /**
     * TODO
     */
    shape?: 'circle' | 'round' | 'tile';
    /**
     * TODO
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
declare global {
    interface HTMLPlusAvatarElement extends HTMLElement {
        /**
         * TODO
         */
        shape?: 'circle' | 'round' | 'tile';
        /**
         * TODO
         */
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    }
    var HTMLPlusAvatarElement: {
        prototype: HTMLPlusAvatarElement;
        new (): HTMLPlusAvatarElement;
    };
    interface HTMLElementTagNameMap {
        "plus-avatar": HTMLPlusAvatarElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-avatar": AvatarJSX & {
                [key: string]: any;
            };
        }
    }
}
