import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { Bind } from '@app/utils';
import { channel } from '../tabs/tabs.channel';
import { TabsTunnel, TabsTunnelState } from '../tabs/tabs.tunnel';

/**
 * TODO
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-panels',
  styleUrl: 'tabs-panels.scss',
  shadow: true,
})
export class TabsPanels {

  /**
   * TODO
   */
  @Prop()
  connector?: string;

  @State()
  active?: string;

  get state(): TabsTunnelState {
    return {
      active: this.active
    }
  }

  @Bind
  update(active) {

    this.active = active;
  }

  @Watch('connector')
  watcher(newValue, oldValue) {

    channel.off(oldValue, this.update);

    channel.on(newValue, this.update);
  }

  componentDidLoad() {

    channel.on(this.connector, this.update);
  }

  disconnectedCallback() {

    channel.off(this.connector, this.update);
  }

  render() {
    return (
      <Host>
        <TabsTunnel.Provider
          disabled={!this.connector}
          scope={this}
          state={this.state}
        >
          <slot />
        </TabsTunnel.Provider>
      </Host>
    );
  }
}
