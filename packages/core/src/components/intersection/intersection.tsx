import { Component, Event, EventEmitter, Host, Prop, State, getElement, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { IntersectionBehavior } from './intersection.types';

/**
 * This component provides a way to asynchronously observe changes in the intersection of a target element with an ancestor
 * element or with a top-level document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). 
 * Its basic behavior is totally similar to [standard intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
 * Its callback is executed whenever intersects with the viewport, or when the amount by which the two intersect changes by a requested amount.
 * @slot default - The default slot.
 * @examples default, lazy-image
 */
@Component({
  tag: 'plus-intersection',
  styleUrl: 'intersection.scss',
  shadow: true
})
export class Intersection {

  /**
   * It specifies how intersection behaves with its children. 
   * @value normal - It doesn't have any effect on its children and the life cycles happen normally.
   * @value appear - The children are removed from the first moment, and then they're brought back in when the element intersects with the viewport. In other words, the children are added to the DOM when the element intersects with the viewport and they are removed when the element leaves the viewport.
   * @value blink  - The children are removed from the DOM when the element intersects with the viewport and are brought back in the DOM immediately. With that said, it affects the life cycles of its children.
   */
  @Prop()
  behavior?: IntersectionBehavior = 'normal';

  /**
   * Disables the intersection's trigger.
   */
  @Prop()
  disabled?: boolean;

  /**
   * It causes the callback to be called just once for the first time.
   */
  @Prop()
  once?: boolean;

  /**
   * The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. 
   * Defaults to the browser viewport if not specified or if null.
   */
  @Prop()
  root?: Element;

  /**
   * Margin around the root. Can have values similar to the CSS [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) property, e.g. 
   * "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. 
   * This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. 
   * Defaults to all zeros.
   */
  @Prop()
  rootMargin?: string;

  /**
   * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. 
   * If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. 
   * If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. 
   * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). 
   * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
   */
  @Prop()
  threshold?: number | number[];

  /**
   * This event is triggered when its children intersects with the viewport in either coming to the viewport or going out of it.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusChange!: EventEmitter<IntersectionObserverEntry>;

  @GlobalConfig('intersection', {
    behavior: 'normal'
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

    switch (this.behavior) {

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

      case 'behavior':

        this.isVisible = this.behavior !== 'appear';

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

    this.isVisible = (this.behavior !== 'appear');

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
