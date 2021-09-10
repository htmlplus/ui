import { Component, GlobalConfig, Host } from '@app/decorators';

/**
 * @development
 */
@Component()
export class Ripple {

  @GlobalConfig('ripple')
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
