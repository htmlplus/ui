import { Bind, Element, Property } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';
import {
  CAROUSEL_BUTTON_NEXT_SVG,
  CAROUSEL_BUTTON_PREVIOUS_SVG
} from './carousel-button.constants';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class CarouselButton extends CarouselChild {
  /**
   * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
   */
  @Property()
  jump?: boolean;

  /**
   * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
   */
  @Property({ reflect: true })
  type?: 'previous' | 'next' | number;

  events: EmblaEventType[] = ['init', 'reInit', 'select'];

  get content(): string {
    switch (this.type) {
      case 'next':
        return this.dir == 'ltr' ? CAROUSEL_BUTTON_NEXT_SVG : CAROUSEL_BUTTON_PREVIOUS_SVG;
      case 'previous':
        return this.dir == 'rtl' ? CAROUSEL_BUTTON_NEXT_SVG : CAROUSEL_BUTTON_PREVIOUS_SVG;
      default:
        return this.type?.toString();
    }
  }

  get disabled(): boolean {
    switch (this.type) {
      case 'next':
        return !this.api?.canScrollNext();
      case 'previous':
        return !this.api?.canScrollPrev();
      default:
        return false;
    }
  }

  @Bind()
  handleClick() {
    switch (this.type) {
      case 'next':
        this.api?.scrollNext(this.jump);
        break;
      case 'previous':
        this.api?.scrollPrev(this.jump);
        break;
      default:
        this.api?.scrollTo(this.type, this.jump);
        break;
    }
  }

  render() {
    return (
      <button disabled={this.disabled} part="button" type="button" onClick={this.handleClick}>
        <slot dangerouslySetInnerHTML={{ __html: this.content }}></slot>
      </button>
    );
  }
}
