import type { EmblaCarouselType } from 'embla-carousel';

export type Context = {
	api?: EmblaCarouselType;
	register($element: HTMLElement): void;
	unregister($element: HTMLElement): void;
	scrollTo(index: number, jump?: boolean): void;
};
