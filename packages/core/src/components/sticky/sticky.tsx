import { Component, Host, Prop, h } from "@stencil/core";
import { GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import { StickyTop } from './sticky.types';

/**
 * Component content is positioned based on the user's scroll position.
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
  @Prop({ reflect: true })
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

  get attributes() {
    return {
      style: this.styles
    }
  }

  get styles() {
    return {
      top: Utils.toUnit(this.top),
      zIndex: this.top ? String(this.zIndex) : null,
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host>
    )
  }
}
