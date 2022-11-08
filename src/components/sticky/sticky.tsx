import { Attributes, Bind, Element, Event, EventEmitter, Property, State, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { StickyState, StickyTop } from './sticky.types';

/**
 * @slot default - The default slot.
 * @slot normal  - The normal slot.
 * @slot sticky  - The sticky slot.
 */
@Element()
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

  $element!: HTMLElement;

  @State()
  state?: StickyState = 'normal';

  observer?: IntersectionObserver;

  @Attributes()
  get attributes() {

    const attributes = {
      style: this.style
    };

    if (this.watcher) {
      attributes['state'] = this.state;
    }

    return attributes;
  }

  get sizer() {
    return `calc((${Helpers.toUnit(this.top)} + 1px) * -1)`;
  }

  get style() {
    return Helpers.styles({
      top: Helpers.toUnit(this.top),
      zIndex: this.top ? String(this.zIndex) : null,
    })
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

  @Watch(['disabled', 'watcher'])
  watchers(next, prev, key) {

    switch (key) {

      case 'disabled':

        next ? this.unbind() : this.bind();

        break;

      case 'watcher':

        next ? this.bind() : this.unbind();

        break;
    }
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
      <>
        <div className="sizer-wrapper">
          <div
            className="sizer"
            ref={($element) => this.$element = $element}
            style={{ top: this.sizer }}
          />
        </div>
        <slot />
        <div className="normal">
          <slot name="normal" />
        </div>
        <div className="sticky">
          <slot name="sticky" />
        </div>
      </>
    )
  }
}
