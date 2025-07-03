import { Element } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class CarouselSlides extends CarouselChild {
  events: EmblaEventType[] = ['init', 'reInit'];

  render() {
    return (
      <div className="container" part="container">
        <slot />
      </div>
    );
  }
}
