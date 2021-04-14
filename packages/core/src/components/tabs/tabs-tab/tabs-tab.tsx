import { Component, Host, Prop, State, h } from '@stencil/core';
import { TabsTunnel } from '../tabs/tabs.tunnel';

/**
 * TODO
 * @group tabs
 * @slot - The default slot.
 */
@Component({
  tag: 'plus-tabs-tab',
  styleUrl: 'tabs-tab.scss',
  shadow: true,
})
export class TabsTab {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  value?: string;

  @State()
  @TabsTunnel.Inject()
  active?: string;

  @TabsTunnel.Inject()
  request: (value: string) => void;

  render() {
    return (
      <Host
        active={this.active && this.active === this.value}
        onClick={() => !this.disabled && this.request(this.value)}
      >
        <span>
          <slot />
        </span>
      </Host>
    );
  }
}