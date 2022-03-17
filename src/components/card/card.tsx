import { Element, Property } from '@htmlplus/element';
import { CardElevation } from './card.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Card {

  /**
   * If you want the card to have shadow, use the elevation property, 
   * And select the property value between `1` and `24`.
   */
  @Property({ reflect: true })
  elevation?: CardElevation;

  /**
   * Use the flat property to neutralize elevation.
   */
  @Property({ reflect: true })
  flat?: boolean;

  /**
   * If you want the card to have border, use the outlined property.
   */
  @Property({ reflect: true })
  outlined?: boolean;

  /**
   * Use tile property to neutralize border-radius.
   */
  @Property({ reflect: true })
  tile?: boolean;

  render() {
    return (
      <slot />
    )
  }
}
