import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * @internal
 */
@Component({
  tag: 'plus-switch',
  styleUrl: 'switch.scss',
  shadow: true
})
export class Switch {

  /**
   * Puts the switch in checked state
   */
  @Prop({ reflect: true })
  checked?: boolean;

  /**
   * Disables the switch
   */
  @Prop({ reflect: true })
  disabled?: boolean;

  /**
   * Change the appearance of the switch to put the text inside the switch
   */
  @Prop({ reflect: true })
  inset?: boolean;

  /**
   * Switches the location of yes and no options
   */
  @Prop({ reflect: true })
  reverse?: boolean;

  /**
   * When the switch state is changed this event triggers.
   */
  @Event()
  plusChange!: EventEmitter<void>;

  @Element()
  $host!: HTMLElement;

  @GlobalConfig('switch')
  config?;

  get inactiveElement() {

    return (
      <div class="slot off">
        <slot name="off" />
      </div>
    );
  }

  get activeElement() {

    return (
      <div class="slot on">
        <slot name="on" />
      </div>
    );
  }

  get handleElement() {

    return (
      <div class="thumb-underlay" >
        <div class="thumb" />
      </div>
    );
  }

  handler(event) {

    event.preventDefault();

    if (this.disabled) return;

    this.checked = !this.checked;

    this.plusChange.emit();
  }

  render() {

    return (
      <Host
        role="switch"
        aria-checked={`${!!this.checked}`}
        aria-disabled={`${!!this.disabled}`}
        onClick={(event) => this.handler(event)}
        onKeyPress={(event) => this.handler(event)}
      >
        <div>
          {!this.inset && this.inactiveElement}
          <div class="track">
            {this.inset && this.inactiveElement}
            {this.handleElement}
            {this.inset && this.activeElement}
          </div>
          {!this.inset && this.activeElement}
        </div>
      </Host>
    );
  }
}
