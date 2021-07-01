import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Animation, GlobalConfig } from '@app/utils';
import { Action, Observable } from './bottom-navigation.link';
// import { } from './toast.types';

/**
 * @internal 
 * @group bottom-navigation
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-bottom-navigation',
  styleUrl: 'bottom-navigation.scss',
  shadow: true
})
export class BottomNavigation implements ComponentInterface {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  grow?: boolean;

  /**
   * TODO
   */
  @Prop()
  hideOnScroll?: boolean;

  /**
   * TODO
   */
  @Prop()
  labelPosition?: 'bottom' | 'side' = 'bottom';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  fixed?: boolean;

  /**
   * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
   */
  @Prop()
  scrollTarget: string | HTMLElement;

  /**
   * TODO: https://vuetifyjs.com/en/components/bottom-navigation/#scroll-threshold
   */
  @Prop()
  scrollThreshold?: number;

  /**
   * TODO
   * https://vuetifyjs.com/en/components/bottom-navigation/#shift
   * https://vuetifyjs.com/en/api/v-bottom-navigation/#props-shift
   */
  @Prop()
  shift?: boolean;

  /**
   * TODO
   */
  @Prop({ mutable: true })
  value?: any;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
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
