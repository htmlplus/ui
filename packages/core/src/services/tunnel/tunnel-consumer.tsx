import { Component, Prop, State, Element } from '@stencil/core';
import { SubscribeType } from './tunnel.types';

/**
 * @internal
 */
@Component({
  tag: 'plus-tunnel-consumer'
})
export class TunnelConsumer {

  @Prop()
  context: { [key: string]: any } = {};

  @Prop()
  renderer: Function = () => null;

  @Prop()
  subscribe?: SubscribeType;

  @State()
  unsubscribe?: () => void;

  @Element()
  $host!: HTMLElement;

  connectedCallback() {
    if (this.subscribe != null) {
      this.unsubscribe = this.subscribe(this.$host, ['context']);
    }
  }

  disconnectedCallback() {
    if (this.unsubscribe != null) {
      this.unsubscribe();
    }
  }

  render() {
    return this.renderer({
      ...this.context
    });
  }
}