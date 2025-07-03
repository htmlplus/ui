import { EmblaCarouselType } from 'embla-carousel';
export interface CarouselContext {
    api?: EmblaCarouselType;
    register($element: HTMLElement): void;
    unregister($element: HTMLElement): void;
    scrollTo(index: number, jump?: boolean): void;
}
