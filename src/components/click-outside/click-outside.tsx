import { Bind, Element, Event, EventEmitter, Property, Watch, off, on } from '@htmlplus/element';

import { PlusCore } from '@app/core';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class ClickOutside extends PlusCore {
  /**
   * A boolean value indicating that events of this type will be dispatched to the registered
   * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
   */
  @Property()
  capture?: boolean;

  /**
   * Disables the component functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * The event fires only once.
   */
  @Property()
  once?: boolean;

  /**
   * Fires when outside of the component is clicked.
   */
  @Event({ cancelable: true })
  plusClickOutside!: EventEmitter<void>;

  get options() {
    return {
      capture: this.capture
    };
  }

  @Watch(['capture', 'disabled', 'once'])
  watcher(next, prev, name) {
    switch (name) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;
      case 'capture':
      case 'once':
        this.unbind();
        this.bind();
        break;
    }
  }

  bind() {
    on(this.$host, 'outside', this.onClickOutside, this.options);
  }

  unbind() {
    off(this.$host, 'outside', this.onClickOutside, this.options);
  }

  @Bind()
  onClickOutside() {
    if (this.once) this.unbind();
    this.plusClickOutside();
  }

  connectedCallback() {
    if (this.disabled) return;
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return <slot />;
  }
}
