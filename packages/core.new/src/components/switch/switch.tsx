import { Component, Element, Event, EventEmitter, GlobalConfig, Host, Property } from '@app/decorators';

/**
 * @development
 */
@Component()
export class Switch {

  /**
   * Puts the switch in checked state
   * @model
   */
  @Property({
    reflect: true,
    mutable: true
  })
  checked?: boolean;

  /**
   * Disables the switch
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Change the appearance of the switch to put the text inside the switch
   */
  @Property({ reflect: true })
  inset?: boolean;

  /**
   * Switches the location of yes and no options
   */
  @Property({ reflect: true })
  reverse?: boolean;

  /**
   * When the switch state is changed this event triggers.
   * @model
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

    this.plusChange();
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
