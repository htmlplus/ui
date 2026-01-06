import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { PlusCarousel } from '../element';
export declare abstract class CarouselPlugin {
    instance: PlusCarousel;
    abstract events: {
        [key in EmblaEventType]?: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
    };
    get api(): EmblaCarouselType;
    constructor(instance: PlusCarousel);
    initialize(): void;
    terminate(): void;
    reinitialize(): void;
}
