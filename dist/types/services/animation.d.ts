export type AnimationElement = HTMLElement | (() => HTMLElement);
export type AnimationEvent = (parameters?: any) => void;
export type AnimationState = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';
export interface AnimationConfig {
    key: string;
    source: AnimationElement;
    target: AnimationElement;
    states?: {
        [key in AnimationState]?: string;
    };
    onEnter?: AnimationEvent;
    onEntering?: AnimationEvent;
    onEntered?: AnimationEvent;
    onLeave?: AnimationEvent;
    onLeaving?: AnimationEvent;
    onLeaved?: AnimationEvent;
}
export declare class Animation {
    state: AnimationState;
    private config;
    private destroy?;
    private get animation();
    private get source();
    private get target();
    constructor(config: AnimationConfig);
    dispose(): void;
    enter(parameters?: any): Promise<boolean>;
    initialize(state?: AnimationState): void;
    leave(parameters?: any): Promise<boolean>;
    private next;
    private update;
}
