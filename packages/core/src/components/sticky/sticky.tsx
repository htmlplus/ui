import {Component, Host, Prop, h} from "@stencil/core";
import {GlobalConfig} from '@app/services';

/**
 * Component content is positioned based on the user's scroll position.
 * @examples disabled
 */

@Component({
  tag: 'plus-sticky',
  styleUrl: 'sticky.scss',
  shadow: true
})

export class Sticky {
  /**
   * Specifies the disable sticky mode
   */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /**
   * Specifies the space from top
   */
  @Prop({reflect: true})
  top?: number = 0;

  /**
   * Specifies the z-index
   */
  @Prop({reflect: true})
  innerZ?: number = 1;

  @GlobalConfig('sticky', {
    disabled: false,
  })

  get styles() {
    return {
      '--plus-sticky-top': this.top ? String(this.top) + 'px' : null,
      '--plus-sticky-inner-z': this.innerZ ? String(this.innerZ) : null
    }
  }

  render() {
    return (
      <Host style={this.styles}>
        <slot/>
      </Host>
    )
  }
}
