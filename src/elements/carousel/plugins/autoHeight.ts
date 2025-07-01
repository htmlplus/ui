import { Bind } from '@htmlplus/element';

import { CarouselPlugin } from './base';

export class CarouselPluginAutoHeight extends CarouselPlugin {
  private get active(): boolean {
    return this.instance.autoHeight && this.instance.options.axis == 'x'
  }

  public events = {
    'reInit': this.handleEvent,
    'select': this.handleEvent,
    'slideFocus': this.handleEvent,
  }

  public initialize() {
    if (!this.active) return;

    super.initialize();

    this.handleEvent();
  }

  public terminate() {
    super.terminate();

    const container = this.api.containerNode();

    container.style.height = '';

    if (container.getAttribute('style')) return;

    container.removeAttribute('style');
  }

  @Bind()
  private handleEvent() {
    const { slideRects, slideRegistry } = this.api.internalEngine();

    const selectedIndexes = slideRegistry[this.api.selectedScrollSnap()];

    if (!selectedIndexes) return;

    const height = selectedIndexes
      .map((index) => slideRects[index].height)
      .reduce((a, b) => Math.max(a, b), 0);

    this.api.containerNode().style.height = `${height}px`;
  }
}
