import { Bind, Component, Event, EventEmitter, GlobalConfig, Host, Property, Watch } from '@app/decorators';
import { ClickOutside as ClickOutsideCore } from '@app/services';

/**
 * @slot default - The default slot.
 */
@Component()
export class ClickOutside {

  /**
   * Disable the component.
   */
  @Property()
  disabled?: boolean;

  /**
   * The callback occurs only once.
   */
  @Property()
  once?: boolean;

  /**
  * Emitted when outside of the component is clicked.
  */
  @Event({ cancelable: true })
  plusClickOutside!: EventEmitter<void>;

  @GlobalConfig('clickOutside')
  config?;

  @Host()
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
  watcher(next) {
    next ? this.unbind() : this.bind();
  }

  /**
   * Events handler
   */

  @Bind()
  onClickOutside() {
    this.once && this.unbind();
    this.plusClickOutside();
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
      <slot />
    )
  }
}
