import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';

import type { Carousel } from '../carousel';

export abstract class CarouselPlugin {
	abstract events: {
		[key in EmblaEventType]?: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
	};

	public get api() {
		return this.instance.api;
	}

	constructor(public instance: Carousel) {}

	public initialize(): void {
		Object.keys(this.events).forEach((key) => {
			this.api.on(key as EmblaEventType, this.events[key]);
		});
	}

	public terminate(): void {
		Object.keys(this.events).forEach((key) => {
			this.api.off(key as EmblaEventType, this.events[key]);
		});
	}

	public reinitialize() {
		this.terminate();
		this.initialize();
	}
}
