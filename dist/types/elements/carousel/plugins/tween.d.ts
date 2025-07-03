import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { CarouselPlugin } from './base';
export declare class CarouselPluginTween extends CarouselPlugin {
    private get active();
    events: {
        reInit: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
        scroll: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
        slideFocus: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
    };
    initialize(): void;
    terminate(): void;
    private handleEvent;
}
