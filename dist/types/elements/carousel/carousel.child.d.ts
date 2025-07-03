import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { PlusCore } from '../../core';
import { CarouselContext } from './carousel.context';
export declare abstract class CarouselChild extends PlusCore {
    api?: EmblaCarouselType;
    abstract events: EmblaEventType[];
    state: CarouselContext | undefined;
    initialize(): void;
    terminate(): void;
    handleApiChange(api: EmblaCarouselType): void;
    handleUpdate(): void;
    readyCallback(): void;
    updateCallback(): void;
    disconnectedCallback(): void;
}
