import { Bind, Element, Property, Watch } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { createLink } from '@/services';

const { Inject, reconnect } = createLink({
  crawl: true,
  namespace: ({ connector }) => (connector ? `Drawer:${connector}` : undefined)
});

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Element()
export class DrawerToggler extends PlusCore {
  /**
   * This property helps you to attach which drawer this toggler controls.
   * It doesn't matter where the drawer toggler is.
   * You can put the drawer's toggler inside or outside of the drawer.
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of drawer');

  @Inject(true)
  tunnel?: boolean;

  get text() {
    return this.tunnel ? 'Close' : 'Open';
  }

  /**
   * Watchers
   */

  @Watch(['connector'])
  watcher() {
    reconnect(this);
  }

  /**
   * Events handler
   */
  @Bind()
  onClick() {
    this.toggle();
  }

  render() {
    return (
      <host role="button" state={this.tunnel ? 'open' : 'close'} onClick={this.onClick}>
        <slot>{this.text}</slot>
      </host>
    );
  }
}
