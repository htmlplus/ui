export type AnimationReflect = 'attribute' | 'class';
export type AnimationState = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';
export type AnimationElement = HTMLElement | Array<HTMLElement> | any;
export interface AnimationConfig {
    key?: string;
    source?: AnimationElement;
    target?: AnimationElement;
    state?: AnimationState;
    states?: {
        [key in AnimationState]?: string;
    };
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onEnterCanceled?: () => void;
    onLeave?: () => void;
    onLeaving?: () => void;
    onLeaved?: () => void;
    onLeaveCanceled?: () => void;
}
export declare class Animation {
    private config;
    private timeout;
    constructor(config: AnimationConfig);
    private get sources();
    private get targets();
    private duration;
    private init;
    private next;
    private update;
    cancel(): void;
    dispose(): void;
    enter(config?: AnimationConfig): void;
    leave(config?: AnimationConfig): void;
}
