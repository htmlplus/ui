import { Bind } from '@htmlplus/element';

import type { Carousel } from '../carousel';
import { CarouselPlugin } from './base';

export class CarouselPluginMirror extends CarouselPlugin {
  private get active(): boolean {
    return !!this.instance.mirror
  }

  public events = {
    'reInit': this.handleEvent,
    'select': this.handleEvent,
  }

  private get carousel() {
    return document.getElementById(this.instance.mirror) as any as Carousel;
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
    switch (this.instance.mirrorType) {
      case 'click-inherit':
        jump = jump;
        break;
      case 'click-jump':
        jump = true;
        break;
      case 'click-smooth':
        jump = false;
        break;
    }
    this.carousel?.scrollToIndex(index, jump);
  }

  @Bind()
  private handleEvent() {
    const index = this.api.selectedScrollSnap();

    const jump = this.instance.mirrorType == 'sync-jump';

    this.carousel?.scrollToIndex(index, jump);
  }
}
