import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';

import type { PlusCarousel } from '../element';

export abstract class CarouselPlugin {
	abstract events: {
		[key in EmblaEventType]?: (event: EmblaCarouselType, eventName: EmblaEventType) => void;
	};

	public get api() {
		if (!this.instance.api) {
			throw new Error('Unexpected Error');
		}
		return this.instance.api;
	}

	constructor(public instance: PlusCarousel) {}

	public initialize(): void {
		Object.keys(this.events).forEach((key) => {
			// biome-ignore lint: TODO
			this.api.on(key as EmblaEventType, this.events[key as EmblaEventType]!);
		});
	}

	public terminate(): void {
		Object.keys(this.events).forEach((key) => {
			// biome-ignore lint: TODO
			this.api.off(key as EmblaEventType, this.events[key as EmblaEventType]!);
		});
	}

	public reinitialize() {
		this.terminate();
		this.initialize();
	}
}
