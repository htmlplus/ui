import { Component, Element, Event, EventEmitter, GlobalConfig, Host, Property } from '@app/decorators';
import { Animation } from '@app/services';
import { Action, Observable } from './bottom-navigation.link';

/**
 * @development 
 * @slot default - The default slot.
 */
@Component()
export class BottomNavigation {

  /**
   * TODO
   */
  @Property({ reflect: true })
  grow?: boolean;

  /**
   * TODO
   */
  @Property()
  hideOnScroll?: boolean;

  /**
   * TODO
   */
  @Property()
  labelPosition?: 'bottom' | 'side' = 'bottom';

  /**
   * TODO
   */
  @Property({ reflect: true })
  fixed?: boolean;

  /**
   * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
   */
  @Property()
  scrollTarget: string | HTMLElement;

  /**
   * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
   */
  @Property()
  scrollThreshold?: number;

  /**
   * TODO
   * https://vuetifyjs.com/en/components/bottom-navigation/#shift
   * https://vuetifyjs.com/en/api/v-bottom-navigation/#props-shift
   */
  @Property()
  shift?: boolean;

  /**
   * TODO
   */
  @Property({ mutable: true })
  value?: any;

  /**
   * TODO
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<any>;

  @GlobalConfig('bottomNavigation')
  config?;

  @Element()
  $host!: HTMLElement;

  animate?: Animation;

  @Observable()
  tunnel?: any;

  get attributes() {
    return {
      'state': 'open'
    }
  }

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  broadcast() {
    this.tunnel = {
      value: this.value,
      grow: this.grow,
      labelPosition: this.labelPosition,
      shift: this.shift,
    }
  }

  @Action()
  request(value: any) {

    const event = this.plusChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;

    this.broadcast();
  }

  initialize() {

    this.animate = new Animation({
      key: 'state',
      source: () => this.$host,
      target: () => this.$host,
      // state: this.open ? 'entered' : 'leaved',
      states: {
        enter: 'open',
        entering: 'opening',
        entered: 'opened',
        leave: 'close',
        leaving: 'closing',
        leaved: 'closed',
      }
    });

    this.broadcast();
  }

  terminate() {
    this.animate?.dispose();
  }

  /**
   * Watchers
   */

  // TODO
  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    // const value = this[name];

    switch (name) {

      case 'grow':
      case 'labelPosition':
      case 'shift':
        this.broadcast();
        break;
    }
  }

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host>
    )
  }
}
