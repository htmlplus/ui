import { Bind, Element, Query } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 */
@Element()
export class CarouselProgress extends CarouselChild {
  @Query('div')
  $bar!: HTMLElement;

  events: EmblaEventType[] = ['init', 'reInit', 'scroll', 'slideFocus'];

  @Bind()
  handleUpdate() {
    if (!this.api) return;

    const value = this.api.scrollProgress();

    if (typeof value != 'number') {
      return this.$bar.removeAttribute('style');
    }

    const progress = Math.max(0, Math.min(1, value)) * 100;

    this.$bar.style.transform = `translate3d(${progress}%, 0px, 0px)`;
  }

  render() {
    return <div className="bar" part="bar" />;
  }
}
