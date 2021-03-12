import {Component, Host, Prop, h} from "@stencil/core";
import {GlobalConfig} from '@app/services';

/**
 * Component content is positioned based on the user's scroll position.
 * @examples disabled
 */

@Component({
  tag: 'plus-sticky',
  styleUrl: 'sticky.scss'
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

  position() {
    return this.disabled ? 'position-unset' : 'position-sticky'
  }

  render() {
    return (
      <Host>
        <div class={`${this.position()}`}>
          <slot/>
        </div>
      </Host>
    )
  }
}
