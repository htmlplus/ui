import { Component, Host } from '@app/decorators';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class CardBody {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
