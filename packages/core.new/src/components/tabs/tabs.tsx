import { Attributes, Component, Event, EventEmitter, GlobalConfig, Property } from '@app/decorators';
import { createLink } from '@app/services';

const { Action, Observable, reconnect } = createLink('Tabs');

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class Tabs {

  /**
   * Provides your own value.
   */
  @Property({ mutable: true })
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

  @GlobalConfig('tabs')
  config?;

  @Attributes()
  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    this.tunnel = value;
  }

  @Action()
  change(value: any) {

    const event = this.plusChange(value);

    if (event.defaultPrevented) return;

    this.value = value;
  }

  initialize() {
    this.broadcast(this.value);
  }

  terminate() { }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    const value = this[name];

    switch (name) {

      case 'connector':

        reconnect(this);

        break;

      case 'value':

        this.tunnel = value;

        break;
    }
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <slot />
    )
  }
}
