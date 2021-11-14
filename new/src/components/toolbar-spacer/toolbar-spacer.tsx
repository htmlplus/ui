import { Attributes, Component, GlobalConfig, Property } from '@app/decorators';

/**
 * @development 
 */
@Component()
export class ToolbarSpacer {

  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  @GlobalConfig('toolbarSpacer')
  config?;

  @Attributes()
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    }
  }
}
