import { Component, Host, Prop, State, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/utils';
import { Inject } from '../bottom-navigation/bottom-navigation.link';

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

  @Inject()
  change?: Function = () => console.log('TODO: can not use out of bottom navigation');

  @Inject()
  @State()
  tunnel?: any;

  get attributes() {
    return {
      'grow': this.tunnel?.grow,
      'role': 'button',
      'state': this.state,
      'onClick': this.onClick
    }
  }

  get classes() {
    return {
      'root': true,
      'shift': this.tunnel?.shift,
      [this.tunnel?.labelPosition]: true,
    }
  }

  get key() {
    return this.value ?? this;
  }

  get state() {
    return this.key === this.tunnel?.value ? 'active' : 'deactive';
  }

  /**
   * Events handler
   */

  @Bind
  onClick() {

    if (this.disabled) return;

    this.change(this.key);
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
