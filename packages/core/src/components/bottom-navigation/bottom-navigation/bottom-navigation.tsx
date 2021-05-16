import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { AnimationV2, GlobalConfig } from '@app/utils';
import { Action, Observable } from './bottom-navigation.link';
// import { } from './toast.types';

/**
 * TODO
 * https://vuetifyjs.com/en/api/v-bottom-navigation/#props-input-value
 * https://vuetifyjs.com/en/api/v-bottom-navigation/#props-mandatory
 * @internal 
 * @group bottom-navigation
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-bottom-navigation',
  styleUrl: 'bottom-navigation.scss',
  shadow: true
})
export class BottomNavigation {

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
  scrollTarget: string;

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
  wowChange!: EventEmitter<any>;

  @GlobalConfig('bottomNavigation')
  config?;

  @Element()
  $host!: HTMLElement;

  animate?: AnimationV2;

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
  change(value: any) {

    const event = this.wowChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;

    this.broadcast();
  }

  init() {
    this.animate = new AnimationV2({
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
    })
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

    // this.link.grow = this.grow;
    // this.link.labelPosition = this.labelPosition;
    // this.link.shift = this.shift;

    this.init();

    // if (!this.open) return;

    // this.tryShow(false, true);
  }

  disconnectedCallback() {
    // this.dispose();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host>
    )
  }
}
