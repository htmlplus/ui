import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Action, Observable } from './tabs.link';

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

  @Observable()
  value1?: string;

  get attributes() {
    return {

    }
  }

  @Action()
  request(value: string) {

    const event = this.wowChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;

    this.value1 = value;
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host >
    )
  }
}
