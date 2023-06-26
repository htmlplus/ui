import { Element, Event, EventEmitter, Property, Watch } from '@htmlplus/element';

import { PlusBase } from '@app/core';
import { createLink } from '@app/services';

const { Action, Observable, reconnect } = createLink({
  crawl: false,
  namespace: ({ connector }) => (connector ? `Tabs:${connector}` : undefined)
});

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class Tabs extends PlusBase {
  /**
   * Provides your own value.
   */
  @Property()
  value?: any;

  /**
   * You can use vertical property for vertical mode.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use
   * this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  /**
   * Fired when the value changes.
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<any>;

  @Observable()
  tunnel?: any;

  @Watch(['connector', 'value'])
  watcher(next, prev, name) {
    switch (name) {
      case 'connector':
        reconnect(this);
        break;
      case 'value':
        this.tunnel = next;
        break;
    }
  }

  broadcast(value: any) {
    this.tunnel = value;
  }

  @Action()
  change(value: any) {
    const event = this.plusChange(value);
    if (event.defaultPrevented) return;
    this.value = value;
    this.broadcast(this.value);
  }

  initialize() {
    this.broadcast(this.value);
  }

  connectedCallback() {
    this.initialize();
  }

  render() {
    return <slot />;
  }
}
