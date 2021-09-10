import { Bind, Component, Event, EventEmitter, GlobalConfig, Host, Property, State, Watch } from "@app/decorators";
import { toUnit } from '@app/helper';
import { StickyState, StickyTop } from './sticky.types';

/**
 * @slot default - The default slot.
 * @slot normal  - The normal slot.
 * @slot sticky  - The sticky slot.
 */
@Component()
export class Sticky {

  /**
   * Disables the sticky mode.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the space from top.
   */
  @Property()
  top?: StickyTop = 1;

  /**
   * If you use `state` property or `plusChange` event, you shold set this property to `true`.
   */
  @Property()
  watcher?: boolean;

  /**
   * Specifies the z-index of the sticky.
   */
  @Property()
  zIndex?: number;

  /**
   * When the component state is changed this event triggers. 
   * To enable this event you shold set `watcher` property to `true`.
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<StickyState>;

  @GlobalConfig('sticky')
  config;

  $element!: HTMLElement;

  @State()
  state?: StickyState = 'normal';

  observer?: IntersectionObserver;

  get attributes() {

    const attributes = {
      style: this.styles
    };

    if (this.watcher) {
      attributes['state'] = this.state;
    }

    return attributes;
  }

  get sizer() {
    return `calc((${toUnit(this.top)} + 1px) * -1)`;
  }

  get styles() {
    return {
      top: toUnit(this.top),
      zIndex: this.top ? String(this.zIndex) : null,
    }
  }

  /**
   * Internal Methods
   */

  bind() {

    if (!this.watcher || this.disabled) return;

    this.observer = new IntersectionObserver(this.onIntersecting, { threshold: [1] });

    this.observer.observe(this.$element);
  }

  unbind() {
    this.observer?.disconnect();
  }

  /**
   * Watchers
   */

  @Watch('disabled')
  watcherDisabled(value) {
    value ? this.unbind() : this.bind();
  }

  @Watch('source')
  watcherSource(value) {
    value ? this.bind() : this.unbind();
  }

  /**
   * Events handler
   */

  @Bind()
  onIntersecting(entries: IntersectionObserverEntry[]) {

    const [entry] = entries;

    this.state = entry.intersectionRatio < 1 ? 'sticky' : 'normal';

    this.plusChange(this.state);
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="sizer-wrapper">
          <div
            class="sizer"
            ref={this.$element}
            style={{ top: this.sizer }}
          />
        </div>
        <slot />
        <div style={{ display: this.state === 'normal' ? 'block' : 'none' }}>
          <slot name="normal" />
        </div>
        <div style={{ display: this.state === 'sticky' ? 'block' : 'none' }}>
          <slot name="sticky" />
        </div>
      </Host>
    )
  }
}
