import { Bind, Element, Property, State, Watch } from '@htmlplus/element';

import { PlusCore } from '@app/core';
import { createLink } from '@app/services';

const { Inject, reconnect } = createLink({
  crawl: true,
  namespace: ({ connector }) => (connector ? `Dialog:${connector}` : undefined)
});

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Element()
export class DialogToggler extends PlusCore {
  /**
   * This property helps you to attach which dialog this toggler controls.
   * It doesn't matter where the dialog toggler is.
   * You can put the dialog's toggler inside or outside of the dialog.
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of dialog');

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

// TODO
// <slot name="close" />
// <slot name="open" />
