import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { CardElevation } from './card.types';

/**
 * TODO
 * @development
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
  elevation?: CardElevation;

  /**
   * TODO
   */
  @Prop()
  flat?: boolean;

  /**
   * TODO
   */
  @Prop()
  outlined?: boolean;

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
    )
  }
}
