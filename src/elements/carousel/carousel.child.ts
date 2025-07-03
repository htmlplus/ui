import { Bind, Consumer, State } from '@htmlplus/element';

import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';

import { PlusCore } from '@/core';

import { CarouselContext } from './carousel.context';

export abstract class CarouselChild extends PlusCore {
  api?: EmblaCarouselType;

  abstract events: EmblaEventType[];

  @State()
  @Consumer('carousel')
  state: CarouselContext | undefined;

  initialize() {
    if (!this.api) return;

    for (const event of this.events) {
      this.api.on(event, this.handleUpdate);
    }
  }

  terminate() {
    if (!this.api) return;

    for (const event of this.events) {
      this.api.off(event, this.handleUpdate);
    }

    this.api = undefined;
  }

  handleApiChange(api: EmblaCarouselType) {
    this.terminate();

    this.api = api;

    this.initialize();
  }

  @Bind()
  handleUpdate() {
    this.forceUpdate();
  }

  readyCallback() {
    this.state?.register(this.$host);
  }

  updateCallback() {
    if (this.state?.api != this.api) {
      this.handleApiChange(this.state?.api);
    }
  }

  disconnectedCallback() {
    this.terminate();

    this.state?.unregister(this.$host);
  }
}
