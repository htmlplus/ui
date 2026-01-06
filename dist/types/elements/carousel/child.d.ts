import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { PlusCore } from '../../core';
import { Context } from './context';
export declare abstract class CarouselChild extends PlusCore {
    api?: EmblaCarouselType;
    abstract events: EmblaEventType[];
    state?: Context;
    initialize(): void;
    terminate(): void;
    handleApiChange(api: EmblaCarouselType): void;
    handleUpdate(): void;
    readyCallback(): void;
    updateCallback(): void;
    disconnectedCallback(): void;
}
