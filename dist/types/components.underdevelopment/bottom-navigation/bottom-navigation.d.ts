/// <reference types="react" />
import { EventEmitter } from '@htmlplus/element';
import { Animation } from '@app/services';
/**
 * @development
 * @group bottom-navigation
 * @slot default - The default slot.
 */
export declare class BottomNavigation {
    /**
     * TODO
     */
    grow?: boolean;
    /**
     * TODO
     */
    hideOnScroll?: boolean;
    /**
     * TODO
     */
    labelPosition?: 'bottom' | 'side';
    /**
     * TODO
     */
    fixed?: boolean;
    /**
     * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
     */
    scrollTarget: string | HTMLElement;
    /**
     * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
     */
    scrollThreshold?: number;
    /**
     * TODO
     * https://vuetifyjs.com/en/components/bottom-navigation/#shift
     * https://vuetifyjs.com/en/api/v-bottom-navigation/#props-shift
     */
    shift?: boolean;
    /**
     * TODO
     */
    value?: any;
    /**
     * TODO
     */
    plusChange: EventEmitter<any>;
    animate?: Animation;
    tunnel?: any;
    get attributes(): {
        state: string;
    };
    /**
     * External Methods
     */
    /**
     * Internal Methods
     */
    broadcast(): void;
    request(value: any): void;
    initialize(): void;
    terminate(): void;
    /**
     * Watchers
     */
    watcher(): void;
    /**
     * Events handler
     */
    /**
     * Lifecycles
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
