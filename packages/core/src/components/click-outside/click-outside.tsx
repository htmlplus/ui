import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { Bind, GlobalConfig, ClickOutside as ClickOutsideCore } from '@app/utils';

/**
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-click-outside',
  styleUrl: 'click-outside.scss',
  shadow: true
})
export class ClickOutside {

  /**
   * Disable the component.
   */
  @Prop()
  disabled?: boolean;

  /**
   * The callback occurs only once.
   */
  @Prop()
  once?: boolean;

  /**
  * Emitted when outside of the component is clicked.
  */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusClickOutside!: EventEmitter<void>;

  @GlobalConfig('clickOutside')
  config?;

  @Element()
  $host!: HTMLElement;

  /**
   * Internal Methods
   */

  bind() {
    ClickOutsideCore.add(this.$host, this.onClickOutside);
  }

  unbind() {
    ClickOutsideCore.remove(this.$host);
  }

  /**
   * Watchers
   */

  @Watch('disabled')
  disabledWatcher() {
    this.disabled ? this.unbind() : this.bind();
  }

  /**
   * Events handler
   */

  @Bind
  onClickOutside() {
    this.once && this.unbind();
    this.plusClickOutside.emit();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    !this.disabled && this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
