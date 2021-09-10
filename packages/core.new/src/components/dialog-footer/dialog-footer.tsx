import { Component, Host } from '@app/decorators';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogFooter {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
