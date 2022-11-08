import { Attributes, Bind, Element, Event, EventEmitter, Property } from '@htmlplus/element';

@Element()
export class Switch {
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

  @Attributes()
  get attributes() {
    return {
      'aria-checked': `${!!this.checked}`,
      'aria-disabled': `${!!this.disabled}`,
      'role': 'switch',
      'tabindex': '0',
      'onClick': this.onClick,
      'onKeyDown': this.onKeyDown
    }
  }

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
  onKeyDown (event) {
    if (event.key != ' ' && event.key != 'Enter') return;
    event.preventDefault();
    this.toggle();
  }

  render() {
    return (
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
    )
  }
}