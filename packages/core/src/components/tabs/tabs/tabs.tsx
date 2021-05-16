import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Action, Observable, reconnect } from './tabs.link';

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
  @Prop({ mutable: true })
  value?: any;

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
  wowChange!: EventEmitter<any>;

  @Observable()
  tunnel?: any;

  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Internal Methods
   */

  @Action()
  change(value: any) {

    const event = this.wowChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    const value = this[name];

    switch (name) {

      case 'connector':

        reconnect(this);

        break;

      case 'value':

        this.tunnel = value;

        break;
    }
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.tunnel = this.value;
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host >
    )
  }
}
