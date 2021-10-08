import { Component, GlobalConfig } from '@app/decorators';

/**
 * @development
 */
@Component()
export class Ripple {

  @GlobalConfig('ripple')
  config?;

  render() {
    return (
      <slot />
    )
  }
}
