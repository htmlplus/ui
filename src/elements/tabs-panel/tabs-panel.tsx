import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { createLink } from '@/services';

const { Inject } = createLink({
  crawl: true
});

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * 
 * @slot default - The default slot.
 */
@Element()
export class TabsPanel extends PlusCore {
  /**
   * Provides your own value.
   */
  @Property()
  value?: any;

  @Inject(true)
  tunnel?: any;

  render() {
    return (
      <host active={this.tunnel && this.tunnel === this.value}>
        <slot />
      </host>
    );
  }
}
