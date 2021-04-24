import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { channel } from './tabs.channel';
import { TabsTunnel, TabsTunnelState } from './tabs.tunnel';

/**
 * TODO
 * @development
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {

  /**
   * TODO
   */
  @Prop()
  value?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * TODO
   */
  @Prop()
  connector?: string;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  wowChange!: EventEmitter<string>;

  get state(): TabsTunnelState {
    return {
      active: this.value,
      request: this.request
    }
  }

  request = (value: string) => {

    const event = this.wowChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;

    channel.send(this.connector, this.value);
  }

  render() {
    return (
      <Host>
        <TabsTunnel.Provider state={this.state} scope={this}>
          <slot />
        </TabsTunnel.Provider>
      </Host >
    );
  }
}
