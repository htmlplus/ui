import { Bind } from '@htmlplus/element';

import type { Carousel } from '../carousel';
import { CarouselPlugin } from './base';

export class CarouselPluginMirror extends CarouselPlugin {
	private get active(): boolean {
		return !!this.instance.mirror;
	}

	public events = {
		reInit: this.handleEvent,
		select: this.handleEvent
	};

	private get carousel() {
		return document.getElementById(this.instance.mirror) as unknown as Carousel;
	}

	public initialize() {
		if (!this.active) return;

		// TODO: remove ? char
		if (!this.instance.mirrorType?.startsWith('sync')) return;

		super.initialize();

		this.handleEvent();
	}

	// TODO
	public scrollTo(index: number, jump?: boolean) {
		let shouldJump: boolean;

		switch (this.instance.mirrorType) {
			case 'click-inherit':
				shouldJump = jump ?? false;
				break;
			case 'click-jump':
				shouldJump = true;
				break;
			case 'click-smooth':
				shouldJump = false;
				break;
			default:
				shouldJump = jump ?? false;
		}

		this.carousel?.scrollToIndex(index, shouldJump);
	}

	@Bind()
	private handleEvent() {
		const index = this.api.selectedScrollSnap();

		const jump = this.instance.mirrorType === 'sync-jump';

		this.carousel?.scrollToIndex(index, jump);
	}
}
