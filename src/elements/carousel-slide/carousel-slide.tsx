import { Element, Listen, Property } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class CarouselSlide extends CarouselChild {
  /**
   * Enables slide navigation when the slide is clicked.
   *
   * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
   * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
   *
   * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
   */
  @Property({ reflect: true })
  clickable?: boolean | 'jump';

  events: EmblaEventType[] = ['init', 'reInit', 'select'];

  get index(): number {
    return Array.prototype.indexOf.call(this.api?.slideNodes() || [], this.$host);
  }

  @Listen('click')
  handleClick() {
    if (this.clickable) {
      this.state?.scrollTo(this.index, this.clickable == 'jump');
    }
  }

  render() {
    return <slot />;
  }
}
