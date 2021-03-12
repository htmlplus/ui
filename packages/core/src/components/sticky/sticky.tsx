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

  @GlobalConfig('sticky', {
    disabled: false,
  })

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    )
  }
}
