export type Animation2Element = HTMLElement | (() => HTMLElement);
export type Animation2Event = (parameters?: any) => void;
export type Animation2State = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';
export interface Animation2Config {
    key: string;
    source: Animation2Element;
    target: Animation2Element;
    states?: {
        [key in Animation2State]?: string;
    };
    onEnter?: Animation2Event;
    onEntering?: Animation2Event;
    onEntered?: Animation2Event;
    onLeave?: Animation2Event;
    onLeaving?: Animation2Event;
    onLeaved?: Animation2Event;
}
export declare class Animation2 {
    state: Animation2State;
    private config;
    private destroy?;
    private get animation();
    private get source();
    private get target();
    constructor(config: Animation2Config);
    dispose(): void;
    enter(parameters?: any): Promise<boolean>;
    initialize(state?: Animation2State): void;
    leave(parameters?: any): Promise<boolean>;
    private next;
    private update;
}
