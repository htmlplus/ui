import { Attributes, Component, GlobalConfig, Property, State } from '@app/decorators';
import { createLink } from '@app/services';

const { Inject } = createLink('Tabs');

/**
 * TODO: Tabs make it easy to switch between different views.
 * @slot default - The default slot.
 */
@Component()
export class TabsTab {

  /**
   * A Tab can be disabled by setting disabled property.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Provides your own value.
   */
  @Property()
  value?: any;

  @GlobalConfig('tabsTab')
  config?;

  @State()
  @Inject()
  tunnel?: any;

  @Inject()
  change?: Function = () => console.log('TODO: can not use out of tabs');

  @Attributes()
  get attributes() {
    return {
      'active': this.tunnel && this.tunnel === this.value,
      'onClick': () => !this.disabled && this.change(this.value)
    }
  }

  render() {
    return (
      <span>
        <slot />
      </span>
    )
  }
}