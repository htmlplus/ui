import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Query,
  Watch
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Animation2 } from '@/services';

/**
 * @stable
 * 
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 * 
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 * @slot top           - The top slot.
 * @slot middle        - The middle slot.
 * @slot bottom        - The bottom slot.
 */
@Element()
export class Accordion extends PlusCore {
  /**
   * Disables the element functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Control the element to expand or not.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * The summary text displayed on the header.
   */
  @Property()
  summary?: string;

  /**
   * Fires when the element is about to collapse.
   * This event can be [canceled](TODO).
   */
  @Event({ cancelable: true })
  plusCollapse!: EventEmitter<void>;

  /**
   * Fires after the element has collapsed.
   */
  @Event()
  plusCollapsed!: EventEmitter<void>;

  /**
   * Fires when the element is about to expand.
   * This event can be [canceled](TODO).
   */
  @Event({ cancelable: true })
  plusExpand!: EventEmitter<void>;

  /**
   * Fires after the element has expanded.
   */
  @Event()
  plusExpanded!: EventEmitter<void>;

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

  promise?: Promise<boolean>;

  /**
   * Collapses the element.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  collapse(): Promise<boolean> {
    return this.try(false, true);
  }

  /**
   * Expands the element.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  expand(): Promise<boolean> {
    return this.try(true, true);
  }

  /**
   * Toggles between `collapse` and `expand` state.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  toggle(): Promise<boolean> {
    return this.try(!this.open, true);
  }

  @Watch(['open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'open':
        // TODO: problem with `false` and `undefined`
        if (!next == !prev) break;
        this.try(next, true);
        break;
    }
  }

  initialize() {
    this.animate.initialize((this.opened = !!this.open) ? 'entered' : 'leaved');
  }

  terminate() {
    this.animate?.dispose();
  }

  async try(open: boolean, silent?: boolean): Promise<boolean> {
    // TODO
    if (this.disabled) return true;

    if (this.opened == open) return await this.promise;

    if (!silent) {
      const event = open ? this.plusExpand : this.plusCollapse;

      const prevented = event.call(this).defaultPrevented;

      // TODO
      if (prevented) return true;
    }

    this.opened = this.open = open;

    const fn = this.open ? this.animate.enter : this.animate.leave;

    this.promise = fn.bind(this.animate)(silent);

    return await this.promise;
  }

  @Bind()
  onClick() {
    this.try(!this.open, false);
  }

  @Bind()
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        this.try(!this.open, false);
        break;
    }
  }

  loadedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <>
        <slot name="top" />
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
        <slot name="middle" />
        <div className="body" part="body">
          <slot className="content" part="content"></slot>
        </div>
        <slot name="bottom" />
      </>
    );
  }
}
