import { CarouselPlugin } from './base';
export declare class CarouselPluginMirror extends CarouselPlugin {
    private get active();
    events: {
        reInit: () => void;
        select: () => void;
    };
    private get carousel();
    initialize(): void;
    scrollTo(index: number, jump?: boolean): void;
    private handleEvent;
}
