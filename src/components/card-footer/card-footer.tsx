import { Element } from '@htmlplus/element';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class CardFooter {
  render() {
    return (
      <slot />
    )
  }
}
