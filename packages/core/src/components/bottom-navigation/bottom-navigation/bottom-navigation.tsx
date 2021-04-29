import { Component, Element, Host, Prop, h } from '@stencil/core';
import { AnimationV2, GlobalConfig } from '@app/utils';
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
  @Prop()
  value?: any;

  @GlobalConfig('bottomNavigation')
  config?;

  @Element()
  $host!: HTMLElement;

  animate?: AnimationV2;

  get attributes() {
    return {
      'state': 'open|close'
    }
  }

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

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

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.init();

    // if (!this.open) return;

    // this.tryShow(false, true);
  }

  disconnectedCallback() {
    // this.dispose();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
