import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Property,
  Query,
  Watch
} from '@htmlplus/element';

import { Animation2 } from '@app/services';

/**
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 */
@Element()
export class Accordion {
  /**
   * TODO.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * TODO.
   */
  @Property()
  summary?: string;

  /**
   * TODO.
   */
  @Event({ cancelable: true })
  plusCollapse!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event()
  plusCollapsed!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event({ cancelable: true })
  plusExpand!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event()
  plusExpanded!: EventEmitter<void>;

  @Host()
  $host!: HTMLElement;

  @Query('.body')
  $body!: HTMLElement;

  @Query('.header')
  $header!: HTMLElement;

  animate = new Animation2({
    key: 'state',
    source: () => this.$body,
    target: () => this.$host,
    states: {
      enter: 'expand',
      entering: 'expanding',
      entered: 'expanded',
      leave: 'collapse',
      leaving: 'collapsing',
      leaved: 'collapsed'
    },
    onEnter: () => {
      this.$body.style.height = '0';
    },
    onEntering: () => {
      this.opened = this.open = true;
      this.$body.style.height = this.$body.scrollHeight + 'px';
    },
    onEntered: (silent) => {
      this.$body.style.height = '';
      if (silent) return;
      this.plusExpanded();
    },
    onLeave: () => {
      this.$body.style.height = this.$body.scrollHeight + 'px';
    },
    onLeaving: () => {
      this.opened = this.open = false;
      this.$body.style.height = '0';
    },
    onLeaved: (silent) => {
      this.$body.style.height = '';
      if (silent) return;
      this.plusCollapsed();
    }
  });

  opened: boolean = false;

  @Method()
  async hide() {
    this.try(false, true);
  }

  @Method()
  async show() {
    this.try(true, true);
  }

  @Method()
  async toggle() {
    return this.open ? this.hide() : this.show();
  }

  @Watch(['open'])
  watcher(next, prev, name) {
    // TODO: problem with `false` and `undefined`
    if (!next == !prev) return;
    switch (name) {
      case 'open':
        this.try(next, true);
        break;
    }
  }

  bind() {
    this.animate.initialize((this.opened = this.open) ? 'entered' : 'leaved');
  }

  unbind() {
    this.animate?.dispose();
  }

  try(open: boolean, silent?: boolean) {
    if (this.disabled) return;

    if (this.opened == open) return;

    const event = open ? this.plusExpand : this.plusCollapse;

    if (!silent && event.call(this).defaultPrevented) return;

    this.opened = this.open = open;

    if (this.open) {
      this.animate.enter(silent);
    } else {
      this.animate.leave(silent);
    }
  }

  @Bind()
  onClick() {
    this.try(!this.open);
  }

  @Bind()
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        this.try(!this.open);
        break;
    }
  }

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <>
        <div
          aria-disabled={!!this.disabled}
          aria-expanded={!!this.open}
          className="header"
          part="header"
          role="button"
          tabIndex={this.disabled ? -1 : 0}
          onClick={this.onClick}
          onKeyDown={this.onKeyDown as any}
        >
          <slot className="summary" name="summary" part="summary">
            {this.summary}
          </slot>
          <slot className="icon" name="icon">
            <slot name={`icon-${this.open ? 'collapse' : 'expand'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                part="svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </slot>
          </slot>
        </div>
        <div className="body" part="body">
          <slot className="content" part="content"></slot>
        </div>
      </>
    );
  }
}
