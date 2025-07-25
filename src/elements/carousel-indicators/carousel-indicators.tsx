import { Element, Property, Style, classes } from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 */
@Element()
export class CarouselIndicators extends CarouselChild {
  /**
   * Controls what happens when you click an indicator.
   * If `true`, it smoothly moves to the slide,
   * and if set to `jump`, it instantly jumps without animation.
   */
  @Property({ reflect: true })
  clickable?: boolean | 'jump';

  /**
   * Allows indicators to wrap around the carousel when reaching the beginning or end.
   */
  @Property({ reflect: true })
  infinity?: boolean;

  /**
   * Displays slide numbers inside the indicators.
   */
  @Property({ reflect: true })
  numbers?: boolean;

  events: EmblaEventType[] = ['init', 'reInit', 'select'];

  get indexes(): number[] {
    return this.api?.slideNodes().map((_, index) => index) || [];
  }

  scrollTo(index: number) {
    if (this.clickable) {
      this.api?.scrollTo(index, this.clickable === 'jump');
    }
  }

  @Style()
  get style() {
    return {
      '--plus-carousel-indicators-selected': this.api?.selectedScrollSnap() || 0
    };
  }

  getClass(index: number) {
    const selected = this.api.selectedScrollSnap();
    return classes(
      {
        selected: selected === index,
        prev: selected > index ? Math.abs(selected - index) : false,
        next: selected < index ? Math.abs(selected - index) : false
      },
      true
    );
  }

  render() {
    return (
      <div className="root" part="root">
        {this.indexes.map((index) => (
          <button
            part="indicator"
            type="button"
            className={this.getClass(index)}
            onClick={() => this.scrollTo(index)}
          >
            {this.numbers ? index + 1 : ''}
          </button>
        ))}
      </div>
    );
  }
}
