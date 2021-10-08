import { Component } from '@app/decorators';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogFooter {
  render() {
    return (
      <slot />
    )
  }
}
