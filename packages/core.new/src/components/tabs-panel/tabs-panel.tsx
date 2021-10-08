import { Attributes, Component, GlobalConfig, Property, State } from '@app/decorators';
import { createLink } from '@app/services';

const { Inject } = createLink('Tabs');

/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
@Component()
export class TabsPanel {

  /**
   * Provides your own value.
   */
  @Property()
  value?: any;

  @State()
  @Inject()
  tunnel?: any;

  @GlobalConfig('tabsPanel')
  config?;

  @Attributes()
  get attributes() {
    return {
      'active': this.tunnel && this.tunnel === this.value
    }
  }

  render() {
    return (
      <slot />
    )
  }
}