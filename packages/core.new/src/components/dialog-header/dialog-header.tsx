import { Component, Host } from '@app/decorators';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogHeader {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
