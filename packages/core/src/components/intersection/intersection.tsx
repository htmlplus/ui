import { Component, Event, EventEmitter, Host, Prop, State, getElement, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';

/**
 * TODO
 */
@Component({
  tag: 'plus-intersection',
  styleUrl: 'intersection.scss',
  shadow: true
})
export class Intersection {

  /**
   * TODO
   */
  @Prop()
  once?: boolean;

  /**
   * TODO
   */
  @Prop()
  root?: Element;

  /**
   * TODO
   */
  @Prop()
  rootMargin?: string;

  /**
   * TODO
   */
  @Prop()
  threshold?: number | number[];

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusChange!: EventEmitter<IntersectionObserverEntry>;

  @GlobalConfig('intersection')
  config?;

  @State()
  intersecting?: boolean;

  observer?: IntersectionObserver;

  get option() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }
  }

  @Bind
  callback(entries: IntersectionObserverEntry[]) {

    const [entry] = entries;

    this.intersecting = entry.isIntersecting;

    this.plusChange.emit(entry);

    if (!this.intersecting || !this.once) return;

    this.disconnectedCallback();
  }

  connectedCallback() {

    this.observer = new IntersectionObserver(this.callback, this.option);

    this.observer.observe(getElement(this));
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  render() {
    return (
      <Host intersecting={this.intersecting}>
        {this.intersecting && <slot />}
      </Host>
    )
  }
}
