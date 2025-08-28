import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { Carousel } from '../carousel';
export declare abstract class CarouselPlugin {
    instance: Carousel;
    abstract events: {
        [key in EmblaEventType]?: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
    };
    get api(): EmblaCarouselType;
    constructor(instance: Carousel);
    initialize(): void;
    terminate(): void;
    reinitialize(): void;
}
