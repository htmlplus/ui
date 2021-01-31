import { Component, Event, EventEmitter, Host, Prop, State, getElement, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { IntersectionAppearance } from './intersection.types';

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
  appearance?: IntersectionAppearance = 'normal';

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

  @GlobalConfig('intersection', {
    appearance: 'normal'
  })
  config?;

  @State()
  isIntersecting?: boolean;

  @State()
  isVisible?: boolean;

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

    // TODO
    this.isVisible = entry.isIntersecting;

    this.isIntersecting = entry.isIntersecting;

    this.plusChange.emit(entry);

    if (!this.isIntersecting || !this.once) return;

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
      <Host intersecting={this.isIntersecting}>
        {this.isVisible && <slot />}
      </Host>
    )
  }
}
