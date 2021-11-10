import { Attributes, Component, GlobalConfig, Property } from '@app/decorators';
// import * as Helpers from '@app/helpers';
import { DividerSize, DividerType } from './divider.types';

/**
 */
@Component()
export class Divider {

  /**
   * TODO
   */
  // @Property({ reflect: true })
  // placement?: DividerPlacement = 'center';

  /**
   * Determines the width of the divider.
   */
  @Property({ reflect: true })
  size?: DividerSize = 'md';

  /**
   * Specifies different divider styles.
   */
  @Property({ reflect: true })
  type?: DividerType = 'solid';

  /**
   * TODO
   */
  // @Property({ reflect: true })
  // variant?: DividerVariant = 'full';

  /**
   * You can use vertical property for vertical division.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  @GlobalConfig('divider', {
    // placement: 'center',
    size: 'md',
    type: 'solid',
    variant: 'full',
  })
  config?;

  @Attributes()
  get attributes() {
    return {
      'role': 'separator',
      'aria-orientation': this.orientation,
    }
  }

  // get Classes() {
  //   return {
  //     'root': true,
  //     [Helpers.direction(this)]: true,
  //   }
  // }

  // get hasBefore() {
  //   return Helper.fromAxis(this.placement, Helpers.host(this)) !== 'start';
  // }

  // get hasAfter() {
  //   return Helper.fromAxis(this.placement, Helpers.host(this)) !== 'end';
  // }

  get orientation() {
    return this.vertical ? 'vertical' : 'horizontal';
  }

  render() {
    return (
      <>
        {/* TODO */}
        {/* <div class={this.classes}>
          {this.hasBefore && (
            <div class="before" />
          )}
          <div class="content">
            <slot />
          </div>
          {this.hasAfter && (
            <div class="after" />
          )}
        </div> */}
      </>
    )
  }
}
