import { Bind, Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { createLink } from '@/services';

const { Inject } = createLink({
  crawl: true
});

/**
 * TODO: Tabs make it easy to switch between different views.
 * @slot default - The default slot.
 */
@Element()
export class TabsTab extends PlusCore {
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

  @Inject(true)
  tunnel?: any;

  @Inject()
  change?: Function = () => console.log('TODO: can not use out of tabs');

  /**
   * Events handler
   */
  @Bind()
  onClick() {
    if (this.disabled) return;
    this.change(this.value);
  }

  render() {
    return (
      <host active={this.tunnel && this.tunnel === this.value} onClick={this.onClick}>
        <span>
          <slot />
        </span>
      </host>
    );
  }
}
