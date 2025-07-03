import { Bind } from '@htmlplus/element';

import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';

import { CarouselPlugin } from './base';

export class CarouselPluginTween extends CarouselPlugin {
  private get active(): boolean {
    return !!this.instance.tweenFactorBase
  }

  public events = {
    'reInit': this.handleEvent,
    'scroll': this.handleEvent,
    'slideFocus': this.handleEvent,
  }

  public initialize() {
    if (!this.active) return;

    super.initialize();

    this.handleEvent(this.api, 'select');
  }

  public terminate() {
    super.terminate();

    this.api.slideNodes().forEach((slide) => {
      slide.style.removeProperty('--plus-carousel-factor-1');
      slide.style.removeProperty('--plus-carousel-factor-2');
    });
  }

  @Bind()
  private handleEvent(event: EmblaCarouselType, eventName: EmblaEventType) {
    const engine = this.api.internalEngine();

    const isScrollEvent = eventName === 'scroll';

    const slidesInView = this.api.slidesInView();

    const scrollProgress = this.api.scrollProgress();

    const scrollSnapList = this.api.scrollSnapList();

    const factor = this.instance.tweenFactorBase * scrollSnapList.length;

    scrollSnapList.forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      engine.slideRegistry[snapIndex].forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        engine.options.loop && engine.slideLooper.loopPoints.forEach((item) => {
          const target = item.target();

          if (target === 0) return;

          if (slideIndex !== item.index) return;

          const sign = Math.sign(target);

          diffToTarget = scrollSnap + sign * (1 - sign * scrollProgress);
        });

        const factor1 = diffToTarget * factor;

        const factor2 = Math.min(Math.max(1 - Math.abs(factor1), 0), 1);

        const style = this.api.slideNodes()[slideIndex].style;

        style.setProperty('--plus-carousel-factor-1', factor1.toFixed(5));

        style.setProperty('--plus-carousel-factor-2', factor2.toFixed(5));
      });
    });
  }
}
