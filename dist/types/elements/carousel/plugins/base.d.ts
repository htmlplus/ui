import { EmblaEventType } from 'embla-carousel';
import { Carousel } from '../carousel';
export declare abstract class CarouselPlugin {
    instance: Carousel;
    abstract events: {
        [key in EmblaEventType]?: Function;
    };
    get api(): import('embla-carousel').EmblaCarouselType;
    constructor(instance: Carousel);
    initialize(): void;
    terminate(): void;
    reinitialize(): void;
}
