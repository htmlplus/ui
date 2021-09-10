import { Component, Host } from '@app/decorators';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class CardFooter {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
