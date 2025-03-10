import { Bind, Element, Event, EventEmitter, Property, Provider, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { ScrollSpyContext } from './scroll-spy.context';

/**
 * @slot default - The default slot.
 */
@Element()
export class ScrollSpy extends PlusCore {
  /**
   * TODO
   */
  @Property()
  connector?: string;

  /**
   * TODO
   */
  @Property()
  rootMargin?: string = '0px 0px -25%';

  /**
   * TODO
   */
  @Property()
  selector?: string = '[id]';

  /**
   * TODO
   */
  @Property()
  smoothScroll?: boolean;

  /**
   * TODO
   */
  @Property()
  threshold?: number[] = [0.1, 0.5, 1];

  /**
   * TODO
   */
  @Event()
  plusChange!: EventEmitter<HTMLElement>;

  @State()
  tick: number = 0;

  $current?: HTMLElement;

  $elements?: HTMLElement[];

  observer?: IntersectionObserver;

  previousScrollDataVisibleEntryTop: number = 0;

  previousScrollDataParentScrollTop: number = 0;

  @Provider('scrollSpy.connector')
  get state(): ScrollSpyContext {
    return {
      current: this.$current,
      elements: this.$elements
    };
  }

  get $root() {
    return getComputedStyle(this.$host).overflowY === 'visible' ? undefined : this.$host;
  }

  update(target: HTMLElement) {
    if (this.$current === target) return;

    this.tick++;

    this.$current = target;

    this.plusChange(target);
  }

  @Bind()
  observerCallback(entries: IntersectionObserverEntry[]): void {
    const parentScrollTop = (this.$root || document.documentElement).scrollTop;

    const userScrollsDown = parentScrollTop >= this.previousScrollDataParentScrollTop;

    this.previousScrollDataParentScrollTop = parentScrollTop;

    for (const entry of entries) {
      const target = entry.target as HTMLElement;

      if (!entry.isIntersecting) continue;

      const entryIsLowerThanPrevious = target.offsetTop >= this.previousScrollDataVisibleEntryTop;

      if (userScrollsDown && entryIsLowerThanPrevious) {
        this.previousScrollDataVisibleEntryTop = target.offsetTop;

        this.update(target);

        if (!parentScrollTop) return;

        continue;
      }

      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        this.previousScrollDataVisibleEntryTop = target.offsetTop;

        this.update(target);
      }
    }
  }

  updatedCallback() {
    this.observer?.disconnect();

    const options = {
      root: this.$root,
      threshold: this.threshold,
      rootMargin: this.rootMargin
    };

    this.observer = new IntersectionObserver(this.observerCallback, options);

    this.$elements = Array.from(this.$host.querySelectorAll(this.selector));

    this.$elements.forEach(($element) => {
      this.observer.observe($element);
    });
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  render() {
    return <slot onSlotChange={() => this.tick++} />;
  }
}
