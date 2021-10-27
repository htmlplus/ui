import { Component, GlobalConfig, Property } from '@app/decorators';

/**
 * @development 
 * @slot default - The default slot.
 */
@Component()
export class Toolbar {

  /**
   * TODO
   */
  // @Property()
  gutter?: number;

  /**
   * TODO
   */
  // @Property()
  gutterX?: number;

  /**
   * TODO
   */
  // @Property()
  gutterY?: number;

  /**
   * TODO
   */
  @Property({ reflect: true })
  wrap?: boolean = true;

  @GlobalConfig('toolbar')
  config?;

  render() {
    return (
      <slot />
    )
  }
}
