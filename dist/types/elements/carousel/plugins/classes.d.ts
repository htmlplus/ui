import { CarouselPlugin } from './base';
export declare class CarouselPluginClasses extends CarouselPlugin {
    private slides;
    private inView;
    private snapped;
    private names;
    private get active();
    events: {
        reInit: () => void;
        select: () => void;
        slidesInView: () => void;
        pointerDown: () => void;
        pointerUp: () => void;
    };
    initialize(): void;
    terminate(): void;
    private handleInit;
    private handlePointerDown;
    private handlePointerUp;
    private handleSelect;
    private handleSlidesInView;
}
