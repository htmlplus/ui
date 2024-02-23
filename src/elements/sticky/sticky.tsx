import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Property,
  Query,
  State,
  Watch,
  toUnit
} from '@htmlplus/element';

import { PlusCore } from '@/core';

import { StickyState, StickyTop } from './sticky.types';

/**
 * @stable
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
@Element()
export class Sticky extends PlusCore {
  /**
   * Specifies the space from top.
   */
  @Property()
  top?: StickyTop = 0;

  /**
   * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
   */
  @Property()
  watcher?: boolean;

  /**
   * Specifies the z-index.
   */
  @Property()
  zIndex?: number;

  /**
   * Fires when the state is changed. To enable, set the `watcher` property to `true`.
   */
  @Event()
  plusChange!: EventEmitter<StickyState>;

  @Query('.sizer')
  $sizer!: HTMLElement;

  @State()
  state?: StickyState;

  observer?: IntersectionObserver;

  get sizer() {
    const top = toUnit(this.top);

    if (!top) return;

    return {
      top: `calc((${top} + 1px) * -1)`
    };
  }

  get style(): any {
    return {
      top: toUnit(this.top),
      zIndex: this.zIndex ?? null
    };
  }

  @Watch(['disabled', 'watcher'])
  watchers(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;
      case 'watcher':
        next ? this.bind() : this.unbind();
        break;
    }
  }

  bind() {
    if (!this.watcher) return;

    // TODO
    // if (this.disabled) return;

    this.observer = new IntersectionObserver(this.onIntersecting, { threshold: [1] });

    this.observer.observe(this.$sizer);
  }

  unbind() {
    // TODO: immediately rerenders after remove `watcher` attribute
    requestAnimationFrame(() => {
      this.state = undefined;
      this.observer?.disconnect();
    });
  }

  @Bind()
  onIntersecting(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;

    this.state = entry.intersectionRatio < 1 ? 'stick' : 'normal';

    this.plusChange(this.state);
  }

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <host state={this.watcher ? this.state : null} style={this.style}>
        <div className="sizer-wrapper">
          <div className="sizer" style={this.sizer}></div>
        </div>
        <slot />
        {this.state && (
          <div className={this.state}>
            <slot name={this.state} />
          </div>
        )}
      </host>
    );
  }
}
