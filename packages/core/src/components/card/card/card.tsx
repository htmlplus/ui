import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';

/**
 * TODO
 * @internal
 * @group card
 * @slot - The default slot
 * @examples default
 */
@Component({
  tag: 'plus-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  /**
   * TODO
   */
  @Prop()
  tile?: boolean;

  @GlobalConfig('card')
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
