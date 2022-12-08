import { Attributes, Element, Event, EventEmitter, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { Animation } from '@app/services';

// const { Action, Observable } = createLink('BottomNavigation');

/**
 * @development
 * @group bottom-navigation
 * @slot default - The default slot.
 */
@Element()
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
  @Property()
  value?: any;

  /**
   * TODO
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<any>;

  animate?: Animation;

  // @Observable()
  tunnel?: any;

  @Attributes()
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

  // @Action()
  request(value: any) {

    const event = this.plusChange(value);

    if (event.defaultPrevented) return;

    this.value = value;

    this.broadcast();
  }

  initialize() {

    this.animate = new Animation({
      key: 'state',
      source: () => Helpers.host(this),
      target: () => Helpers.host(this),
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
  @Watch(['grow', 'labelPosition', 'shift'])
  watcher() {
    this.broadcast();
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
      <slot />
    )
  }
}
