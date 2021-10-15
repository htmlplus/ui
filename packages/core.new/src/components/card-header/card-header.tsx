import { Component } from '@app/decorators';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class CardHeader {
  render() {
    return (
      <slot />
    )
  }
}
