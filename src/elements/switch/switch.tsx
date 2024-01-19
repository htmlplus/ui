import { Bind, Element, Event, EventEmitter, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

@Element()
export class Switch extends PlusCore {
  /**
   * Puts the switch in checked state.
   * @model
   */
  @Property({ reflect: true })
  checked?: boolean;

  /**
   * Disables the switch.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * When the switch state is changed this event triggers.
   * @model
   */
  @Event()
  plusChange!: EventEmitter<void>;

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.plusChange();
  }

  @Bind()
  onClick(event) {
    event.preventDefault();
    this.toggle();
  }

  @Bind()
  onKeyDown(event) {
    if (event.key != ' ' && event.key != 'Enter') return;
    event.preventDefault();
    this.toggle();
  }

  render() {
    return (
      <host
        aria-checked={`${!!this.checked}`}
        aria-disabled={`${!!this.disabled}`}
        role="switch"
        tabIndex={0}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
      >
        <div className="root" part="root">
          <div className="slot on" part="slot on">
            <slot name="on" />
          </div>
          <div className="handle" part="handle">
            <slot name="handle" />
          </div>
          <div className="slot off" part="slot off">
            <slot name="off" />
          </div>
        </div>
      </host>
    );
  }
}
