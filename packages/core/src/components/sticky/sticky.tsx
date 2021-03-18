import {Element, Component, Host, EventEmitter, Prop, Event, h} from "@stencil/core";
import {GlobalConfig} from '@app/services';
import * as Utils from '@app/utils';
import {StickyTop} from './sticky.types';

/**
 * Component content is positioned based on the user's scroll position.
 * @slot - The default slot
 * @examples default
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
  @Prop({reflect: true})
  disabled?: boolean;

  /**
   * Specifies the space from top.
   */
  @Prop()
  top?: StickyTop;

  /**
   * Specifies the z-index of the sticky.
   */
  @Prop()
  zIndex?: number;

  @GlobalConfig('sticky')
  config;

  @Event({
    bubbles: false,
    cancelable: true
  })

  attribute!: EventEmitter<String>;

  @Element()
  host: HTMLElement;

  get attributes() {
    return {
      style: this.styles,
    }
  }

  get styles() {
    return {
      top: Utils.toUnit(this.top),
      zIndex: this.top ? String(this.zIndex) : null,
    }
  }

  connectedCallback() {
    const observer = new window.IntersectionObserver((entries: any) => {
      if (!entries[0].isIntersecting)
        this.attribute.emit('sticky')
      else
        this.attribute.emit('normal')
    });

    // Here observe whether or not that node is in the viewport
    observer.observe(this.host);

    // unmount
    return () => observer.unobserve(this.host);
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="sticky">
          <slot/>
        </div>
      </Host>
    )
  }
}
