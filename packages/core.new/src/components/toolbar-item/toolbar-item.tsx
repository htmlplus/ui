import { Attributes, Component, GlobalConfig, Property } from '@app/decorators';

/**
 * @development 
 */
@Component()
export class ToolbarItem {

  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  @GlobalConfig('toolbarItem')
  config?;

  @Attributes()
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    }
  }

  render() {
    return (
      <slot />
    )
  }
}
