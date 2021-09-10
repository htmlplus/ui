import { Bind, Component, Element, Event, EventEmitter, Host, Property, State, Watch } from '@app/decorators';
import * as Helper from '@app/helper';
import { MenuAlignX, MenuAlignY, MenuGrowX, MenuGrowY } from './menu.types';

/**
 * @development
 */
@Component()
export class Menu {

  /**
   * TODO
   */
  @Property()
  alignX?: MenuAlignX = 'start';

  /**
   * TODO
   */
  @Property()
  alignY?: MenuAlignY = 'bottom';

  /**
   * TODO
   */
  @Property()
  fixed?: boolean;

  /**
   * TODO
   */
  @Property()
  growX?: MenuGrowX = 'auto';

  /**
   * TODO
   */
  @Property()
  growY?: MenuGrowY = 'auto';

  /**
   * TODO
   */
  @Property()
  offsetX?: string | number;

  /**
   * TODO
   */
  @Property()
  offsetY?: string | number;

  /**
   * TODO
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * TODO
   */
  @Property()
  persistent?: boolean;

  /**
   * TODO
   */
  @Property()
  trigger?: 'click' | 'hover' = 'click';

  /**
   * TODO
   */
  @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  @State()
  x?: string;

  @State()
  y?: string;

  @Element()
  $host!: HTMLElement;

  $activator!: HTMLElement;

  $content!: HTMLElement;

  observer?: any;

  get getGrowX() {

    if (this.growX && this.growX !== 'auto') return this.growX;

    const aligns = ['start', 'right', 'left', 'end'];

    for (let i = 0; i < aligns.length; i++) {

      const align = aligns[i];

      if (this.alignX !== align) continue;

      if (this.alignY === 'center') return align;

      return aligns[aligns.length - 1 - i];
    }

    return 'both';
  }

  get getGrowY() {

    if (this.growY && this.growY !== 'auto') return this.growY;

    if (this.alignY !== 'center') return this.alignY;

    return 'both';
  }

  get reverse() {
    return getComputedStyle(this.$host).getPropertyValue('direction') === 'rtl';
  }

  get style() {
    return this.s();
  }

  @Watch('fixed')
  @Watch('open')
  bind() {

    this.clean();

    if (!this.fixed || !this.open) return;

    // this.observer = new RectObserver(this.update);

    requestAnimationFrame(() => this.observer.observe(this.$host));
  }

  clean() {

    if (!this.observer) return;

    this.observer.disconnect();

    this.observer = undefined;
  }

  click(event) {

    const elements = Helper.eventPath(event);

    const index = elements.findIndex((element) => element === this.$activator);

    if (index < 2) return;

    if (this.alignX === 'pointer') this.x = `${event.offsetX}px`;

    if (this.alignY === 'pointer') this.y = `${event.offsetY}px`;

    this.open = !this.open;

    if (!this.open) this.plusClose.emit();
  }

  s(basex?: string, basey?: string) {

    const constants = {
      alignX: {
        'start': !this.reverse ? '0%' : '100%',
        'left': '0%',
        'center': '50%',
        'right': '100%',
        'end': !this.reverse ? '100%' : '0%',
      },
      alignY: {
        'top': '0%',
        'center': '50%',
        'bottom': '100%',
      },
      growX: {
        'start': !this.reverse ? '-100%' : '0%',
        'left': '-100%',
        'both': '-50%',
        'right': '0%',
        'end': !this.reverse ? '0%' : '-100%',
      },
      growY: {
        'top': '-100%',
        'both': '-50%',
        'bottom': '0%',
      }
    };

    let x = constants.growX[this.getGrowX];

    let y = constants.growY[this.getGrowY];

    let top = basey || (this.alignY === 'pointer' ? this.y : constants.alignY[this.alignY]);

    let left = basex || (this.alignX === 'pointer' ? this.x : constants.alignX[this.alignX]);

    if (this.offsetX && !this.getGrowX.match(/both/)) {

      const offset = Helper.toUnit(this.offsetX);

      const operator = this.getGrowX.match(/left|start/) ? '-' : '+';

      left = `calc(${left} ${operator} ${offset})`;
    }

    if (this.offsetY && !this.getGrowY.match(/both/)) {

      const offset = Helper.toUnit(this.offsetY);

      const operator = this.getGrowY.match(/top/) ? '-' : '+';

      top = `calc(${top} ${operator} ${offset})`;
    }

    return {
      top,
      left,
      transform: `translate(${x}, ${y})`,
      position: this.fixed ? 'fixed' : 'absolute',
      'z-index': '1',
    };
  }

  @Bind()
  update(entries) {

    const content: any = this.$host.shadowRoot.querySelector('.content');

    if (!content) return;

    const rect = entries[0].boundingClientRect;

    const style = this.s(rect.x.toString() + 'px', rect.y.toString() + 'px');

    Object.keys(style).map((key) => this.$content.style[key] = style[key]);
  }

  // TODO @Listen('click', { target: 'document', capture: true })
  onOutsideClick(event) {

    if (!this.open) return;

    const path = Helper.eventPath(event);

    const activator = this.$host.shadowRoot.querySelector('.activator');

    if (path.find((element) => element === activator)) return;

    if (this.persistent && path.find((element) => element === this.$host)) return;

    const result = this.plusClose.emit();

    if (!result.preventDefault) return;

    this.open = false;

    this.clean();
  }

  componentDidLoad() {
    this.bind();
  }

  disconnectedCallback() {
    this.clean()
  }

  render() {
    return (
      <Host>
        <div
          class="activator"
          ref={(element) => this.$activator = element}
          onClick={(event) => this.click(event)}
        >
          <slot name="activator" />
        </div>
        {this.open && (
          <div
            class="content"
            ref={(element) => this.$content = element}
            style={this.fixed ? {} : this.style}>
            <slot />
          </div>
        )}
      </Host>
    )
  }
}
