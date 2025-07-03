import { CarouselPlugin } from './base';
export declare class CarouselPluginAutoHeight extends CarouselPlugin {
    private get active();
    events: {
        reInit: () => void;
        select: () => void;
        slideFocus: () => void;
    };
    initialize(): void;
    terminate(): void;
    private handleEvent;
}
