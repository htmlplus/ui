import { Component, Event, EventEmitter, Host, Prop, State, getElement, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { IntersectionAppearance } from './intersection.types';

/**
 * TODO
 * @slot - The default slot
 * @examples default, image
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
  disabled?: boolean;

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

  get $host() {
    return getElement(this);
  }

  get attributes() {
    return {
      intersecting: this.isIntersecting
    }
  }

  get isDisconnected() {
    return this.once && this.isIntersecting;
  }

  get option() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }
  }

  /**
   * Internal Methods
   */

  bind() {

    this.observer = new IntersectionObserver(this.onIntersecting, this.option);

    this.observer.observe(this.$host);
  }

  unbind() {

    this.observer?.disconnect();

    delete this.observer;
  }

  rebind() {

    this.unbind();

    this.bind();
  }

  setVisible() {

    switch (this.appearance) {

      case 'appear':

        this.isVisible = this.isIntersecting;

        break;

      case 'blink':

        if (!this.isIntersecting) return;

        this.isVisible = false;

        requestAnimationFrame(() => this.isVisible = true);

        break;

      default:

        this.isVisible = true;

        break;
    }
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return;

    switch (name) {

      case 'appearance':

        this.isVisible = this.appearance !== 'appear';

        break;

      case 'disabled':

        this.disabled && this.unbind();

        !this.disabled && !this.isDisconnected && this.bind();

        break;

      case 'once':

        break;

      case 'root':
      case 'rootMargin':
      case 'threshold':

        !this.disabled && !this.isDisconnected && this.rebind();

        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onIntersecting(entries: IntersectionObserverEntry[]) {

    const [entry] = entries;

    this.isIntersecting = entry.isIntersecting;

    this.setVisible();

    this.plusChange.emit(entry);

    if (!this.isIntersecting || !this.once) return;

    this.unbind();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.isVisible = (this.appearance !== 'appear');

    !this.disabled && this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        {this.isVisible && <slot />}
      </Host>
    )
  }
}
