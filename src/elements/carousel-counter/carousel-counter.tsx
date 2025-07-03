import { Element, Property } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 */
@Element()
export class CarouselCounter extends CarouselChild {
  /**
   * A customizable template string for displaying the carousel's slide counter.
   *
   * This template supports two placeholders that will be dynamically replaced:
   * - `%CURRENT%`: Represents the number of the currently active slide.
   * - `%TOTAL%`: Represents the total number of slides in the carousel.
   */
  @Property()
  template?: string = '%CURRENT% / %TOTAL%';

  events: EmblaEventType[] = ['init', 'reInit', 'select'];

  get content(): string {
    return this.template.replaceAll('%TOTAL%', this.total).replaceAll('%CURRENT%', this.current);
  }

  get current(): string {
    const value = this.api?.selectedScrollSnap();

    if (typeof value != 'number') return '-';

    return `${value + 1}`;
  }

  get total(): string {
    const value = this.api?.scrollSnapList().length;

    if (typeof value != 'number') return '-';

    return `${value}`;
  }

  render() {
    return this.content;
  }
}
