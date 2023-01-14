import { Attributes, Bind, Element, Property, State } from '@htmlplus/element';

import * as Helpers from '@app/helpers';

// const { Inject } = createLink('BottomNavigation');

/**
 * @development
 * @group bottom-navigation
 * @slot default - The default slot.
 */
@Element()
export class BottomNavigationItem {
  /**
   * TODO
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Property()
  value?: any;

  // @Inject()
  request?: Function = () => console.log('TODO: can not use out of bottom navigation');

  // @Inject()
  @State()
  tunnel?: any;

  @Attributes()
  get attributes() {
    return {
      grow: this.tunnel?.grow,
      role: 'button',
      state: this.state,
      onClick: () => this.onClick()
    };
  }

  get classes() {
    return Helpers.classes({
      root: true,
      shift: this.tunnel?.shift,
      [this.tunnel?.labelPosition]: true
    });
  }

  get key() {
    return this.value ?? this;
  }

  get state() {
    return this.key === this.tunnel?.value ? 'active' : 'deactive';
  }

  /**
   * Events handler
   */

  @Bind()
  onClick() {
    if (this.disabled) return;

    this.request(this.key);
  }

  /**
   * Lifecycles
   */

  render() {
    return (
      <div className={this.classes}>
        <slot />
        <slot name="label" />
      </div>
    );
  }
}
