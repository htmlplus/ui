import { Component, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/utils';
import { } from '../bottom-navigation/bottom-navigation.link';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @group bottom-navigation
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-bottom-navigation-item',
  styleUrl: 'bottom-navigation-item.scss',
  shadow: true
})
export class BottomNavigationItem {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  value?: any;

  @GlobalConfig('bottomNavigationItem')
  config?;

  get attributes() {
    return {
      // 'grow': this.link.grow,
      'role': 'button',
      'state': this.state,
      'onClick': this.onClick
    }
  }

  get classes() {
    return {
      'root': true,
      // 'shift': this.link.shift,
      // [this.link.labelPosition]: true,
    }
  }

  get key() {
    return this.value ?? this;
  }

  get state() {
    return;
    // return this.key === this.link.value ? 'active' : 'deactive';
  }

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  /**
   * Watchers
   */

  /**
   * Events handler
   */

  @Bind
  onClick() {
    // this.link.change(this.key);
  }

  /**
   * Lifecycles
   */

  render() {
    return (
      <Host {...this.attributes}>
        <div class={this.classes}>
          <slot />
          <slot name="label" />
        </div>
      </Host>
    )
  }
}
