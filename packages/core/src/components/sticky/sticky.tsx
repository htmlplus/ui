import { Component, Event, EventEmitter, Host, Prop, State, h } from "@stencil/core";
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import { StickyState, StickyTop } from './sticky.types';

/**
 * Component content is positioned based on the user's scroll position.
 * @slot - The default slot.
 * @examples default, top, state-attribute
 */
@Component({
  tag: 'plus-sticky',
  styleUrl: 'sticky.scss',
  shadow: true
})
export class Sticky {

  /**
   * Specifies the disable sticky mode.
   */
  @Prop()
  disabled?: boolean;

  /**
   * Specifies the space from top.
   */
  @Prop()
  top?: StickyTop;

  /**
   * If you use `state` property or `plusChange` event, you shold set this property to `true`.
   */
  @Prop()
  watcher?: boolean;

  /**
   * Specifies the z-index of the sticky.
   */
  @Prop()
  zIndex?: number;

  /**
   * When the component state is changed this event triggers. 
   * To enable this event you shold set `watcher` property to `true`.
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusChange!: EventEmitter<StickyState>;

  @GlobalConfig('sticky')
  config;

  $element!: HTMLElement;

  @State()
  state?: StickyState = 'normal';

  observer?: IntersectionObserver;

  get attributes() {

    const attributes = {
      style: this.styles
    };

    if (this.watcher) {
      attributes['state'] = this.state;
    }

    return attributes;
  }

  get sizer() {
    return `calc((${Utils.toUnit(this.top)} + 1px) * -1)`;
  }

  get styles() {
    return {
      top: Utils.toUnit(this.top),
      zIndex: this.top ? String(this.zIndex) : null,
    }
  }

  /**
   * Internal Methods
   */

  bind() {

    if (!this.watcher || this.disabled) return;

    this.observer = new IntersectionObserver(this.onIntersecting, { threshold: [1] });

    this.observer.observe(this.$element);
  }

  unbind() {
    this.observer?.disconnect();
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return;

    switch (name) {

      case 'disabled':

        this.disabled ? this.unbind() : this.bind();

        break;

      case 'watcher':

        this.watcher ? this.bind() : this.unbind();

        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onIntersecting(entries: IntersectionObserverEntry[]) {

    const [entry] = entries;

    this.state = entry.intersectionRatio < 1 ? 'sticky' : 'normal';

    this.plusChange.emit(this.state);
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="sizer-wrapper">
          <div
            class="sizer"
            ref={(element) => this.$element = element}
            style={{ top: this.sizer }}
          />
        </div>
        <slot />
      </Host>
    )
  }
}
