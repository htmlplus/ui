import { Component, ComponentInterface, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { Action, Observable, reconnect } from './tabs.link';

/**
 * @development
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs implements ComponentInterface {

  /**
   * Provides your own value.
   */
  @Prop({ mutable: true })
  value?: any;

  /**
   * You can use vertical property for vertical mode.
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Prop()
  connector?: string;

  /**
   * Fired when the value changes.
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusChange!: EventEmitter<any>;

  @Observable()
  tunnel?: any;

  @GlobalConfig('tabs')
  config?;

  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    this.tunnel = value;
  }

  @Action()
  change(value: any) {

    const event = this.plusChange.emit(value);

    if (event.defaultPrevented) return;

    this.value = value;
  }

  initialize() {
    this.broadcast(this.value);
  }

  terminate() { }

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
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host >
    )
  }
}
